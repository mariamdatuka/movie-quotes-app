import {useState} from 'react';
import { MainButton } from "../../components/common/MainButton/MainButton"
import Navbar from "../../components/Navbar/Navbar"
import { TitleBox,StyledTypography,ImgBox } from "./Styles"
import background from '../../assets/icons/galaxy.png'
import useModalStore from "../../Store/Store"
import SignUp from "../../components/SignUp/SignUp"
import ModalWindow from '../../components/common/Modal/ModalWindow';


const Home = () => {
  const [openModal, setOpenModal]=useState<boolean>(false);

  const updateModalContent=useModalStore((state)=>state.updateModalContent)
  const modalContent=useModalStore((state)=>state.modalContent)

  //open and render modal content based on button click
   const handleOpenModal=(content:React.ReactNode)=>{
     updateModalContent(content);
     setOpenModal(true);
   }
 
 //close Modal
   const handleModalClose=()=>{
     setOpenModal(false);
   }
  
  return (
    <>
     <Navbar/>
     <TitleBox>
        <StyledTypography variant='h1'>
          Find any quote in  <br/>millions of movie lines
        </StyledTypography>
        <MainButton text='get started'
                    sx={{width:'135px'}}
                    onClick={()=>handleOpenModal(<SignUp/>)}
                    />
      <ImgBox>
        <img src={background} alt='background'/>
     </ImgBox>
     </TitleBox>
     <ModalWindow open={openModal} onClose={handleModalClose}>
        {modalContent}
     </ModalWindow>
    </>
  )
}

export default Home