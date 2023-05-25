import { MyButton } from "./Styles"
import { ButtonProps } from "../../../Types"

export const MainButton: React.FC<ButtonProps> = ({
    text,
    type,
    sx,
    onClick,
}) => {
  return (
    <>
     <MyButton
       type={type}
       sx={sx}
       onClick={onClick}
      >
        {text}
     </MyButton>
    </>
  )
}
