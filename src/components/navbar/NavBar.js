import React from 'react';
import assets from '../../constants/assets'
import { useNavigate } from 'react-router-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import HiddenSpot from '../pages/HiddenSpot';
import ProfilePage from '../profile/SignUp';

export default function NavBar(){
    const navigate = useNavigate()
    return (
        <nav className='bg-black bg-opacity-[0%] z-50 transition-bg-opacity duration-500 hover:bg-opacity-[60%] w-full h-[100px] overflow-hidden flex items-center absolute'>
            <ul className='flex items-center justify-between w-full pr-11 pl-1'>
                <ul>
                    <a onClick={() => navigate("/")}>
                    <img src={assets.logo} className='h-[150px] cursor-pointer'/>
                    </a>
                </ul>

                <ul className='flex flex-row items-center min-[1440px]:gap-14 gap-12 pr-4'>
                    <li>
                        <a onClick={() => navigate("/destination")}
                            className='text-white text-xl font-Ubuntu cursor-pointer'>
                            Destination
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/hidden-spot")}
                            className='text-white text-xl font-Ubuntu cursor-pointer'>
                            Hidden Spots
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/itinerary")}
                            className='text-white text-xl font-Ubuntu cursor-pointer'>
                            Itinerary
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/forum")}
                            className='text-white text-xl font-Ubuntu cursor-pointer'>
                            Forum
                        </a>
                    </li>
                </ul>

                <ul>
                    <li className='flex flex-row items-center gap-8'>
                        <a onClick={() => navigate("/favourite")}>
                            <img src={assets.white_heart} className='h-7 w-7 cursor-pointer'/>
                        </a>

                        <a onClick={() => navigate("/SignUp")}>
                            <img src={assets.profile} className='h-7 w-7 cursor-pointer'/>
                        </a>
                    </li>
                </ul>
                
            </ul>
        </nav>
    )
}