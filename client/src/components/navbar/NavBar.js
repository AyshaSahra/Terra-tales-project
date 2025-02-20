import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import whiteHeart from '../../assets/heart white.png';
import profileIcon from '../../assets/profile.png';
import assets from '../../constants/assets';

export default function NavBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-black bg-opacity-[0%] z-50 transition-bg-opacity duration-500 hover:bg-opacity-[60%] w-full h-[100px] max-[768px]:bg-opacity-[70%] flex items-center absolute px-4'>
            <div className='flex items-center justify-between w-full'>
                {/* Logo */}
                <a onClick={() => navigate("/")}> 
                    <img src={assets.logo} className='h-[150px] cursor-pointer' alt="Logo"/>
                </a>

                {/* Hamburger Menu (Visible on Tablet & Mobile) */}
                <div className='md:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-white text-3xl'>
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex flex-row items-center min-[1440px]:gap-14 gap-12 pr-4'>
                    <li><a onClick={() => navigate("/destination")} className='text-white text-xl font-Ubuntu cursor-pointer'>Destination</a></li>
                    <li><a onClick={() => navigate("/hidden-spot")} className='text-white text-xl font-Ubuntu cursor-pointer'>Hidden Spots</a></li>
                    <li><a onClick={() => navigate("/itinerary")} className='text-white text-xl font-Ubuntu cursor-pointer'>Itinerary</a></li>
                    <li><a className='text-white text-xl font-Ubuntu cursor-pointer'>Forum</a></li>
                </ul>

                {/* Profile & Favorite Icons */}
                <ul className='hidden md:flex flex-row items-center gap-9 px-8'>
                    <li><a onClick={() => navigate("/favourite")}><img src={assets.white_heart} className='h-7 w-7 cursor-pointer' alt="Favorites"/></a></li>
                    <li><a onClick={() => navigate("/SignUp")}><img src={assets.profile} className='h-7 w-7 cursor-pointer' alt="Profile"/></a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='absolute top-[100px] right-0 w-1/2 max-h-max gap-5 bg-black bg-opacity-70 p-5 flex flex-col items-center min-[768px]:hidden'>
                    <a onClick={() => { navigate("/destination"); setIsOpen(false); }} className='text-white bg-slate-700 rounded-2xl w-full text-center text-xl font-Ubuntu py-2 cursor-pointer'>Destination</a>
                    <a onClick={() => { navigate("/hidden-spot"); setIsOpen(false); }} className='text-white text-xl bg-slate-700 rounded-2xl w-full text-center font-Ubuntu py-2 cursor-pointer'>Hidden Spots</a>
                    <a onClick={() => { navigate("/itinerary"); setIsOpen(false); }} className='text-white text-xl bg-slate-700 rounded-2xl w-full text-center font-Ubuntu py-2 cursor-pointer'>Itinerary</a>
                    <a className='text-white text-xl bg-slate-700 rounded-2xl w-full text-center font-Ubuntu py-2 cursor-pointer'>Forum</a>
                    <div className='flex flex-row justify-evenly items-center w-full'>
                    <a onClick={() => { navigate("/favourite"); setIsOpen(false); }} className='py-2 cursor-pointer'><img src={whiteHeart} className='h-7 w-7' alt="Favorites"/></a>
                    <a onClick={() => { navigate("/SignUp"); setIsOpen(false); }} className='py-2 cursor-pointer'><img src={profileIcon} className='h-7 w-7' alt="Profile"/></a>
                    </div>
                </div>
            )}
        </nav>
    );
}
