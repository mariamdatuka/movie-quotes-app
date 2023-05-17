import {styled} from '@mui/system'
import { Button,Typography } from '@mui/material'

export const Form=styled('form')({
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
   gap:'15px',
   marginTop:'20px',
})

export const LogInButton=styled(Button)({
   border:'none',
   fontSize:'13px',
   color:'#0D6EFD',
   textDecoration:'underline',
   fontWeight:'300',
   cursor:'pointer',
})

export const Error=styled(Typography)(({theme})=>({
   fontSize:'12px',
   color:theme.palette.primary.dark,
   alignSelf:'flex-start',
}))