import React from 'react';
import Banner from './Banner/Banner';
import States from './States/States';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className=''>
                <Banner className='max-w-7xl mx-auto'></Banner>
                <States></States>
            </div>
        </div>
    );
};

export default Home;