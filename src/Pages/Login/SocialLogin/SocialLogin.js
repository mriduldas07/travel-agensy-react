import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let popupError;
    if (error) {
          popupError = <p className='text-danger'>Error: {error.message}</p>
    }

    if (loading) {
      return <Loading></Loading>
    }
    if (user) {
      navigate('/home');
    }

    return (
        <div>
          <br />
            {popupError}
            <Button variant="dark" className='w-50' style={{margin: '5% 12%'}} onClick={() =>signInWithGoogle()}>Google Sign In</Button>
        </div>
    );
};

export default SocialLogin;