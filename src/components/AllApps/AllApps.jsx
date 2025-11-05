import React from 'react';
import { FaSearch } from 'react-icons/fa';
import AppCards from '../AppCards/AppCards';

const AllApps = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className=' max-w-7xl mx-auto px-4 py-20'>


                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='mt-10 mb-4 sm:flex items-center sm:justify-between text-center'>

                    <p className='text-2xl font-semibold  mb-4'>(20) Apps Found</p>

                    <div className=' items-center color-[#627382]'>
                        <label className="input">
                            <FaSearch />
                            <input type="search" className="grow" placeholder="Search Apps" />
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <kbd className="kbd kbd-sm">K</kbd>
                        </label>
                    </div>
                </div>


                <div>

                    <AppCards></AppCards>
                </div>
            </div>
        </div>
    );
};

export default AllApps;