import expired from '../../assets/icons/expired.png'
import { Box, Typography } from "@mui/material";
import { MainButton } from "../common/MainButton/MainButton";

const Expired = () => {
 
  return (
    <>
        <Box>
           <img src={expired} alt='expired'/>
        </Box>
          <Typography variant='h4'>Link expired!</Typography>
          <Typography variant='body1'>Login link has expired, because you haven't used it
         l</Typography>
    <MainButton text='request another link' sx={{width:'360px'}}/>
    </>
  )
}

export default Expired