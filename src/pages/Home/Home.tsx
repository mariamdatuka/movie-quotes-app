import { MainButton } from "../../components/common/MainButton/MainButton"
import Navbar from "../../components/Navbar/Navbar"
import { TitleBox,StyledTypography,ImgBox } from "./Styles"
import background from '../../assets/icons/galaxy.png'
import useModalStore from "../../Store/Store"
import SignUp from "../../components/SignUp/SignUp"
import ModalWindow from '../../components/common/Modal/ModalWindow';
import { useTranslation } from 'react-i18next';



const Home = () => {
  const { t } = useTranslation();
  
  const { updateModalContent, modalContent, openModal, setOpenModal } = useModalStore();

  //open and render modal content based on button click
   const handleOpenModal=(content:React.ReactNode)=>{
     updateModalContent(content);
     setOpenModal();
   }
  
  return (
    <>
     <Navbar/>
     <TitleBox>
        <StyledTypography variant='h1'>
          {t('welcomeMessage')}  <br/>millions of movie lines
        </StyledTypography>
        <MainButton text='get started'
                    sx={{width:'135px'}}
                    onClick={()=>handleOpenModal(<SignUp/>)}
                    />
      <ImgBox>
        <img src={background} alt='background'/>
     </ImgBox>
     </TitleBox>
     <ModalWindow open={openModal} onClose={setOpenModal}>
        {modalContent}
     </ModalWindow>
    </>
  )
}

export default Home