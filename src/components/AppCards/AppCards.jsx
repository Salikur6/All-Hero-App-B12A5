import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';

const AppCards = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>


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
    );
};

export default AppCards;