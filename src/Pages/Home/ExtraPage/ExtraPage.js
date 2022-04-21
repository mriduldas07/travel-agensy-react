import React from 'react';
import './ExtraPage.css';
import ex1 from '../../../images/experiences/ex1.jpg'
import ex2 from '../../../images/experiences/ex2.jpg'
import ex3 from '../../../images/experiences/ex3.jpg'
import ex4 from '../../../images/experiences/ex4.jpg'
import ex5 from '../../../images/experiences/ex5.jpg'
import ex6 from '../../../images/experiences/ex6.jpg'

const ExtraPage = () => {
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Some experiences of travelers</h2>
            <div className="container experiences">
                <img src={ex1} alt="" />
                <img src={ex2} alt="" />
                <img src={ex3} alt="" />
                <img src={ex4} alt="" />
                <img src={ex5} alt="" />
                <img src={ex6} alt="" />
            </div>
        </div>
    );
};

export default ExtraPage;