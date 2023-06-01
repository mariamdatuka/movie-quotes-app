import GridLayout from '../../components/common/GridLayout/GridLayout'
import Content from '../../components/Content/Content'
import ProfileActions from '../../components/Profiles/ProfileActions/ProfileActions'
import ProfileNavbar from '../../components/Profiles/ProfileNavbar/ProfileNavbar'

const Profile = () => {
  return (
    <>
     <ProfileNavbar/>
     <GridLayout>
        <ProfileActions/>
        <Content/>
     </GridLayout>
    </>
  )
}

export default Profile