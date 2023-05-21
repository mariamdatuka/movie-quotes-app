import { SecBtn } from "./Styles"
import { ButtonProps } from "../../../Types"

const SecondaryBtn:React.FC<ButtonProps> = ({
    type,
    sx,
    onClick,
    text,
    className,
    children
}) => {
  return (
    <>
      <SecBtn
         type={type}
         sx={sx}
         onClick={onClick}
         className={className}>
         {children} {text}
      </SecBtn>
    </>
  )
}

export default SecondaryBtn