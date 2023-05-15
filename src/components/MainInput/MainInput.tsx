import { MyInput } from "./Styles"
import { InputProps } from "../../Types"
import { InputLabel, Box,Stack} from "@mui/material"
import {CgAsterisk} from 'react-icons/cg'
import { useTheme } from '@mui/material/styles';


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
    label
}:InputProps) => {

const theme=useTheme();

  return (
    <>
  <Stack style={{gap:'10px'}}> 
    <Box display="flex" alignItems="center">
        <InputLabel style={{color:theme.palette.primary.light}}>
          {label}
         <CgAsterisk style={{color:'red'}}/>
        </InputLabel>
    </Box>
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
       disabled={disabled}/>
  </Stack> 
    </>

   
  )
}

export default MainInput