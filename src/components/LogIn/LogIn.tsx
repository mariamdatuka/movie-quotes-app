import { Stack,Typography,Box,Checkbox,FormControlLabel } from "@mui/material"
import MainInput from "../MainInput/MainInput"
import { MainButton } from "../MainButton/MainButton"
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn"
import {Form, LogInButton} from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'
import { useTheme } from '@mui/material/styles';


const LogIn = () => {

  const theme=useTheme();

  return (
    <>
    <Stack style={{gap:'15px', alignItems:'center'}}>
             <Typography variant='h4' style={theme.typography.h4}>Log in to your account</Typography>
             <Typography variant='body2' style={theme.typography.body2}>Welcome back! Please enter your details.</Typography>
       <Form>
          <MainInput type='email' 
                     placeholder='Enter your email'
                     label='Email'
                     id='email'/>
          <MainInput type='password' 
                     placeholder='Password'
                     label='Password'
                     id='email'/>   
          <Box style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'80px'}}>
              <FormControlLabel control={<Checkbox/>} label="Remember me" />
              <button>Forgot Password</button>
          </Box>        
           <MainButton type='submit' text='sign in' 
                      sx={{width:'360px'}}/>
           <SecondaryBtn text='Sign in with Google' 
                        sx={{width:'360px'}}>
               <AiOutlineGoogle/>
          </SecondaryBtn>             
        </Form>  
        <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <Typography variant='body2' style={theme.typography.body2}>
             Do not have an account?
           </Typography>
           <LogInButton>Sign Up</LogInButton>
       </Box>                     
      </Stack>
    </>
  )
}

export default LogIn