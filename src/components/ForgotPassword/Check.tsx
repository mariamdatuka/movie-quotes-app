import check from '../../assets/icons/Vector.png'
import { Box, Typography } from "@mui/material";
import { MainButton } from "../common/MainButton/MainButton";
import { SkipBtn } from './Styles';
import useModalStore from "../../Store/Store";
import NewPassword from './NewPassword';


const Check = () => {

    const updateModalContent=useModalStore((state)=>state.updateModalContent);
  return (
    <>
        <Box>
           <img src={check} alt='check'/>
        </Box>
          <Typography variant='h4'>Check your email</Typography>
          <Typography variant='body1'>We have sent a password recover instructions 
       <br/>to your email</Typography>
    <MainButton onClick={()=>updateModalContent(<NewPassword/>)}text='go to my email' sx={{width:'360px'}}/>
    <SkipBtn>Skip I'll confirm later</SkipBtn>
    </>
  )
}

export default Check