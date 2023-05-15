import { MainButton } from "../../components/MainButton/MainButton"
import Navbar from "../../components/Navbar/Navbar"
import { TitleBox,StyledTypography,ImgBox } from "./Styles"
import background from '../../assets/icons/galaxy.png'


const Home = () => {
  return (
    <>
     <Navbar/>
     <TitleBox>
        <StyledTypography variant='h1'>
          Find any quote in  <br/>millions of movie lines
        </StyledTypography>
        <MainButton text='get started'
                    sx={{width:'135px'}}
                    />
      <ImgBox>
        <img src={background} alt='background'/>
     </ImgBox>
     </TitleBox>
    </>
  )
}

export default Home