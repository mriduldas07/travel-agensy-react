import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const getCurrentYear = () =>{
        return new Date().getFullYear();
    };
    return (
        <div className=' footer bg-dark sticky-bottom'>
            <Container>
                <Row className='pt-5'>
                    <Col lg={3} sm={6}>
                        <h4 className='pb-3'>Information</h4>
                        <h6>About Us</h6>
                        <h6>More Search</h6>
                        <h6>Blogs</h6>
                        <h6>Travels</h6>
                    </Col>
                    <Col lg={3} sm={6}>
                        <h4 className='pb-3'>Links</h4>
                        <h6>Reviews</h6>
                        <h6>Supports</h6>
                        <h6>Terms and Condition</h6>
                        <h6>Privacy Policy</h6>
                    </Col>
                    <Col lg={3} sm={6}>
                        <h4 className="pb-3">Services</h4>
                        <h6>Travel Guide</h6>
                        <h6>Low Pricing</h6>
                        <h6>Best communication</h6>
                        <h6>24/7 support</h6>
                    </Col>
                    <Col lg={3} sm={6}>
                        
                    </Col>
                    </Row>
            </Container>
            <p className='text-center mt-5'>copyright @ {getCurrentYear()}</p>
        </div>
    );
};

export default Footer;