import React from 'react';

const States = () => {
    return (
        <div className='bg-linear-to-r from-[#632ee3] to-[#9f62f2]'>
            <div className='px-4 py-20'>
                <h2 className='font-bold text-3xl md:text-5xl text-center text-white mb-10'>Trusted by Millions, Built for You</h2>

                <div className='grid grid-cols-1 sm:grid-cols-3 justify-between items-center gap-5'>
                    <div className='text-white text-center'>
                        <p className='opacity-[0.8] mb-3'>Total Downloads</p>
                        <h3 className='text-4xl md:text-6xl font-extrabold mb-4'>29.6M</h3>
                        <p className='opacity-[0.8] mb-3'>21% more than last month</p>
                    </div>

                    <div className='text-white text-center'>
                        <p className='opacity-[0.8] mb-3'>Total Reviews</p>
                        <h3 className='text-4xl md:text-6xl font-extrabold mb-4'>906K</h3>
                        <p className='opacity-[0.8] mb-3'>46% more than last month</p>
                    </div>


                    <div className='text-white text-center'>
                        <p className='opacity-[0.8] mb-3'>Active Apps</p>
                        <h3 className='text-4xl md:text-6xl font-extrabold mb-4'>132+</h3>
                        <p className='opacity-[0.8] mb-3'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;