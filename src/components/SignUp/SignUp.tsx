import { Stack, Typography } from "@mui/material"
import MainInput from "../MainInput/MainInput"
import { MainButton } from "../MainButton/MainButton"
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn"
import { Form } from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'



const SignUp = () => {
  return (
      <>
    <Stack>
      <Typography component='h3'>Create an account</Typography>
      <Typography component='h5'>Start your journey!</Typography>
       <Form>
          <MainInput type='text' 
                     placeholder='At least 3 & max.15 lower case characters' 
                     label='Name'/>
          <MainInput type='email' 
                     placeholder='Enter your email'
                     label='Email'/>
          <MainInput type='text' 
                     placeholder='At least 8 & max.15 lower case characters'
                     label='Password'/>
          <MainInput type='text' 
                     placeholder='Confirm password'
                     label='Confirm password'/>
          <MainButton text='get started' 
                      sx={{width:'360px'}}/>
          <SecondaryBtn text='Sign up with Google' 
                        sx={{width:'360px'}}>
               <AiOutlineGoogle/>
          </SecondaryBtn>
       </Form>
    </Stack> 
      </>
  )
}

export default SignUp