import {useState} from 'react';
import { NavBox, Logo } from "./Styles"
import { MainButton} from "../MainButton/MainButton"
import {Stack} from "@mui/material"
import SecondaryBtn from "../SecondaryBtn/SecondaryBtn"
import ModalWindow from "../Modal/ModalWindow"
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';



const Navbar = () => {
  const [openModal, setOpenModal]=useState<boolean>(false);
  const [modalContent, setModalContent]=useState<React.ReactNode | null>(null);

 //open and render modal content based on button click
  const handleOpenModal=(content:React.ReactNode)=>{
    setModalContent(content);
    setOpenModal(true);
  }

//close Modal
  const handleModalClose=()=>{
    setOpenModal(false);
  }

  return (
    <>
    <NavBox>
        <Logo>MOVIE QUETOS</Logo>
        <Stack style={{flexDirection:'row', gap:'10px', alignItems:'center'}}>
            <button>Eng</button>
            <MainButton text='Sign Up' onClick={()=>handleOpenModal(<SignUp/>)}/>
            <SecondaryBtn text='Log In'  onClick={()=>handleOpenModal(<LogIn/>)}/>
        </Stack>
    </NavBox>
    <ModalWindow open={openModal} onClose={handleModalClose}>
       {modalContent}
    </ModalWindow>
    </>
  )
}

export default Navbar