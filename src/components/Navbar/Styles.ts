import { styled } from "@mui/system";
import { Stack,Typography,Select } from "@mui/material";

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

export const SelectBtn=styled(Select)({
    border:'none',
    fontSize:'12px',
    height:'40px',
    color:'#fff',

     '& svg': {
      fill:' #fff',
    }, 
     
    '& .MuiSelect-select':{
      border: 'none',
      boxShadow: 'none',
    },
})