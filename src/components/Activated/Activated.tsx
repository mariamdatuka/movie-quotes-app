import { useTheme } from "@mui/material/styles";
import { MainButton } from "../MainButton/MainButton";
import { Typography,Box } from "@mui/material";
import { Container } from "./Styles";
import { useNavigate } from "react-router-dom";

import check from '../../assets/icons/check.png'

const Activated = () => {

 const navigate=useNavigate();
 const theme=useTheme();
   
 //navigate to Profile page onbtn click
  const handleClick=()=>{
    navigate('/profile')
  }

  return (
    <>

     <Container> 
        <Box>
           <img src={check} alt='vector'/>
        </Box>
          <Typography variant='h4' sx={theme.typography.h4}>Thank You!</Typography>
          <Typography variant='body1' sx={theme.typography.body1}>Your account has been activated</Typography>
          <MainButton text='go to my news feed' sx={{width:'360px'}} onClick={handleClick}/>
     </Container>
 
    </>
  )
}

export default Activated