import { NavBox, Logo } from "./Styles"
import { MainButton} from "../MainButton/MainButton"
import {Stack} from "@mui/material"

const Navbar = () => {
  return (
    <NavBox>
        <Logo>MOVIE QUETOS</Logo>
        <Stack style={{flexDirection:'row', gap:'10px', alignItems:'center'}}>
            <button>Eng</button>
            <MainButton text='Sign Up'/>
            <MainButton text='Log In'/>
        </Stack>
    </NavBox>
  )
}

export default Navbar