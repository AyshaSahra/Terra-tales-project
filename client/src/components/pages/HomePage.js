import React from 'react'
import NavBar from '../navbar/NavBar'
import assets from '../../constants/assets'
import FooterElement from '../footer/FooterElement'
import ExampleCard from '../card.js/ExtendableCard'
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import cards from '../../constants/cards'
import ProfileView from '../profile/ProfileView'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import HiddenCards from '../card.js/HiddenCard'

export default function HomePage() {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate(); 
    
    const [openEnterRaffle, setOpenEnterRaffle] = useState(false);

    const [openTicket, setOpenTicket] = useState(false);

    const handleClosepopup = () => {
        setOpenTicket(false);
      };

      const { user, setUser } = useContext(UserContext);
    const handleOpenPopup = () => {
        setOpenTicket(true);
      };

    const handleCloseEnterRaffle = () => {
        setOpenEnterRaffle(false);
    };

    const [isFilled, setIsFilled] = useState(false);

  const handleToggle = () => {
    setIsFilled((prev) => !prev);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards") // Replace with your actual API
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, []);

    return (
        <>
        <NavBar/>
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
                    <p className='text-white text-4xl font-McLaren text-center pt-3'>
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
                        <div className='h-[500px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[0]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 1*/} 
                                    {data[0]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        {/*location 1*/}
                                        {data[0]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                     {/*Text 1*/}
                                     {data[0]?.description || "Loading..."}
                                    </p>
                                    <button 
                                    className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>

                    {/*Card 2*/}
                    <div className='bg-black full'>
                        <div className='h-[350px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[1]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 2*/}
                                    {data[1]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                       {/*location 2*/}
                                       {data[1]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                        {/*text 2*/}
                                        {data[1]?.description || "Loading..."}
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
                        <div className='h-[340px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[2]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 3*/} 
                                    {data[2]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        {/*location 3*/}
                                        {data[2]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    {/*text 3*/}
                                    {data[2]?.description || "Loading..."}
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                        </div>

                    {/*Card 4*/}
                    <div className='bg-black full'>
                        <div className='h-[510px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[3]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 4*/}
                                    {data[3]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        {/*location 4*/}
                                        {data[3]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    {/*text 4*/}
                                    {data[3]?.description || "Loading..."}
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
                        <div className='h-[500px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[4]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 5*/}
                                    {data[4]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        {/*location 5*/}
                                        {data[4]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    {/*text 5*/}
                                    {data[4]?.description || "Loading..."}
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    
                    {/*Card 6*/}
                    <div className='bg-black full'> {/**/}
                    <div className='h-[350px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[195px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${data[5]?.imageURL || 'fallback.jpg'})`}}>
                            <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-2 transition-all duration-500 overflow-hidden'>
                                <div className='flex flex-row h-fit w-full items-center px-2 pt-3'> 
                                <p className='text-white text-2xl font-Salsa'>
                                    {/*Title 6*/} 
                                    {data[5]?.title || "Loading..."}
                                </p>
                                <img
                                    src={isFilled ? assets.heartfill : assets.heart} // Toggle images
                                    alt="heart"
                                    className="w-6 h-6 ml-auto mx-2 cursor-pointer"
                                    onClick={handleToggle}
                                    />
                                </div>

                                <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                                    <img src={assets.location} className='w-[18px] h-[18px]'/>
                                    <p className='text-white text-sm font-Andika mx-1'>
                                        {/*location 6*/}
                                        {data[5]?.location || "Loading..."}
                                    </p>
                                </div>
                                
                                
                                    <p className='text-white text-sm pt-1 font-Andika mx-6 text-balance mb-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                                    {/*text 6*/}
                                    {data[5]?.description || "Loading..."}
                                    </p>
                                    <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                        Explore more 
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className='w-full flex justify-center pb-10'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/destination");
                        }}>
                        Explore
                    </a>
                    </button>
                </div>
            </div>

            {/*ITINERARY PART*/}
            <div className='h-screen w-full itinerary-home' >
            <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-4'>
                        Plan your Adventure
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-lg text-base py-2 w-[45%]'>
                        "Explore every corner of Tamil Nadu with our custom itineraries!"
                    </p>
            </div>

                {/*Itinerary cards*/}
                <div className='mx-[72px] flex justify-center items-center'>
                <ExampleCard/>
                </div>

                <div className='w-full flex justify-center pb-10'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-base w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => {
                            window.scrollTo(0, 0); // Scroll to top
                            navigate("/itinerary");
                        }}>
                            Explore
                        </a>
                    </button>
                </div>
            </div>

            {/*HIDDEN SPOTS*/}
            <div className='w-full bg-black'>
            
            <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-6'>
                        Hidden Gems
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]'>
                        "Unlock the unknown"
                    </p>
            </div>

                {/*Hidden gems cards*/}
                <div className='w-full bg-black'>
                <HiddenCards cards={cards}/>
                <div className='w-full flex justify-center pb-8'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={handleOpenPopup}>
                            Explore
                        </a>
                    </button>
                </div>
            </div>
            </div>
            <FooterElement/>
            <ProfileView
        open={openTicket}
        handleClose={handleClosepopup}
        state={user}
      />
        </div>
        </>
    )
}
