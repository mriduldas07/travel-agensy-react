import React from 'react';
import { useParams } from 'react-router-dom';

const CheckOut = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>CheckOut {serviceId}</h2>
        </div>
    );
};

export default CheckOut;