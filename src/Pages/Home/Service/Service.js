import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, duration, img, travelers, description, money, ratings} = service;
    const navigate = useNavigate();
    const navigateCheckOut = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='col col-12 gy-5 col-md-6 col-lg-4'>
            <div>
        <div className="card">
        <img src={img} className="w-100" style={{width: '18rem'}} alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Duration: {duration}</p>
        <p className="card-text">Number of travelers: {travelers}</p>
        <p className="card-text">Trip charge: ${money}</p>
        <p className="card-text">Ratings: {ratings}</p>
        <p className="card-text">About trip: {description.slice(0, 100) + '...'}</p>
        <Button onClick={() =>navigateCheckOut(id)} className="btn btn-warning w-100">Check Out</Button>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Service;