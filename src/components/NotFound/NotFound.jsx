import React from 'react';
import notfound from '../../../images/error-404.png'
import { Link, Navigate, useNavigate } from 'react-router';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-[#F5F5F5] py-10'>

            <div className='flex flex-col justify-center items-center h-3/4'>
                <div>
                    <img src={notfound} alt="" />

                </div>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mt-4'>Oops, Page not found</h1>
                    <p className='text-[#627382] mt-2 mb-4'>The page you are looking for is not available.</p>

                    <Link onClick={() => navigate(-1)} className='btn btn-primary'>Go Back!</Link>
                </div>
            </div>

        </div>
    );
};

export default NotFound;