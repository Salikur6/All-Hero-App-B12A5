import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import AppCards from '../../AppCards/AppCards';

const TopApps = ({ app }) => {



    const slicedData = Array.isArray(app) ? app.slice(0, 8) : []
    return (
        <div className='max-w-7xl mx-auto py-20 px-4'>
            <div className='text-center mb-10'>
                <h2 className='font-bold md:text-5xl text-4xl mb-4'>Trending Apps</h2>
                <p className='text-xl text-[#627382]'>Explore All Treding Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
                {slicedData.map(d => (

                    <Link key={d.id} to={`/appdetails/${d.id}`}>
                        <div className="card bg-base-100 justify-between p-4 shadow-sm cursor-pointer">
                            <figure>
                                <img className='h-[285px]'
                                    src={d.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="">
                                <h2 className="card-title my-4">
                                    {d.title}
                                </h2>

                                <div className="card-actions justify-between">
                                    <div className=" flex items-center font-semibold text-[#00d390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                        {d.downloads}</div>


                                    <div className=" flex items-center font-semibold text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm">
                                        <FaStar className='mr-2' />
                                        {d.ratingAvg}</div>
                                </div>
                            </div>
                        </div>

                    </Link>




                ))}
            </div>

            <div className='text-center mt-10'>
                <Link to='/app' className='btn font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-6 px-10 rounded-sm'>Show All</Link>
            </div>
        </div>
    );
};

export default TopApps;