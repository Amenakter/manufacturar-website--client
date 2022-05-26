import React from 'react';
import Footer from '../../Shered/Footer';
import BusinessSummary from '../BusinessSummary';
import Inventory from '../Inventory';
import Review from '../Review';
import Landing from './Landing';


const Home = () => {
    return (
        <div className=''>
            <Landing></Landing>
            <Inventory></Inventory>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;