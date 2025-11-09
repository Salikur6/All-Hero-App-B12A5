import React, { useEffect, useState } from 'react';
import review from '../../../images/icon-review.png'
import { FaDownload, FaStar } from 'react-icons/fa';
import VerticalBarChart from './VerticalBarChart';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const clickedData = useLoaderData()
    const text = String(clickedData.reviews).endsWith('000') && clickedData.reviews >= 1000
        ? `${Math.round(clickedData.reviews / 1000)}K`
        : clickedData.reviews.toLocaleString();





    const getStoredData = () => {
        const storedData = localStorage.getItem('installedApp')
        if (storedData) {
            const data = JSON.parse(storedData);
            return data
        } else {
            return []
        }
    }







    const setToLsData = (data) => {
        const getData = getStoredData()
        // getData.push(id);
        const updateData = [...getData, data]
        localStorage.setItem('installedApp', JSON.stringify(updateData));
        return updateData;
    }

    const [installed, setInstalled] = useState(() => getStoredData());

    useEffect(() => {
        setInstalled(getStoredData())
    }, [])

    const handleinstallBtn = (data) => {
        if (isInstalled) return;
        const setData = setToLsData(data)
        setInstalled(setData);
        toast(`Yahoo!! ${data.title} installed Successfully`)
    }

    console.log(installed)



    const isInstalled = installed.find(i => i.id === clickedData.id)
    // console.log(getStoredData().some(s => s.id === id), id, isInstalled)

    console.log(isInstalled);
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


                            {/* install now btn  */}

                            <div>
                                <button id={`btn-${clickedData.id}`} onClick={() => (handleinstallBtn(clickedData)


                                )}
                                    disabled={isInstalled}
                                    className={`btn ${isInstalled && 'bg-red-300'} btn-accent py-3.5 px-5 text-white font-bold `}>

                                    {isInstalled ? 'Installed' : ` Install Now (${clickedData.size} MB)`}

                                </button>
                            </div>


                        </div>


                    </div>

                </div>

                <hr className='opacity-[0.2]' />


                <VerticalBarChart clickedData={clickedData}></VerticalBarChart>


                <hr className='opacity-[0.2] my-10' />


                <div>
                    <h3 className='font-semibold text-xl mb-6'>Description</h3>

                    <p className='text-[#627382]'>{clickedData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;