import { NavBox, Logo } from "./Styles"
import { MainButton} from "../common/MainButton/MainButton"
import {Stack} from "@mui/material"
import SecondaryBtn from "../common/SecondaryBtn/SecondaryBtn"
import ModalWindow from "../common/Modal/ModalWindow"
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import useModalStore from '../../Store/Store';


const Navbar = () => {

const { updateModalContent, modalContent, openModal, setOpenModal } = useModalStore();

 //open and render modal content based on button click
  const handleOpenModal=(content:React.ReactNode)=>{
    updateModalContent(content);
    setOpenModal();
  }

  return (
    <>
    <NavBox>
        <Logo>MOVIE QUETOS</Logo>
        <Stack sx={{flexDirection:'row', gap:'10px', alignItems:'center'}}>
            <button>Eng</button>
            <MainButton text='Sign Up' onClick={()=>handleOpenModal(<SignUp/>)}/>
            <SecondaryBtn text='Log In'  onClick={()=>handleOpenModal(<LogIn/>)}/>
        </Stack>
    </NavBox>
    <ModalWindow open={openModal} onClose={setOpenModal}>
       {modalContent}
    </ModalWindow>
    </>
  )
}

export default Navbar