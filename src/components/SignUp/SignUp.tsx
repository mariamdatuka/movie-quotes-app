import { Stack,Typography,Box } from "@mui/material"
import MainInput from "../MainInput/MainInput"
import { MainButton } from "../MainButton/MainButton"
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn"
import {Form, LogInButton,Error} from "./Styles"
import {AiOutlineGoogle} from 'react-icons/ai'
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const SignUp = () => {
  const theme=useTheme();

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
     validationSchema:validationSchema,
     validateOnChange: true,
     validateOnBlur: true,
     onSubmit:(values, {resetForm})=>{
        console.table(values);
        resetForm();
     }
  })

  return (
      <>
    <Stack style={{gap:'15px', alignItems:'center'}}>
      <Typography variant='h4' style={theme.typography.h4}>Create an account</Typography>
      <Typography variant='body2' style={theme.typography.body2}>Start your journey!</Typography>
       <Form onSubmit={formik.handleSubmit}>
          <MainInput type='text' 
                     placeholder='At least 3 & max.15 lower case characters' 
                     label='Name'
                     id='name'
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
                     value={formik.values.password}
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}/>
                     {formik.touched.password && formik.errors.password && (
                          <Error>{formik.errors.password}</Error>
                       )}
          <MainInput type='password' 
                     id='confirmPassword'
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