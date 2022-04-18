import React from 'react';
import errorpic from '../../images/error .jpg'

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='text-danger text-center'>Error 404!!!</h1>
            <img className='w-100' src={errorpic} alt="" />
        </div>
    );
};

export default NotFound;