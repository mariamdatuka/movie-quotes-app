import Vector from '../../assets/icons/Vector.png';
import { Container } from "./Styles";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainButton } from "../common/MainButton/MainButton";

const ThankYou = () => {
    const theme=useTheme();
    
  return (
    <>
   <Container> 
        <Box>
           <img src={Vector} alt='vector'/>
        </Box>
          <Typography variant='h4' sx={theme.typography.h4}>Thank You!</Typography>
          <Typography variant='body1' sx={theme.typography.body1}>Please check your email and follow the instructions to
          activate your account.</Typography>
          <MainButton text='go to my email' sx={{width:'360px'}}/>
    </Container>
   </>
  )
}

export default ThankYou