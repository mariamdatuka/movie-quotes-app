import avatar from '../../assets/icons/avatar.png'
import home from '../../assets/icons/home.svg'
import camera from '../../assets/icons/camera.svg'
import { Typography,Stack } from '@mui/material'
import { FlexItem,MainBox } from './Styles'

const ProfileActions = () => {
  return (
 <>
  <MainBox>
    <FlexItem>
       <img src={avatar} alt='avatar'/>
       <Stack alignItems='center' justifyContent='center'>
           <Typography variant='body1'>Nino Tabagari</Typography>
           <Typography variant='body2'>Edit your profile</Typography>
       </Stack>
    </FlexItem>
      <FlexItem>
           <img src={home} alt='home'/>
           <Typography variant='body1'>News Feed</Typography>
      </FlexItem>
      <FlexItem>
           <img src={camera} alt='camera'/>
           <Typography variant='body1'>List of movies</Typography>
      </FlexItem>
   </MainBox>
  </>
  )
}

export default ProfileActions