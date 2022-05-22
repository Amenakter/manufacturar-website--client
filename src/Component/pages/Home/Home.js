import React from 'react';
import Inventory from '../Inventory';
import Landing from './Landing';


const Home = () => {
    return (
        <div className=''>
            <Landing></Landing>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;