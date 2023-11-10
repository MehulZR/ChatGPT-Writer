import type { ComponentPropsWithoutRef } from "react"

type ButtonProps = {
  isLoading?: boolean
  color?: "black" | "white"
  wide?: boolean
} & ComponentPropsWithoutRef<"button">
const Button = ({
  isLoading,
  color = "black",
  wide,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`relative text-base px-4 py-2 ${wide && "w-full"} ${
        color === "black" ? "bg-black text-white/90" : "bg-white text-black"
      } rounded-md`}>
      <p className={`${isLoading && "opacity-0"}`}>{props.children}</p>
      {isLoading && (
        <svg
          className="absolute w-5 h-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      )}
    </button>
  )
}
export default Button
