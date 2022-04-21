import React from 'react';
import Banner from '../Banner/Banner';
import ExtraPage from '../ExtraPage/ExtraPage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ExtraPage></ExtraPage>
        </div>
    );
};

export default Home;