import bell from '../../../assets/icons/bell.svg';
import { NavBox, Logo } from "./Styles"
import {Stack} from "@mui/material"
import SecondaryBtn from '../../common/SecondaryBtn/SecondaryBtn';

const ProfileNavbar = () => {
  return (
    <>
     <NavBox>
        <Logo>MOVIE QUETOS</Logo>
        <Stack sx={{flexDirection:'row', gap:'20px', alignItems:'center', justifyContent:'center'}}>
            <img src={bell} alt='bell'/>
            <button>Eng</button>
            <SecondaryBtn text='log out'/>
        </Stack>
    </NavBox>
    </>
   
  )
}

export default ProfileNavbar