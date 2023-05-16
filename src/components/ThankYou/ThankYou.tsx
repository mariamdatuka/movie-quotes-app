import ModalWindow from "../Modal/ModalWindow"
import Vector from '../../assets/icons/Vector.png';
import {useState} from 'react';
import { Container } from "./Styles";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainButton } from "../MainButton/MainButton";

const ThankYou = () => {
    const [isOpen,setIsOpen]=useState<boolean>(true);

    const theme=useTheme();

    const handleVisible=()=>{
        setIsOpen(false);
    }
  return (
    <>
    <ModalWindow open={isOpen} onClose={handleVisible}>
     <Container> 
        <Box>
           <img src={Vector} alt='vector'/>
        </Box>
          <Typography variant='h4' style={theme.typography.h4}>Thank You!</Typography>
          <Typography variant='body1' style={theme.typography.body1}>Please check your email and follow the instructions to
          activate your account.</Typography>
          <MainButton text='go to my email' sx={{width:'360px'}}/>
      </Container>
    </ModalWindow>
    </>
  )
}

export default ThankYou