import {styled} from '@mui/system'
import { Stack } from '@mui/material'

export const Container=styled(Stack)({
     alignItems:'center',
     justifyContent:'center',
     gap:'10px',
     height:'100vh',

     '& body1':{
        textAlign:'center',
     }
})