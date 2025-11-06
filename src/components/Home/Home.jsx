import React from 'react';
import Banner from './Banner/Banner';
import States from './States/States';
import TopApps from './TopApps/TopApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const app = Array.isArray(data) ? data : data?.app || [];

    return (

        <div className='bg-[#F5F5F5]'>
            <div className=''>
                <Banner className='max-w-7xl mx-auto'></Banner>
                <States></States>
                <TopApps app={app}></TopApps>
            </div>
        </div>
    );
};

export default Home;