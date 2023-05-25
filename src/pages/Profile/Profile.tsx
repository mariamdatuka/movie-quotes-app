import GridLayout from '../../components/common/GridLayout/GridLayout'
import EmailProfile from '../../components/Profiles/EmailProfile/EmailProfile'
import ProfileActions from '../../components/Profiles/ProfileActions/ProfileActions'
import ProfileNavbar from '../../components/Profiles/ProfileNavbar/ProfileNavbar'

const Profile = () => {
  return (
    <>
     <ProfileNavbar/>
     <GridLayout>
        <ProfileActions/>
        <EmailProfile/>
     </GridLayout>
    </>
  )
}

export default Profile