import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../../images/logo.png'
import { FaGithub } from 'react-icons/fa';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100  py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold gap-4">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/app'>Apps</NavLink>
                            <NavLink to='/installedapps'>Installation</NavLink>
                        </ul>
                    </div>
                    <Link to='/' className="cursor-pointer btn-ghost text-xl flex items-center gap-1"><img className='w-10 h-10 mr-1' src={logo} alt="" /><span className='font-bold  text-[#6933E5]'>All Hero App</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-base gap-8">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/app'>Apps</NavLink>
                        <NavLink to='/installedapps'>Installation</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='https://github.com/Salikur6' target="_blank" className="btn py-5 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-sm"><FaGithub className='mr-2.5 text-xl' />
                        <span className='font-bold '>Contribute</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;