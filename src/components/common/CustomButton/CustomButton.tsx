import { ButtonProps } from "../../../Types"
import { CustomBtn } from "./Styles"

const CustomButton:React.FC<ButtonProps> = ({
    type,
    sx,
    onClick,
    text,
    children
}) => {
  return (
    <>
     <CustomBtn
        type={type}
        sx={sx}
        onClick={onClick}>
          {children} {text}
     </CustomBtn>
    </>
  )
}

export default CustomButton