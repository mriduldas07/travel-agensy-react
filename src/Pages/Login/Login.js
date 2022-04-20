import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Button, Col, Container, Row } from 'react-bootstrap';
import auth from "../../firebase.init";
import login from '../../images/login.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [ sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    
    
    if (loading || sending) {
        return <Loading></Loading>
    }

    const handleEmailBlur = e =>{
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
        
    }
    if (user) {
        navigate(from, {replace: true});
    }

    const navigateToRegister = event =>{
        navigate('/register')
    }
    const resetPassword = async () =>{
        if(email){
            await sendPasswordResetEmail(email);
            toast("Sent email to reset password");
        }
        else{
            toast("Please input email first");
        }
    }


    return (
        <div className='form-container'>
            <Container>
                <Row>
                    <Col lg={7} sm={12}>
                        <img className='w-100 mt-5 h-100' src={login} alt="" />
                    </Col>
                    <Col lg={5} sm={12}>
                        <h1 className='mt-5 form-title'>Login</h1>
                        <form onSubmit={handleSubmit} className='container mx-auto'>
                            <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password' required id="" />
                            <p style={{color: 'red'}}>{error?.message}</p>
                            {
                                loading && <p>Loading...</p>
                            }
                            <p>New here?<span className='text-warning' style={{cursor: 'pointer'}} onClick={navigateToRegister}> Create an account</span></p>
                            <input type="submit" value="Login" />
                            <p>Forget Password?<span className='text-warning' style={{cursor: 'pointer'}} onClick={resetPassword}> Reset Password</span></p>
                        </form>
                        <SocialLogin></SocialLogin>
                        <ToastContainer />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;