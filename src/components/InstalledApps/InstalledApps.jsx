import React, { useEffect, useState } from 'react';
import InstalledCards from './InstalledCards/InstalledCards';
import { toast } from 'react-toastify';

const InstalledApps = () => {

    const [data, setData] = useState([])

    const [sortedOrder, setSortedOrder] = useState('none');
    console.log([...data].sort((a, b) => b.downloads - a.downloads))


    const downloadsValue = (app) => {
        const value = app?.downloads;

        if (typeof value === 'string') {
            const parseData = parseFloat(app?.downloads)
            if (value.toLowerCase().includes('m')) return parseData * 1000000;
        }
    }

    const handleSort = (() => {
        if (sortedOrder === 'Low-High') {
            return [...data].sort((a, b) => downloadsValue(a) - downloadsValue(b))
        } else if (sortedOrder === 'High-Low') {
            return [...data].sort((a, b) => downloadsValue(b) - downloadsValue(a));
        } else {
            return data;
        }
    })();

    const getStoredDataFromLs = () => {
        const StoredData = localStorage.getItem('installedApp');
        if (StoredData) {
            return JSON.parse(StoredData);
        } else {
            return []
        }
    }

    useEffect(() => {
        setData(getStoredDataFromLs());
    }, [])

    const removeFromLs = (dataBtn) => {
        console.log(dataBtn.id)

        const filteredData = data.filter(d => d.id !== dataBtn.id);
        console.log(filteredData)

        setData(filteredData)

        toast(`${dataBtn.title} Uninstalled from your Device`)
        return localStorage.setItem('installedApp', JSON.stringify(filteredData))
    }

    // console.log(data)
    return (
        <div className='bg-[#F5F5F5]'>

            <div className='max-w-7xl mx-auto px-4 py-20'>
                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Your Installed Apps</h1>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us </p>
                </div>

                <div className='mt-10 mb-4 sm:flex items-center sm:justify-between text-center'>

                    <p className='text-2xl font-semibold  mb-4'>({handleSort.length}) Apps Found</p>

                    <div className=' items-center color-[#627382]'>
                        {/* <FaCaretDown /> */}

                        <select value={sortedOrder} className="select" onChange={(e) => setSortedOrder(e.target.value)}>
                            <option value='none'>Sort By Size</option>
                            <option value='Low-High'>Low-High</option>
                            <option value='High-Low'>High-Low</option>
                        </select>
                    </div>
                </div>



                <div>
                    <div className="card card-border ">

                        {

                            handleSort.map((d, i) => (<InstalledCards removeFromLs={removeFromLs} key={i} d={d}></InstalledCards>))
                        }
                        {/* <InstalledCards></InstalledCards> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;