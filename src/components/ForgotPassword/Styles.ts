import {styled} from '@mui/system'
import { Button,Typography } from '@mui/material'

export const Form=styled('form')({
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
   gap:'15px',
   marginTop:'20px',
})

export const Error=styled(Typography)(({theme})=>({
   fontSize:'12px',
   color:theme.palette.primary.dark,
   alignSelf:'flex-start',
}))

export const ForgetPassword=styled(Button)({
   border:'none',
   fontSize:'13px',
   color:'#0D6EFD',
   textDecoration:'underline',
   fontWeight:'300',
   textTransform:'capitalize',
})

export const Back=styled(Button)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'14px',
    color:theme.palette.info.main,
    backgroundColor:'none',
    border:'none',
    textTransform:'lowercase'
 }))

 export const SkipBtn=styled(Button)(({theme})=>({
   fontSize:'14px',
   color:theme.palette.info.main,
   backgroundColor:'none',
   border:'none',
   textTransform:'lowercase'
}))