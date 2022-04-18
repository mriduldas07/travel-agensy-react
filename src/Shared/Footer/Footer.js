import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    const getCurrTime = () =>{
        let newTime = new Date().toLocaleTimeString();
        return newTime;
    }
    const getCurrentYear = () =>{
        let newDate = new Date().toDateString();
        return newDate;
    };
    return (
        <div className=' footer bg-dark sticky-bottom mt-5'>
            <Container>
                <h3 className="pt-5 text-center">Local Time: {getCurrTime()}</h3>
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
                        <h4>Address</h4>
                        <h6>Local brach: Mymensingh, Uttara,Dhanmondi</h6>
                        <h6>Head Office: Dhanmondi, Dhaka</h6>
                        <h6>Phone: 01571124907</h6>
                        <h6>Email: mriduldas0325@gmail.com</h6>
                    </Col>
                    </Row>
            </Container>
            <p className='text-center pt-5'>Copyright @ {getCurrentYear()} by Travelers !!</p>
        </div>
    );
};

export default Footer;