import { useState } from 'react'
import { Typography,Box,Stack } from '@mui/material'
import avatar from '../../../assets/icons/avatar2.png'
import {Fieldset,Legend,Line,Wrapper, VerticalLine,Info} from './Styles'
import MainInput from '../../common/MainInput/MainInput'
import { MainButton } from '../../common/MainButton/MainButton'
import CustomButton from '../../common/CustomButton/CustomButton'
import SecondaryBtn from '../../common/SecondaryBtn/SecondaryBtn'
import add from '../../../assets/icons/add.svg'
import ModalWindow from '../../common/Modal/ModalWindow'
import useModalStore from '../../../Store/Store'

const EmailProfile = () => {
    const [showEdit, setShowEdit]=useState<boolean>(false);
    const [changePassword, setChangePassword]=useState<boolean>(false);

    const {openModal, setOpenModal } = useModalStore();

   
    const handleEdit=()=>{
      setShowEdit(!showEdit);
    }

    const handlePassword=()=>{
      setChangePassword(!changePassword);
    }
    
  return (
    <>
 <Stack sx={{alignItems:'flex-start', width:'60%'}}>
    <h1>My profile</h1>
     <Fieldset>
        <Legend>
           <img src={avatar} alt='avatar'/>
           <Typography variant='h6'>Upload new photo</Typography>
        </Legend>
       <Wrapper>
            <MainInput defaultValue={'Nino'} label='Username' type='text' showStar={false}/>
          {
            !showEdit&&
            <CustomButton text='edit'/>
          }
          </Wrapper>
          <Line/>
         <Wrapper>
            <MainInput defaultValue={'Email'} label='Email' type='email' showStar={false}/>
            <CustomButton text='make this primary'/>
            <VerticalLine/>
            <CustomButton text='remove'/>
        </Wrapper> 
        <SecondaryBtn text='add email' onClick={setOpenModal}>
           <img src={add} alt='add'/>
        </SecondaryBtn>
        <Line/>
        <Wrapper>
            <MainInput defaultValue={'Nino'} label='Password' type='password' showStar={false}/>
            <CustomButton text='edit' onClick={handlePassword}/>
        </Wrapper>
          {
            changePassword && <>
               <Info>
                  <Typography variant='h6'>Password should contain</Typography>
                  <ul>
                    <Typography variant='body1'>8 or more characters</Typography>
                    <Typography variant='body1'>Max 15 characters</Typography>
                  </ul>
               </Info>
              <MainInput label=' New Password' type='password' showStar={false}/>
              <MainInput label='Confirm New Password' type='password' showStar={false}/>
            </>
          }
        </Fieldset>
       {
        showEdit && 
           <Box sx={{alignSelf:'flex-end', paddingTop:'15px', display:'flex', gap:'10px',}}>
           <CustomButton text='cancel' onClick={handleEdit}/>
           <MainButton text='save changes'/>
         </Box> 
       }
        {
        changePassword && 
           <Box sx={{alignSelf:'flex-end', paddingTop:'15px', display:'flex', gap:'10px',}}>
           <CustomButton text='cancel'/>
           <MainButton text='save changes'/>
         </Box> 
       }
   </Stack>
     <ModalWindow open={openModal} onClose={setOpenModal}>
       <Stack alignItems='flex-start' justifyContent='flex-start' spacing={2}>
        <Typography variant='h6'>Add New Email</Typography>
        <Line/>
        <MainInput type='password' label='new email' placeholder='enter new email' showStar={false}/>
        <Box sx={{alignSelf:'flex-end', paddingTop:'15px', display:'flex', gap:'10px',}}>
            <CustomButton text='cancel' onClick={setOpenModal}/>
            <MainButton text='add'/>
        </Box>
     </Stack>
   </ModalWindow>
 </>
  )
}

export default EmailProfile