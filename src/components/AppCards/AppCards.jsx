import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCards = ({ searchedData }) => {
    // console.log(fetchData)
    // const data = use(fetchData)

    console.log(searchedData)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>


            {/* card -1 */}

            {
                searchedData.map(d => (
                    <Link key={d.id} to={`/appdetails/${d.id}`}>
                        <div className="card bg-base-100 p-4 shadow-sm cursor-pointer">
                            <figure>
                                <img className='h-[150px]'
                                    src={d?.image}
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
                ))
            }


        </div>
    );
};

export default AppCards;