import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import login from '../../images/login.jpg'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

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
    if (user) {
        navigate('/home');
    }
    const handleRegister = event =>{
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your password did not match");
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 digits');
            return;
        }
        createUserWithEmailAndPassword(email, password);
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
                        <Button variant="dark" className='w-50'>Google Sign In</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;