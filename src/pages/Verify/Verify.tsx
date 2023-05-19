import Activated from '../../components/Activated/Activated'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const { hash } = useParams();

  useEffect(() => {
    verifyEmail(hash);
  }, [hash]);

  const verifyEmail = async (hash:any) => {
    try {
      await axios.post('https://movie-quotes-back-production.up.railway.app/api/verify', {
        hash,
      });
      // Handle successful email verification
      // You can show a success message or redirect the user to a specific page
    } catch (error) {
      // Handle email verification error
    }
  };
  return (
    <>
    <Activated/>
    </>
  )
}

export default Verify