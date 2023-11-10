import type { PlasmoMessaging } from "@plasmohq/messaging"
import { Storage } from "@plasmohq/storage"

const storage = new Storage()

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  await storage.set("generatedResult", "")
  const { promptQuery } = req.body
  try {
    const response = await fetch(
      process.env.PLASMO_PUBLIC_BACKEND_URL || "http://localhost:3000/api",
      {
        method: "POST",
        body: JSON.stringify({ prompts: promptQuery })
      }
    )
    if (!response.ok || !response.body) {
      console.error({ status: response.status, message: response.statusText })
      res.send({ status: "FAIL" })
      return
    }
    const reader = response.body
      .pipeThrough(new TextDecoderStream())
      .getReader()
    while (true) {
      const { value, done } = await reader.read()
      if (done) {
        res.send({ status: "OK" })
        return
      } else {
        await storage.set(
          "generatedResult",
          (await storage.get("generatedResult")) + value
        )
      }
    }
  } catch (err) {
    console.error(err)
    res.send({ status: "FAIL" })
  }
}

export default handler
