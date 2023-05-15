import { Modal,Box } from "@mui/material";
import {styled} from '@mui/system';

export const StyledModal = styled(Modal)({
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
})

export const Container=styled(Box)(({theme})=>({
     width:'600px',
     padding:'40px',
     borderRadius:'5px',
     backgroundColor:theme.palette.info.dark,
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
}))