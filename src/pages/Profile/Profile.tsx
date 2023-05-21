import GridLayout from '../../components/common/GridLayout/GridLayout'
import ProfileActions from '../../components/ProfileActions/ProfileActions'
import ProfileNavbar from '../../components/ProfileNavbar/ProfileNavbar'

const Profile = () => {
  return (
    <>
     <ProfileNavbar/>
     <GridLayout>
        <ProfileActions/>
        <div style={{color:'#fff'}}>I am right</div>
     </GridLayout>
    </>
  )
}

export default Profile