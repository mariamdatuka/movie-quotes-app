import { styled } from "@mui/system";
import { Box,Typography } from "@mui/material";

export const NavBox = styled(Box)({
   display:'flex',
   alignItems:'center',
   justifyContent:'space-between',
   padding:'20px 30px',
   backgroundColor:'#262530',

   '& img':{
    width:'20px',
   }
})

export const Logo=styled(Typography)(({ theme })=>({
   fontSize:'16px',
   color:theme.palette.primary.main,
   textTransform:'uppercase'
}))