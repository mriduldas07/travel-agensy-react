import React, { useRef} from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../images/login.jpg';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    }

    const navigateToRegister = event =>{
        navigate('/register')
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
                            <input ref={emailRef} type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required id="" />
                            <p>New here?<span className='text-warning' style={{cursor: 'pointer'}} onClick={navigateToRegister}> Create an account</span></p>
                            <input type="submit" value="Login" />
                        </form>
                        <Button variant="dark" className='w-50'>Google Sign In</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;