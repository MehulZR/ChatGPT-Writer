import cssText from "data-text:./style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"
import { useStorage } from "@plasmohq/storage/hook"

import Button from "~components/button"
import TextInput from "~components/input"
import Logo from "~components/Logo"

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

const Main = () => {
  const [contentScriptUIOpen, setContentScriptUIOpen] = useStorage(
    "contentScriptUIOpen",
    (v) => (v === undefined ? false : v)
  )
  const [generatedResult, setGeneratedResult] = useStorage(
    "generatedResult",
    (v) => (v === undefined ? "" : v)
  )
  const [promptQuery, setPromptQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorExist, setErrorExist] = useState(false)
  const generate = async () => {
    if (!promptQuery) return
    setIsLoading(true)
    const result = await sendToBackground({
      name: "generateResult",
      body: { promptQuery }
    })
    if (result.status !== "OK") showErrorMessage()
    setPromptQuery("")
    setIsLoading(false)
  }
  const showErrorMessage = () => {
    setErrorExist(true)
    setTimeout(() => setErrorExist(false), 3000)
  }
  if (!contentScriptUIOpen) return null
  return (
    <div className="flex flex-col fixed  font-sans top-1/2 right-1/2 justify-between translate-x-1/2 gap-4 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900 p-4 rounded-md text-white/90">
      <button
        className="absolute top-2 right-2"
        onClick={() => setContentScriptUIOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex items-center gap-2">
        <Logo width="24px" height="24px" />
        <p className="text-2xl font-semibold leading-relaxed">ChatGPT Writer</p>
      </div>
      {errorExist && (
        <p className="px-4 py-2 font-semibold bg-red-600 rounded-md">
          Failed to fetch the query
        </p>
      )}
      <div className="flex-grow overflow-y-auto leading-relaxed text-white/90">
        {generatedResult}
      </div>
      <div
        className="flex items-center justify-between flex-none w-full gap-4"
        tabIndex={1}
        onKeyDown={(e) => e.key === "Enter" && generate()}>
        <TextInput
          type="text"
          id="Input"
          placeholder="Tell me about ChatGPT Writer"
          value={promptQuery}
          onChange={(e) => setPromptQuery(e.target.value)}
        />
        <Button color="white" onClick={generate} isLoading={isLoading}>
          Generate
        </Button>
      </div>
    </div>
  )
}

export default Main
