type LogoProps = {
  width: string
  height: string
}
const Logo = ({ width, height }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 64 64">
      <g clipPath="url(#clip0_1_2)">
        <path
          fill="#4F5D73"
          d="M32 64c17.673 0 32-14.327 32-32C64 14.327 49.673 0 32 0 14.327 0 0 14.327 0 32c0 17.673 14.327 32 32 32z"></path>
        <path
          fill="#231F20"
          d="M46.9 17.5c-.2-.3-.5-.5-.9-.5H29c-.4 0-.7.2-.9.6l-8 16c-.2.3-.1.7 0 1 .2.3.5.5.9.5h5.5l-8.4 18.6c-.2.4-.1.9.3 1.2.2.1.4.2.6.2.2 0 .5-.1.6-.2l24-20c.3-.3.4-.7.3-1.1-.1-.5-.5-.8-.9-.8h-6.1l9.9-14.4c.2-.3.3-.7.1-1.1z"
          opacity="0.2"></path>
        <path
          fill="#75FBF3"
          d="M46.9 15.5c-.2-.3-.5-.5-.9-.5H29c-.4 0-.7.2-.9.6l-8 16c-.2.3-.1.7 0 1 .2.3.5.5.9.5h5.5l-8.4 18.6c-.2.4-.1.9.3 1.2.2.1.4.2.6.2.2 0 .5-.1.6-.2l24-20c.3-.3.4-.7.3-1.1-.1-.5-.5-.8-.9-.8h-6.1l9.9-14.4c.2-.3.3-.7.1-1.1z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1_2">
          <path fill="#fff" d="M0 0h64v64H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default Logo
