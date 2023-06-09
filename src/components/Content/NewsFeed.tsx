import MainInput from "../common/MainInput/MainInput"
import Pencil from '../../assets/icons/pencil.svg'
import Search from '../../assets/icons/search.svg'

const NewsFeed = () => {
 
  return (
    <>
      <MainInput type='text' placeholder='write new quote' showIcon={true} iconUrl={Pencil}/>
    </>
  )
}

export default NewsFeed