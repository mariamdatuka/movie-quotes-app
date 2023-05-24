import { Typography } from '@mui/material'
import avatar from '../../assets/icons/avatar2.png'
import { Fieldset,Legend } from './Styles'
import MainInput from '../common/MainInput/MainInput'

const MyProfile = () => {
  return (
    <>
     <h1>My profile</h1>
     <Fieldset>
        <Legend>
           <img src={avatar} alt='avatar'/>
           <Typography variant='h6'>Upload new photo</Typography>
        </Legend>
        <MainInput defaultValue={'Nino'} label='Username' type='text'/>
        <MainInput defaultValue={'Email'} label='Email' type='email'/>
     </Fieldset>
    </>
  )
}

export default MyProfile