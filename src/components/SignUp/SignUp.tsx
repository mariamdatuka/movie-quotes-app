import { Stack,Typography,Box } from "@mui/material"
import MainInput from "../MainInput/MainInput"
import { MainButton } from "../MainButton/MainButton"
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn"
import {Form, LogInButton} from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'
import { useTheme } from '@mui/material/styles';



const SignUp = () => {
  const theme=useTheme();

  return (
      <>
    <Stack style={{gap:'15px', alignItems:'center'}}>
      <Typography variant='h4' style={theme.typography.h4}>Create an account</Typography>
      <Typography variant='body2' style={theme.typography.body2}>Start your journey!</Typography>
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
       <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <Typography variant='body2' style={theme.typography.body2}>
              Already have an account?
           </Typography>
           <LogInButton>Log In</LogInButton>
       </Box>
    </Stack> 
      </>
  )
}

export default SignUp