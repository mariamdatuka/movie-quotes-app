import check from '../../assets/icons/check.png'
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainButton } from "../MainButton/MainButton";

const Success = () => {

    const theme=useTheme();
   

  return (
    <>
         <Box>
           <img src={check} alt='success'/>
        </Box>
          <Typography variant='h4' sx={theme.typography.h4}>Success!</Typography>
          <Typography variant='body1' sx={theme.typography.body1}>Your Password changed   successfully
         l</Typography>
    <MainButton text='Log in' sx={{width:'360px'}}/>
    </>
  )
}

export default Success