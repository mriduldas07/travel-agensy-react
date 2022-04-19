import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import login from '../../images/login.jpg'

const Login = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={7} sm={12}>
                        <img className='w-100 mt-5 h-100' src={login} alt="" />
                    </Col>
                    <Col lg={5} sm={12}>
                        <h1 className='mt-5'>Login</h1>
                        <form>
                            <input type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input type="password" name="password" placeholder='Password' required id="" />
                            <p>New here?<a href="#"> Create an account</a></p>
                            <input type="button" value="Login" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;