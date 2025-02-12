import React from 'react';
import assets from '../../constants/assets';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import cards from '../../constants/cards';

export default function CardComponent(){
    const navigate = useNavigate()
    return(
        <div >
        <div className='w-full h-[1515px] overflow-y-hidden px-7 gap-6 py-9 flex flex-wrap items-start justify-center'>
                {cards.map((image, index) => (
                    <motion.div
                    key={index}
                    className='bg-black w-[330px] h-[450px] rounded-[37px] bg-cover group bg-center opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[315px] hover:py-2 transition-all duration-500'
                    style={{ backgroundImage: `url(${image.src})` }}
                    
                    >
                    <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                        <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                        <p className='text-white text-2xl font-Salsa'>{image.title}</p>
                        <img src={image.heart_icon} alt='heart' className='w-6 h-6 ml-auto mx-2'/>
                        </div>
                        <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                        <img src={image.location_icon} className='w-[18px] h-[18px]'/>
                        <p className='text-white text-sm font-Andika mx-1'>{image.author}</p>
                        </div>
                        <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.
                        </p>
                        <button className='bg-white text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                        Explore more
                        </button>
                    </div>
                    </motion.div>
                ))}
            </div>
            <div className='w-full flex justify-center pb-1 pt-3'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => navigate("/destination")}>
                            Explore
                        </a>
                    </button>
            </div>
        </div>
    )
}