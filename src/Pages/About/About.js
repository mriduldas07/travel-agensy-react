import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutimg from '../../images/aboutme.png'


const About = () => {
    return (
        <div className='container my-5'>
            <Container>
                <Row>
                    <Col sm={12} lg={6}>
                        <img src={aboutimg} style={{height: '400px'}} alt="" />
                    </Col>
                    <Col sm={12} lg={6}>
                    <div className="mt-2">
                <h1 className='text-center'>Hey, its ME</h1>
                <h5>I am Mridul Das.I am a student of textile enginearing.But I wanna to become a full stack web devoloper.Firstly, I want to study about Computer science and enginearing.But unfortunately, I am not able for that.So i decided and dedicated for full stack web devoloper.I do all of my assignment in time without first one.But this time I face some issue sothat I cannot submit assignment-10 in time. <br />
                I don't know how much struggle I did for this goal.Thats only God knows. But I trying my best for achieve this goal. I want to reach to the pick of devolopment. <br />
                Especially,I want to thanked the <code>programming-hero</code> whole team for support, for problem solving and any other issue about this journey.
                </h5>
                <h4>Thank you...</h4>
            </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;