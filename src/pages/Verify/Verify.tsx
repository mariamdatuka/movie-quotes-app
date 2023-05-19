import Activated from '../../components/Activated/Activated'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const { hash } = useParams();

  useEffect(() => {
    // Make a POST request to the verification endpoint
    const verifyEmail = async () => {
      try {
      await axios.post('https://movie-quotes-back-production.up.railway.app/api/verify', {
          hash: hash,
        });
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmail();
  }, [hash]);

  return (
    <>
    <Activated/>
    </>
  )
}

export default Verify