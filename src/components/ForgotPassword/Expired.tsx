import expired from '../../assets/icons/expired.png'
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MainButton } from "../MainButton/MainButton";

const Expired = () => {
    const theme=useTheme();
  return (
    <>
        <Box>
           <img src={expired} alt='expired'/>
        </Box>
          <Typography variant='h4' sx={theme.typography.h4}>Link expired!</Typography>
          <Typography variant='body1' sx={theme.typography.body1}>Login link has expired, because you haven't used it
         l</Typography>
    <MainButton text='request another link' sx={{width:'360px'}}/>
    </>
  )
}

export default Expired