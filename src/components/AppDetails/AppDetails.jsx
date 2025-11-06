import React, { use } from 'react';
import demoImg from '../../../images/demo-app (2).webp'
import review from '../../../images/icon-review.png'
import { FaDownload, FaStar } from 'react-icons/fa';
import VerticalBarChart from './VerticalBarChart';
import { useLoaderData, useParams } from 'react-router';

const fetchData = fetch('/data.json').then(res => res.json());

const AppDetails = () => {
    const cardData = use(fetchData);
    console.log(cardData)
    const paramid = useParams()
    // console.log('params id', paramid.id)

    const clickedData = cardData.find(data => data.id === parseInt(paramid.id))
    console.log(clickedData)

    const text = String(clickedData.reviews).endsWith('000') && clickedData.reviews >= 1000
        ? `${Math.round(clickedData.reviews / 1000)}K`
        : clickedData.reviews.toLocaleString();
    return (
        <div className='bg-[#F5F5F5] py-20 px-4'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-wrap gap-10 items-end mb-10'>
                    <div>
                        <img className='w-[300px] h-[300px] mr-10' src={clickedData.image} alt="" />
                    </div>

                    <div>
                        <div className='mb-7'>
                            <h2 className='text-3xl font-bold mb-2'>{clickedData.title}</h2>
                            <p>Developed by <span className='text-primary'>{clickedData.companyName}</span></p>
                        </div>
                        <hr className='opacity-[0.2]' />


                        <div>
                            <div className="flex my-7 gap-6 items-center flex-wrap">
                                <div className="  font-semibold   py-1.5 px-2.5 rounded-sm"><FaDownload className='mr-2 text-4xl text-[#00d390] mb-2' />
                                    <span className='opacity-[0.8] mb-2'>Downloads</span>
                                    <br />
                                    <h3 className='text-4xl font-bold'>
                                        {clickedData.downloads}
                                    </h3>
                                </div>


                                <div className="  font-semibold   py-1.5 px-2.5 rounded-sm">
                                    <FaStar className='mr-2 mb-2 text-4xl text-[#FF8811]' />
                                    <span className='opacity-[0.8] mb-2'>
                                        Average Ratings
                                    </span><br />
                                    <h3 className='font-bold text-4xl'>{clickedData.ratingAvg}</h3>
                                </div>





                                <div className="  font-semibold   py-1.5 px-2.5 rounded-sm">
                                    <img className='mr-2 mb-2' src={review} alt="" />

                                    <span className='opacity-[0.8] mb-2'>
                                        Total Reviews
                                    </span><br />
                                    <h3 className='font-bold text-4xl'>{text}</h3>
                                </div>
                            </div>

                            <div>
                                <button className='btn btn-accent py-3.5 px-5 text-white font-bold'>Install Now ({clickedData.size} MB)</button>
                            </div>


                        </div>


                    </div>

                </div>

                <hr className='opacity-[0.2]' />


                <VerticalBarChart clickedData={clickedData}></VerticalBarChart>
            </div>
        </div>
    );
};

export default AppDetails;