import {styled} from '@mui/system'
import { TextField} from '@mui/material'

export const MyInput=styled(TextField)(({theme})=>({
      width:'360px',
     "& .css-1wc848c-MuiFormHelperText-root.Mui-error": {
      fontSize: "12px",
      width: "100%",
      padding: "0.5rem 0",
      textAlign: "left",
    },

    "& input::placeholder":{
      fontSize:'14px',
    },
  
    "& input": {
      padding: theme.spacing(1.5, 3),
      color: theme.palette.info.main,
    },
  
    "& .MuiOutlinedInput-root": {
      borderRadius: '5px',
      backgroundColor: theme.palette.info.light,
  
      "& fieldset": {
        border: 'none',
      },
    },
    
}))