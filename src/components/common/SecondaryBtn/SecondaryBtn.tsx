import { SecBtn } from "./Styles"
import { ButtonProps } from "../../../Types"

const SecondaryBtn:React.FC<ButtonProps> = ({
    type,
    sx,
    onClick,
    text,
    children
}) => {
  return (
    <>
      <SecBtn
         type={type}
         sx={sx}
         onClick={onClick}
         >
         {children} {text}
      </SecBtn>
    </>
  )
}

export default SecondaryBtn