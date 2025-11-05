import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router';
import bannerImg from '../../../../images/hero.png'

const Banner = () => {
    return (
        <div className='pt-20 px-4'>
            <div className='text-center mb-10'>
                <h1 className='text-5xl md:text-7xl font-bold opacity-[0.9]  mb-4'>We Bulid <br /> <span className='text-[#945FEE]'>Productive</span> Apps</h1>
                <p className='text-xl text-[#627382] mb-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div>
                    <Link to='https://play.google.com/store/apps?hl=en_GB' target='_blank' className='btn border border-[#d2d2d2] rounded-sm font-bold text-xl mr-4 mb-4'><FaGooglePlay className='mr-2.5' />Google Play</Link>
                    <Link to='https://www.apple.com/uk/app-store/' target='_blank' className='btn border border-[#d2d2d2] rounded-sm font-bold text-xl mr-4 mb-4'><FaAppStoreIos className='mr-2.5' />
                        App Store</Link>
                </div>
            </div>


            {/* Banner image  */}

            <div className='flex justify-center'>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;