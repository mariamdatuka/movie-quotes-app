import {Typography } from "@mui/material"
import MainInput from "../MainInput/MainInput"
import { MainButton } from "../MainButton/MainButton"
import {Form,Back} from "./Styles"
import { useTheme } from '@mui/material/styles';
import {HiArrowSmLeft} from 'react-icons/hi';
import useModalStore from "../../Store/Store"
import LogIn from "../LogIn/LogIn";
import Success from "./Success";

const NewPassword = () => {
  const theme=useTheme();
  const updateModalContent=useModalStore((state)=>state.updateModalContent);
  return (
    <>
       <Typography variant='h4' sx={theme.typography.h4}>Create new password</Typography>
             <Typography variant='body2' sx={theme.typography.body2}>Your new password must be different from <br/>
            previous used passwords</Typography>
           <Form onSubmit={()=>updateModalContent(<Success/>)}>
               <MainInput type='password' 
                     placeholder='At least 8 & max.15 lower case characters'
                     label='Password'
                     id='password'/>
                <MainInput type='password' 
                     placeholder='confirm password'
                     label='confirmPassword'
                     id='confirmPassword'/>
               <MainButton type='submit' text='reset password' 
                      sx={{width:'360px'}}/>            
           </Form>  
        <Back onClick={()=>updateModalContent(<LogIn/>)}>
           <HiArrowSmLeft/> back to log in
        </Back>
    </>
  )
}

export default NewPassword