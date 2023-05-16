import {useState} from 'react';
import { useTheme } from "@mui/material/styles";
import { MainButton } from "../MainButton/MainButton";
import { Typography,Box } from "@mui/material";
import { Container } from "./Styles";
import ModalWindow from "../Modal/ModalWindow"
import check from '../../assets/icons/check.png'

const Activated = () => {
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
           <img src={check} alt='vector'/>
        </Box>
          <Typography variant='h4' style={theme.typography.h4}>Thank You!</Typography>
          <Typography variant='body1' style={theme.typography.body1}>Your account has been activated</Typography>
          <MainButton text='go to my news feed' sx={{width:'360px'}}/>
      </Container>
    </ModalWindow>
    </>
  )
}

export default Activated