import {Typography } from "@mui/material"
import MainInput from "../common/MainInput/MainInput"
import { MainButton } from "../common/MainButton/MainButton"
import {Form,Back} from "./Styles"
import {HiArrowSmLeft} from 'react-icons/hi';
import useModalStore from "../../Store/Store"
import LogIn from "../LogIn/LogIn";
import Check from "./Check";


const ForgotPassword = () => {

  const updateModalContent=useModalStore((state)=>state.updateModalContent);


  return (
  
          <>
             <Typography variant='h4'>Forgot Password?</Typography>
             <Typography variant='body2'>Enter the email and we'll send an email with 
             instructions to reset your password</Typography>
           <Form onSubmit={()=>updateModalContent(<Check/>)}>
               <MainInput type='email' 
                     showStar={false}
                     placeholder='Enter your email'
                     label='Email'
                     id='email'/>
               <MainButton type='submit' text='send instructions' 
                      sx={{width:'360px'}}/>            
           </Form>  
        <Back onClick={()=>updateModalContent(<LogIn/>)}>
           <HiArrowSmLeft/> back to log in
        </Back>
     </>
  )
}

export default ForgotPassword