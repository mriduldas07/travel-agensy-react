import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='container'>
            <h2 className='text-center'><span className='text-danger'>Take Off</span> your information.</h2>
            <Container>
                <Row>
                    <Col lg={12} sm={12}>
                        <form className='mx-auto'>
                            <input style={{width: '500px'}} type="text" name="first-name" placeholder='First Name' required id="" />
                            <br />
                            <br />
                            <input style={{width: '500px'}} type="text" name="last-name" placeholder='Last Name' required id="" />
                            <br />
                            <br />
                            <input style={{width: '500px'}} type="email" name="email" placeholder='Your Email' required id="" />
                            <br />
                            <br />
                            <input style={{width: '500px'}} type="number" name="mobile" placeholder='Mobile Number' required id="" />
                            <input className='mt-4 mx-auto' type="submit" value="Submit your information" />
                            <h6 className="text-success mt-3 text-center">Thanks for contacting with me.I will send you an email for confirmation....</h6>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CheckOut;