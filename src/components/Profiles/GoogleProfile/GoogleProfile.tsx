import { useState } from 'react'
import { Typography,Box,Stack } from '@mui/material'
import avatar from '../../../assets/icons/avatar2.png'
import { Fieldset,Legend,Edit,Line,Wrapper } from './Styles'
import MainInput from '../../common/MainInput/MainInput'
import { MainButton } from '../../common/MainButton/MainButton'
import CustomButton from '../../common/CustomButton/CustomButton'


const GoogleProfile = () => {
  const [showEdit, setShowEdit]=useState<boolean>(false);

  const handleEdit=()=>{
    setShowEdit(!showEdit);
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
          <MainInput defaultValue={'Nino'} label='Username' type='text'/>
          <Line></Line>
          <MainInput defaultValue={'Email'} label='Email' type='email'/>
          {
            !showEdit&&
            <Edit onClick={handleEdit}>Edit</Edit>
          }
       </Wrapper>
     </Fieldset>
       {
        showEdit && 
           <Box sx={{alignSelf:'flex-end', paddingTop:'15px', display:'flex', gap:'10px',}}>
           <CustomButton text='cancel' onClick={handleEdit}/>
           <MainButton text='save changes'/>
         </Box> 
       }
   </Stack>
    </>
  )
}

export default GoogleProfile