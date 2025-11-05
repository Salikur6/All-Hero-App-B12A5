import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const TopApps = () => {
    return (
        <div className='max-w-7xl mx-auto py-20 px-4'>
            <div className='text-center mb-10'>
                <h2 className='font-bold md:text-5xl text-4xl mb-4'>Trending Apps</h2>
                <p className='text-xl text-[#627382]'>Explore All Treding Apps on the Market developed by us</p>
            </div>


            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>


                {/* card -1 */}
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <h2 className="card-title my-4">
                            Forest: Focus for Productivity
                        </h2>

                        <div className="card-actions justify-between">
                            <div className=" flex items-center font-semibold text-[#00d390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>
                        </div>
                    </div>
                </div>



                {/* card -2 */}
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <h2 className="card-title my-4">
                            Forest: Focus for Productivity
                        </h2>

                        <div className="card-actions justify-between">
                            <div className=" flex items-center font-semibold text-[#00d390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>
                        </div>
                    </div>
                </div>




                {/* card -3 */}
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <h2 className="card-title my-4">
                            Forest: Focus for Productivity
                        </h2>

                        <div className="card-actions justify-between">
                            <div className=" flex items-center font-semibold text-[#00d390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>
                        </div>
                    </div>
                </div>





                {/* card -4 */}
                <div className="card bg-base-100 p-4 shadow-sm">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="">
                        <h2 className="card-title my-4">
                            Forest: Focus for Productivity
                        </h2>

                        <div className="card-actions justify-between">
                            <div className=" flex items-center font-semibold text-[#00d390] bg-[#F1F5E8] py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center mt-10'>
                <Link to='/app' className='btn font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-6 px-[40px] rounded-sm'>Show All</Link>
            </div>
        </div>
    );
};

export default TopApps;