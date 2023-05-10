import { styled } from "@mui/system";
import { Stack,Typography } from "@mui/material";

export const NavBox = styled(Stack)({
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   padding:'10px',
})

export const Logo=styled(Typography)(({ theme })=>({
   fontSize:'16px',
   color:theme.palette.primary.main,
   textTransform:'uppercase'
}))