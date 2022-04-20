import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import login from '../../images/login.jpg'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, errorUpdate] = useUpdateProfile(auth);

    if (updating) {
        return <Loading></Loading>
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    const navigateToLogin = event =>{
        navigate('/login');
    }
    const handleRegister = async event =>{
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 digits');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({email: email});
        navigate('/home');

    }

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={7} sm={12}>
                        <img className='w-100 mt-5 h-100' src={login} alt="" />
                    </Col>
                    <Col lg={5} sm={12}>
                        <h1 className='mt-5 form-title'>Register</h1>
                        <form onSubmit={handleRegister} className='container mx-auto'>
                            <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input onBlur={handlePasswordBlur} type="password" name="password" placeholder='Password' required id="" />
                            <br />
                            <br />
                            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" placeholder='Confirm Password' required id="" />
                            <p style={{color: 'red'}}>{error}</p>
                            <p>Already have an account?<Link to={`/login`} className='text-warning text-decoration-none' onClick={navigateToLogin}> Login</Link></p>
                            <input type="submit" value="Register" />
                        </form>
                        <SocialLogin></SocialLogin>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;