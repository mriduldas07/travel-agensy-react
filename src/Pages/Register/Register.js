import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import login from '../../images/login.jpg'

const Register = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={7} sm={12}>
                        <img className='w-100 mt-5 h-100' src={login} alt="" />
                    </Col>
                    <Col lg={5} sm={12}>
                        <h1 className='mt-5 form-title'>Register</h1>
                        <form className='container mx-auto'>
                            <input type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input type="password" name="password" placeholder='Password' required id="" />
                            <br />
                            <br />
                            <input type="password" name="confirm-password" placeholder='Confirm Password' required id="" />
                            <p>Already have an account?<Link to={`/login`}>Login</Link></p>
                            <input type="button" value="Register" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;