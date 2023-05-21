import { MyButton } from "./Styles"
import { ButtonProps } from "../../../Types"

export const MainButton: React.FC<ButtonProps> = ({
    text,
    type,
    sx,
    onClick,
    className
}) => {
  return (
    <>
     <MyButton
       type={type}
       sx={sx}
       onClick={onClick}
       className={className}
      >
        {text}
     </MyButton>
    </>
  )
}
