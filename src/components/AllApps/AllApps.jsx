import { FaSearch } from 'react-icons/fa';
import AppCards from '../AppCards/AppCards';
import { Suspense, useState } from 'react';
import { useLoaderData } from 'react-router';
import NoAppFound from './NoAppFound';

// const fetchData = fetch('./data.json').then(res => res.json())

const AllApps = () => {
    const [search, setSearch] = useState('');
    // const data = fetchData()
    const loader = useLoaderData()
    console.log(search)




    const trimed = search.trim().toLowerCase();
    console.log(trimed)

    const searchedData = trimed ? loader.filter(data => data.title.toLowerCase().includes(trimed)) : loader;
    console.log(searchedData)


    // const data = use(fetchData)
    return (
        <div className='bg-[#F5F5F5]'>
            <div className=' max-w-7xl mx-auto px-4 py-20'>


                <div className='text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Our All Applications</h1>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>

                <div className='mt-10 mb-4 sm:flex items-center sm:justify-between text-center'>

                    <p className='text-2xl font-semibold  mb-4'>({searchedData.length}) Apps Found</p>

                    <div className=' items-center color-[#627382]'>
                        <label className="input">
                            <FaSearch />
                            <input onChange={(e) => setSearch(e.target.value)} type="search" className="grow" placeholder="Search Apps" />
                            <kbd className="kbd kbd-sm">⌘</kbd>
                            <kbd className="kbd kbd-sm">K</kbd>
                        </label>
                    </div>
                </div>


                <div>

                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                        {searchedData.length > 0 ? <AppCards searchedData={searchedData}></AppCards> : <NoAppFound></NoAppFound>}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AllApps;