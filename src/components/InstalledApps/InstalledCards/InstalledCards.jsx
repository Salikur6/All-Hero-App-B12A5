import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import img from '../../../../images/logo.png'


const InstalledCards = () => {
    return (
        <div>
            <div className='flex items-center justify-between p-4 flex-wrap mb-4  bg-base-100'>
                <div className='flex items-center flex-wrap mb-2'>
                    <img className='w-20 h-20 mr-4 mb-2' src={img} alt="" />
                    <div className="">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="card-actions items-center">
                            <div className=" flex items-center font-semibold text-[#00d390]  py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811]  py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>

                            <p className='text-[#627382]'>258 MB</p>
                        </div>

                    </div>
                </div>

                <div className="card-actions justify-end mb-2">
                    <button className="btn btn-accent text-white">Uninstall</button>
                </div>
            </div>

            <div className='flex items-center justify-between p-4 flex-wrap  bg-base-100'>
                <div className='flex items-center flex-wrap mb-2'>
                    <img className='w-20 h-20 mr-4 mb-2' src={img} alt="" />
                    <div className="">
                        <h2 className="card-title">Forest: Focus for Productivity</h2>
                        <div className="card-actions items-center">
                            <div className=" flex items-center font-semibold text-[#00d390]  py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2' />
                                9M</div>


                            <div className=" flex items-center font-semibold text-[#FF8811]  py-1.5 px-2.5 rounded-sm">
                                <FaStar className='mr-2' />
                                9M</div>

                            <p className='text-[#627382]'>258 MB</p>
                        </div>

                    </div>
                </div>

                <div className="card-actions justify-end mb-2">
                    <button className="btn btn-accent text-white">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default InstalledCards;