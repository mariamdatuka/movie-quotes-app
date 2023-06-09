import { NavBox, Logo,SelectBtn } from "./Styles"
import { MainButton} from "../common/MainButton/MainButton"
import {Stack,MenuItem} from "@mui/material"
import SecondaryBtn from "../common/SecondaryBtn/SecondaryBtn"
import ModalWindow from "../common/Modal/ModalWindow"
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import useModalStore from '../../Store/Store';
import { useTranslation } from "react-i18next"



const Navbar = () => {

  const {i18n}=useTranslation();

  const handleTranslation=(event:any)=>{
     i18n.changeLanguage(event.target.value)
  }

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
            <SelectBtn defaultValue='en' onChange={handleTranslation}>
                <MenuItem value='en'>En</MenuItem>
                <MenuItem value='ka'>Ka</MenuItem>
            </SelectBtn>
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