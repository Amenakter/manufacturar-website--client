import React from 'react';
import Inventory from '../Inventory';
import Review from '../Review';
import Landing from './Landing';


const Home = () => {
    return (
        <div className=''>
            <Landing></Landing>
            <Inventory></Inventory>
            <Review></Review>
        </div>
    );
};

export default Home;