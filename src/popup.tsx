import { useStorage } from "@plasmohq/storage/hook"

import "./style.css"

import Button from "~components/button"
import Logo from "~components/Logo"

const Main = () => {
  const [contentScriptUIOpen, setContentScriptUIOpen] = useStorage(
    "contentScriptUIOpen",
    (v) => (v === undefined ? false : v)
  )
  return (
    <div className="w-[200px] flex flex-col items-center justify-between gap-2 p-4 bg-neutral-900 text-white/90">
      <div className="flex items-center gap-2 text-lg font-semibold whitespace-nowrap">
        <Logo width="20px" height="20px" />
        <p className="">ChatGPT Writer</p>
      </div>
      <Button wide onClick={() => setContentScriptUIOpen(!contentScriptUIOpen)}>
        {contentScriptUIOpen ? "Close" : "Open"}
      </Button>
    </div>
  )
}
export default Main
