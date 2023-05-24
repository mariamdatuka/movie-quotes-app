import GridLayout from '../../components/common/GridLayout/GridLayout'
import MyProfile from '../../components/MyProfile/MyProfile'
import ProfileActions from '../../components/ProfileActions/ProfileActions'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar'

const Profile = () => {
  return (
    <>
     <ProfileNavbar/>
     <GridLayout>
        <ProfileActions/>
        <MyProfile/>
     </GridLayout>
    </>
  )
}

export default Profile