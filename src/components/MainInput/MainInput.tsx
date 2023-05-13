import { MyInput } from "./Styles"
import { InputProps } from "../../Types"

const MainInput = ({
    id,
    error,
    helperText,
    type,
    placeholder,
    multiline,
    value,
    onChange,
    rows,
    sx,
    disabled,
    label,
}:InputProps) => {
  return (
    <MyInput
    id={id}
    error={error}
    helperText={helperText}
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    sx={sx}
    multiline={multiline}
    rows={rows}
    disabled={disabled}
    label={label}
     />
  )
}

export default MainInput