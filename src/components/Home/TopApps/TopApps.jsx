import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import AppCards from '../../AppCards/AppCards';

const TopApps = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 px-4'>
            <div className='text-center mb-10'>
                <h2 className='font-bold md:text-5xl text-4xl mb-4'>Trending Apps</h2>
                <p className='text-xl text-[#627382]'>Explore All Treding Apps on the Market developed by us</p>
            </div>

            <AppCards></AppCards>
            <AppCards></AppCards>

            <div className='text-center mt-10'>
                <Link to='/app' className='btn font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-6 px-10 rounded-sm'>Show All</Link>
            </div>
        </div>
    );
};

export default TopApps;