import React from 'react';
import assets from '../../constants/assets'
import { useNavigate } from 'react-router-dom';

export default function NavBar(){
    const navigate = useNavigate();
    return (
        <nav className='bg-black opacity-[90%] w-full h-[100px] flex items-center absolute'>
            <ul className='flex items-center justify-between w-full pr-11 pl-2'>
                <ul>
                    <a onClick={() => navigate("/")}>
                    <img src={assets.logo} className='h-[147px]'/>
                    </a>
                </ul>

                <ul className='flex flex-row items-center gap-14 pr-4'>
                    <li>
                        <a onClick={() => navigate("/destination")}
                            className='text-white text-xl font-Ubuntu'>
                            Destination
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/hidden-spot")}
                            className='text-white text-xl font-Ubuntu'>
                            Hidden Spots
                        </a>
                    </li>

                    <li>
                        <a onClick={() => navigate("/forum")}
                            className='text-white text-xl font-Ubuntu'>
                            Forum
                        </a>
                    </li>
                </ul>

                <ul>
                    <li className='flex flex-row items-center gap-8'>
                        <a onClick={() => navigate("/favourite")}>
                            <img src={assets.heart} className='h-7 w-7'/>
                        </a>

                        <a onClick={() => navigate("/profile")}>
                            <img src={assets.profile} className='h-7 w-7'/>
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}