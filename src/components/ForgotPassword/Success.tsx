import check from '../../assets/icons/check.png'
import { Box, Typography } from "@mui/material";
import { MainButton } from "../common/MainButton/MainButton";

const Success = () => {

  return (
    <>
         <Box>
           <img src={check} alt='success'/>
        </Box>
          <Typography variant='h4'>Success!</Typography>
          <Typography variant='body1'>Your Password changed   successfully
         l</Typography>
    <MainButton text='Log in' sx={{width:'360px'}}/>
    </>
  )
}

export default Success