import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div id='services' className='container pt-4'>
            <h2 className='text-center'>Services for Guests</h2>
            <div className="row">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;