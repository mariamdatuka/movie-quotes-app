import { styled } from "@mui/material";
import {Stack, Typography,Box} from "@mui/material";

export const StyledTypography = styled(Typography)(({ theme }) => ({
  "& h1": theme.typography.h1,
  "& h2": theme.typography.h2,
  "& body1": theme.typography.body1,
  // Add more styles as needed
}));

export const TitleBox=styled(Stack)({
    height:'100vh',
    gap:'30px',
    alignItems:'center',
    justifyContent:'center',
    '& h1':{
        textAlign:'center',
    }
})

export const ImgBox=styled(Box)({
    '& img':{
        width:'100%',
        height:'100%',
        objectFit:'contain'
    }
})