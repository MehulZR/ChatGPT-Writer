import type { ComponentPropsWithoutRef } from "react"

type InputProps = ComponentPropsWithoutRef<"input">
const TextInput = (props: InputProps) => {
  return (
    <input
      {...props}
      type="text"
      className="w-full px-4 py-2 bg-black border rounded-md outline-none placeholder:text-neutral-700 border-neutral-700 text-md"
    />
  )
}

export default TextInput
