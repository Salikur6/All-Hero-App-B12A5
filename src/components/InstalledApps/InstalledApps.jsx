import React from 'react';
import InstalledCards from './InstalledCards/InstalledCards';

const InstalledApps = () => {
    return (
        <div className='bg-[#F5F5F5]'>

            <div className='max-w-7xl mx-auto px-4 py-20'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us </p>
                </div>

                <div className='mt-10 mb-4 sm:flex items-center sm:justify-between text-center'>

                    <p className='text-2xl font-semibold  mb-4'>(20) Apps Found</p>

                    <div className=' items-center color-[#627382]'>
                        {/* <FaCaretDown /> */}

                        <select defaultValue="Pick a color" className="select">
                            <option>Sort By Size</option>
                            <option>Low-High</option>
                            <option>High-Low</option>
                        </select>
                    </div>
                </div>



                <div>
                    <div className="card card-border ">
                        <InstalledCards></InstalledCards>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;