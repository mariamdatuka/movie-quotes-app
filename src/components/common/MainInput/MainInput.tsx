import { useState } from "react"
import { MyInput } from "./Styles"
import { TextfieldProps } from "../../../Types"
import { InputLabel, Box,Stack, InputAdornment,IconButton} from "@mui/material"
import {CgAsterisk} from 'react-icons/cg'
import { useTheme } from '@mui/material/styles';
import {MdOutlineVisibility, MdOutlineVisibilityOff} from 'react-icons/md';



const MainInput = ({
    id,
    error,
    helperText,
    type,
    placeholder,
    multiline,
    value,
    onChange,
    onBlur,
    rows,
    sx,
    disabled,
    label,
    defaultValue,
}:TextfieldProps) => {

  const [showPassword,setShowPassword]=useState<boolean>(false);
  const theme=useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isPasswordType = type === 'password';


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
       onBlur={onBlur}
       type={showPassword ? 'text' : type}
       placeholder={placeholder}
       sx={sx}
       multiline={multiline}
       rows={rows}
       defaultValue={defaultValue}
       disabled={disabled}
       InputProps={
        isPasswordType
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    onClick={togglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <MdOutlineVisibilityOff/> : <MdOutlineVisibility />}
                  </IconButton>
                </InputAdornment>
              )
            }
          : undefined
      }
    />
  </Stack> 
    </>

   
  )
}

export default MainInput