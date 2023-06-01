import {Typography,Box,Checkbox,FormControlLabel } from "@mui/material"
import MainInput from "../common/MainInput/MainInput"
import { MainButton } from "../common/MainButton/MainButton"
import SecondaryBtn from "../common/SecondaryBtn/SecondaryBtn"
import {Form, LogInButton, ForgetPassword,Error} from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'
import SignUp from "../SignUp/SignUp"
import useModalStore from "../../Store/Store"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom"
import ForgotPassword from "../ForgotPassword/ForgotPassword"
import api from '../../api'



const LogIn = () => {


  const navigate=useNavigate();
  const updateModalContent=useModalStore((state)=>state.updateModalContent);


  const logInUser=async(values:any)=>{
     try {
       const response= await api.post('/login', values)
      if(response.status===200){
         navigate('/profile')
      }
    } catch (error) {
        console.log(error);
     }
  }

  const validationSchema=Yup.object().shape({
    email:Yup.string().required('must not be empty').email('invalid email'),
    password:Yup.string().required('must not be empty'),
  })

  const formik=useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema,
    onSubmit:(values)=>{
      console.log(values);
      logInUser(values);
    }
  })


  return (
         <>
            <Typography variant='h4'>Log in to your account</Typography>
            <Typography variant='body2'>Welcome back! Please enter your details.</Typography>
       <Form onSubmit={formik.handleSubmit}>
          <MainInput type='email' 
                     placeholder='Enter your email'
                     label='Email'
                     id='email'
                     showStar
                     value={formik.values.email}
                     onChange={formik.handleChange}/>
                      {formik.touched.email && formik.errors.email && (
                          <Error>{formik.errors.email}</Error>
                       )}
          <MainInput type='password' 
                     placeholder='Password'
                     label='Password'
                     id='password'
                     showStar
                     value={formik.values.password}
                     onChange={formik.handleChange}/>  
                      {formik.touched.password && formik.errors.password && (
                          <Error>{formik.errors.password}</Error>
                       )} 
          <Box style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'60px'}}>
              <FormControlLabel control={<Checkbox/>} label="Remember me" />
              <ForgetPassword onClick={()=>updateModalContent(<ForgotPassword/>)}>Forgot Password</ForgetPassword>
          </Box>        
           <MainButton type='submit' text='sign in' 
                      sx={{width:'360px'}}/>
           <SecondaryBtn text='Sign in with Google' 
                        sx={{width:'360px'}}>
               <AiOutlineGoogle/>
          </SecondaryBtn>             
        </Form>  
        <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Typography variant='body2'>
             Do not have an account?
            </Typography>
            <LogInButton onClick={()=>updateModalContent(<SignUp/>)}>Sign Up</LogInButton>
       </Box>                     
  </>
  )
}

export default LogIn