import { MyButton } from "./Styles"

interface MainButtonProps{
    text:string;
    type?:"button" | "reset" | "submit";
    sx?:any;
    onClick?:()=>void;
    className?:string;
}


export const MainButton: React.FC<MainButtonProps> = ({
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
