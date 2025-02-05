import React from 'react'
import NavBar from '../navbar/NavBar'
import assets from '../../constants/assets'
import FooterElement from '../footer/FooterElement'
import ExampleCard from '../card.js/ExtendableCard'
import { useState } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.",
    button: "Explore",
    image: assets.image1,
  },
  { title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.",
    button: "Explore",
    image: assets.image2, 
  },
  { title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.",
    button: "Explore",
    image: assets.image3, },
  { title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.",
    button: "Explore",
    image: assets.image4, },
  { title: "Lorem Ipsum",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed.",
    button: "Explore",
    image: assets.image5, },
];

export default function HomePage() {
    const [selected, setSelected] = useState(0);

    return (

        <div>
            {/*HOME SCREEN*/}
           <div className=' w-full radial-gradient home-background px-10 py-10 h-screen flex flex-col justify-end pb-3 items-start'>
             <div className='py-9'>
                <p className='font-Pottaone min-[1440px]:text-7xl text-6xl pb-3 text-white '>
                    Explore 
                </p>
                <p className='font-Pottaone min-[1440px]:text-7xl pl-1 text-6xl text-white'>
                    Tamil Nadu
                </p>

             <div>
                <p className='font-Andika text-white min-[1440px]:text-xl text-lg py-3 w-[55%]'>
                "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!"  
                </p>
             </div>
             </div>
            </div> 

            {/*DESTINATION PART*/}
            <div className='w-full bg-black'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-5xl font-McLaren text-center pt-3'>
                        Best Destination
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-lg text-m py-2 w-[45%]'>
                        "Discover a land where ancient history, stunning landscapes, and vibrant culture come together to create unforgettable experiences!"  
                    </p>
                </div>

                {/*Destination cards*/}
                <div className='w-full px-20 gap-9 min-[1440px]:px-32 py-16'style={{flex:3,flexDirection:'row',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    {/*Column 1*/}
                    <div className='w-full flex flex-col  gap-7'>
                        {/*Card 1*/}
                    <div className='bg-black full'>
                        <div className='h-[500px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image1})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>

                    {/*Card 2*/}
                    <div className='bg-black full'>
                        <div className='h-[350px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image2})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    </div>

                    {/*Column 2*/}
                    <div className='w-full flex flex-col gap-6'>
                        {/*Card 3*/}
                        <div className='bg-black full'>
                        <div className='h-[340px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image2})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                        </div>

                    {/*Card 4*/}
                    <div className='bg-black full'>
                        <div className='h-[510px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image4})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    </div>

                    {/*Column 3*/}
                    <div className='w-full flex flex-col gap-6'>
                        {/*Card 5*/}
                        <div className='bg-black full'>
                        <div className='h-[500px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image1})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/*Card 6*/}
                    <div className='bg-black full'> {/**/}
                    <div className='h-[350px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image2})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    Lorem ipsum 
                                </p>
                                <img src={assets.heart} alt='location' className='w-6 h-6 ml-auto mx-2'/>
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        Lorem
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis. Mauris pellentesque diam nec placerat consequat.
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='w-full flex justify-center pb-12'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                        See more
                    </button>
                </div>
            </div>

            {/*ITINERARY PART*/}
            <div className='h-screen w-full itinerary-home' >
            <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-5xl font-McLaren text-center pt-6'>
                        Plan your Adventure
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-lg text-m py-2 w-[45%]'>
                        "Explore every corner of Tamil Nadu with our custom itineraries!"
                    </p>
            </div>

                {/*Itinerary cards*/}
                
                <div className="flex gap-4 p-10 justify-center items-center h-fit">
                    {cards.map((card, index) => (
                        <motion.div
                        key={index}
                        className="relative rounded-[50px] overflow-hidden cursor-pointer"
                        
                        animate={{ width: selected === index ? "405px" : "126px", height: '406px' }}
                        transition={{ type:'tween', stiffness: 0, damping: 20 }}
                        onClick={() => setSelected(index)}
                    >
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-center p-4 text-white ${selected === index ? "text-xl flex flex-col justify-center items-center px-16 text-left" : ""}`}>
                        <motion.p 
                        transition={{ type:'inertia', duration:0.5 }}
                        className={`text-2xl font-Salsa text-white w-full text-nowrap ${selected === index ? "flex flex-col justify-center items-center rotate-[0deg] transition-transform duration-200" : "rotate-[-90deg] pl-[380px] h-fit"}`}>{card.title}</motion.p>
                        {selected === index && 
                        <motion.p 
                        initial={{display:'hidden', opacity:0}}
                        animate={{opacity:1}}
                        transition={{ease:'easeInOut', duration:0.5}}
                        className="text-base mt-2 font-Andika text-white w-full h-fit ease-in-out duration-200">{card.text}</motion.p>}
                        {selected === index && (
                        <button className="bg-white text-black font-Andika font-medium my-4 content-center w-1/2 rounded-full px-3 py-2 pt-1">{card.button}</button>
                        )}
                    </div>
                    </motion.div>
                        ))}
                </div>
                <div className='w-full flex justify-center pb-10'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                        See more
                    </button>
                </div>
            </div>

            {/*HIDDEN SPOTS*/}
            <div className='w-full h-screen bg-black'>

            </div>

        </div>
    )
}
