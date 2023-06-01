import {Typography,Box } from "@mui/material"
import MainInput from "../common/MainInput/MainInput"
import { MainButton } from "../common/MainButton/MainButton"
import SecondaryBtn from "../common/SecondaryBtn/SecondaryBtn"
import {Form, LogInButton,Error} from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import LogIn from "../LogIn/LogIn"
import useModalStore from "../../Store/Store"
import ThankYou from "../ThankYou/ThankYou"
import api from '../../api';




const SignUp = () => {

  const updateModalContent=useModalStore((state)=>state.updateModalContent);

  //send userData with backLink
  const registerUser=async(values:any)=>{
   const userData = {
      ...values,
      backlink: "https://moviequotes.vercel.app/verify",
    };
   try {
     const response=await api.post('/register', userData);
      console.log(response);
      if(response.status===201){
         updateModalContent(<ThankYou/>)
      }
   } catch (error) {
     console.log(error)
   }
 }
 
  
  const validationSchema=Yup.object().shape({
      name:Yup.string().required('must not be empty').min(3, 'min 3 letters').max(13, 'max 13 letters').matches(/^[a-z0-9]+$/, 'only lower letters'),
      email:Yup.string().required('must not be empty').email('Invalid email'),
      password:Yup.string().required('must not be empty').min(8, 'min 8 character').max(15, 'max 15 character').matches(/^[a-z0-9]+$/, 'only lower letters'),
      confirmPassword:Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('must not be empty'),
  })

  const formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      confirmPassword:'',
     },
     validationSchema,
     validateOnChange: true,
     validateOnBlur: true,
     onSubmit:(values, {resetForm})=>{
        console.table(values);
        registerUser(values);
        resetForm();
    }
  })

  return (
      <>
      <Typography variant='h4'>Create an account</Typography>
      <Typography variant='body2'>Start your journey!</Typography>
       <Form onSubmit={formik.handleSubmit}>
          <MainInput type='text' 
                     placeholder='At least 3 & max.15 lower case characters' 
                     label='Name'
                     id='name'
                     showStar
                     value={formik.values.name}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                       {formik.touched.name && formik.errors.name && (
                          <Error>{formik.errors.name}</Error>
                       )}
          <MainInput type='email' 
                     placeholder='Enter your email'
                     label='Email'
                     id='email'
                     showStar
                     value={formik.values.email}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                     {formik.touched.email && formik.errors.email && (
                          <Error>{formik.errors.email}</Error>
                       )}
          <MainInput type='password' 
                     placeholder='At least 8 & max.15 lower case characters'
                     label='Password'
                     id='password'
                     showStar
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                     {formik.touched.password && formik.errors.password && (
                          <Error>{formik.errors.password}</Error>
                       )}
          <MainInput type='password' 
                     id='confirmPassword'
                     showStar
                     placeholder='Confirm password'
                     label='Confirm password'
                     value={formik.values.confirmPassword}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                       {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                          <Error>{formik.errors.confirmPassword}</Error>
                       )}
          <MainButton type='submit' text='get started' 
                      sx={{width:'360px'}}/>
          <SecondaryBtn text='Sign up with Google' 
                        sx={{width:'360px'}}>
               <AiOutlineGoogle/>
          </SecondaryBtn>
       </Form>
       <Box style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
           <Typography variant='body2'>
              Already have an account?
           </Typography>
           <LogInButton onClick={()=>updateModalContent(<LogIn/>)}>Log In</LogInButton>
       </Box> 
      </>
  )
}

export default SignUp