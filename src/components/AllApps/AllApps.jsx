import { FaSearch } from 'react-icons/fa';
import AppCards from '../AppCards/AppCards';
import { Suspense } from 'react';
import { useLoaderData } from 'react-router';

// const fetchData = fetch('./data.json').then(res => res.json())

const AllApps = () => {
    // const data = fetchData()
    const loader = useLoaderData()
    // console.log(loader)
    // const data = use(fetchData)
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

                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                        <AppCards loader={loader}></AppCards>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AllApps;