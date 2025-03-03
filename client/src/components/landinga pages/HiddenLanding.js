import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import assets from '../../constants/assets';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import HiddenCards from '../card.js/HiddenCard';
import GoogleMapComponent from '../weather/GoogleMapComponent';

const API_KEY = "6adf2d4e190d475faa760039252802";

export default function HiddenLanding() {
    const navigate = useNavigate();
    const { id } = useParams();  // ✅ Get the card ID from the URL
    const [destination, setDestination] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [weather, setWeather] = useState(null);

useEffect(() => {
    if (!destination?.location) return;  // Ensure destination and location are available

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${destination.location}`);
            const data = await response.json();

            setWeather({
                temp: Math.round(data.current.temp_c),  // ✅ Get correct temperature
                condition: data.current.condition.text, // ✅ Get weather condition text
                icon: data.current.condition.icon, // ✅ Get weather icon
            });
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    fetchWeather();
}, [destination]);  // ✅ Fetch weather only when destination updates


  
useEffect(() => {
    const fetchDestination = async () => {
        if (!id) return; // Ensure ID is present

        try {
            const response = await axios.get(`http://localhost:5000/api/hidden-spots/${id}`); // ✅ Fetch the correct card
            setDestination(response.data);
        } catch (error) {
            console.error("Error fetching destination:", error);
            setDestination(null);
        } finally {
            setLoading(false);
        }
    };

    fetchDestination();
}, [id]);


    // ✅ Handle Scroll Event Efficiently
    const handleScroll = useCallback(() => {
        setScrollPosition(window.scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]); 

    // ✅ Loading and Error Handling
    if (loading) return <p className="text-white text-center">Loading...</p>;
    if (!destination) return <p className="text-white text-center">Destination not found</p>;

    // ✅ Optimized Parallax Effect
    const calculateImageStyle = () => {
        const startTransform = window.innerHeight * 0.5;
        const endTransform = window.innerHeight * 1.5;
        const progress = Math.max(0, Math.min((scrollPosition - startTransform) / (endTransform - startTransform), 1));

        const finalTop = 64;
        const finalRight = window.innerWidth - (window.innerWidth * 0.000051) + 320;
        const scale = 1 - (progress * 0.5);
        const translateY = progress * finalTop;
        const translateX = progress * finalRight;
        const isLocked = scrollPosition > endTransform;

        return {
            transform: isLocked 
                ? `translate(${finalRight}px, ${finalTop}px) scale(0.5)`
                : `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            opacity: 1,
            width: progress === 0 ? '100vw' : '482px',
            height: progress === 0 ? '100vh' : '594px',
            backgroundImage: `url(${destination.src})`,  // ✅ Dynamic image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            transition: isLocked ? 'none' : 'all 300ms ease-out',
            zIndex: 4,
        };
    };

    return (
        <div className="relative">
            {/* First Section with Parallax Image */}
            <div className="h-screen relative bg-black overflow-hidden">
                <div style={calculateImageStyle()} />
                <NavBar />
                <div className="relative h-full flex items-end justify-start">
                    <div className="text-white text-center p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
                        <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                            {destination.title}
                        </p>
                        <div className='flex flex-row items-center'>
                            <img src={assets.location} className='w-[18px] h-[18px]' />
                            <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                                {destination.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="h-screen bg-black backdrop-blur-sm p-12 relative" style={{ zIndex: 2 }}>
                <div className="max-w-[50%] py-10 ml-8 h-fit text-white p-8">
                    <div className="text-white p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
                        <div className='flex flex-col justify-start w-full'>
                            <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                                {destination.title}
                            </p>
                            <div className='flex flex-row items-center'>
                                <img src={assets.location} className='w-[18px] h-[18px]' />
                                <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                                    {destination.location}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="font-Ubuntu text-2xl text-white">
                        {destination.description}
                    </p>
                </div>
            </div>

            {/* Weather and Other Sections */}
            <div className='bg-black h-screen w-full justify-center flex flex-col items-start gap-14 p-2' style={{ zIndex: 2 }}>
                <div className='w-full h-fit items-center justify-center flex' style={{ flex: 0.5 }}>
                    <div className='linear-weather w-fit h-fit bg-opacity-5 rounded-[35px]'>
                        <div className='flex flex-col bg-transparent glass-effect rounded-[35px] p-2 justify-center items-center'>
                            <div className='flex flex-row w-full h-fit'>
                                <div className='flex flex-col justify-center items-center w-full px-10' style={{ flex: 2 }}>
                                    <img src={assets.weather} className='w-[130px] h-[88px]' />
                                    <p className='text-base font-Andika text-white py-1'>
                                        {weather?.condition || 'Loading...'}
                                    </p>
                                </div>
                                <div className='flex items-center justify-center' style={{ flex: 0.2 }}>
                                    <img src={assets.line} className='h-[110px]' />
                                </div>
                                <div className='w-full flex flex-col items-center justify-center px-10' style={{ flex: 2 }}>
                                    <div className='w-full'>
                                        <p className='text-[15px] text-white font-UbuntuBold uppercase text-nowrap py-1'>
                                        {destination.title}
                                        </p>
                                        <p className='text-[15px] text-white font-UbuntuBold uppercase text-nowrap py-1'>
                                        {destination.location}
                                        </p>
                                        <p className='text-[33px] font-bold text-white font-salsa'>
                                            {weather?.temp ? `${weather.temp}°C` : 'Loading...'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-fit items-center justify-center flex' style={{ flex:0.3 }}>
                <GoogleMapComponent lat={destination.lat} lng={destination.lng} />
                </div>
            </div>

            {/* Hidden Gems Section */}
            <div className='w-full bg-black'>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-white text-4xl font-McLaren text-center pt-6'>
                        Hidden Gems
                    </p>
                    <p className='font-Andika text-white text-center min-[1440px]:text-base text-m py-2 w-[45%]'>
                        "Unlock the unknown"
                    </p>
                </div>
                <HiddenCards />
                <div className='w-full flex justify-center pb-10'>
                    <button className='bg-white text-black font-Andika font-semibold text-m w-fit rounded-full px-6 py-2 pt-1'>
                        <a onClick={() => {
                            window.scrollTo(0, 0); 
                            navigate("/hidden-spot");
                        }}>
                            Explore
                        </a>
                    </button>
                </div>
            </div>

            <FooterElement />
        </div>
    );
}
