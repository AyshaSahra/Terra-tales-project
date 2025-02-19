import React, { useEffect, useState } from 'react';
import assets from '../../constants/assets';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';
import cards from '../../constants/cards';
import { useNavigate } from 'react-router-dom';
import ParallaxCardCarousel from '../card.js/CardCarousel';

export default function DestinationPage() {
  const navigate = useNavigate()
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate image transform based on scroll
  const calculateImageStyle = () => {
    const startTransform = window.innerHeight * 0.5;
    const endTransform = window.innerHeight * 1.5;
    const progress = Math.max(0, Math.min((scrollPosition - startTransform) / (endTransform - startTransform), 1));
    
    // Calculate final position
    const finalTop = 64;
    const finalRight = window.innerWidth - (window.innerWidth * 0.000051) + 320;
    
    // Transform calculations
    const scale = 1 - (progress * 0.5);
    const translateY = progress * finalTop;
    const translateX = progress * finalRight;
    
    // Final dimensions
    const finalWidth = window.innerWidth * 0.35;
    const finalHeight = window.innerHeight * 0.6;

    // Determine if we should lock the image in place
    const isLocked = scrollPosition > endTransform;
    
    return {
      transform: isLocked 
        ? `translate(${finalRight}px, ${finalTop}px) scale(0.5)`
        : `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 1,
      width: progress === 0 ? '100vw' : '482px',
      height: progress === 0 ? '100vh' : '594px',
      backgroundImage: `url(${assets.beach})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      transition: isLocked ? 'none' : 'all 300ms ease-out',
      zIndex: 4, // Keep a consistent z-index that's above the background but below the text
    };
  };

  return (
    <div className="relative">
      {/* First Section with Parallax Image */}
      <div className="h-screen relative bg-black overflow-hidden">
        <div style={calculateImageStyle()} />
        <NavBar/>
        <div className="relative h-full flex items-end justify-start">
          <div className="text-white text-center p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
            <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                Marina Beach
            </p>
            <div className='flex flex-row items-center'>
            <img src={assets.location} className='w-[18px] h-[18px]'/>
            <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                Chennai
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-screen  bg-black backdrop-blur-sm p-12 relative" style={{ zIndex: 2 }}>
        <div className="max-w-[50%] py-10 ml-8 h-fit text-white p-8">
        <div className="text-white p-8 bg-opacity-30 rounded-lg" style={{ zIndex: 20 }}>
            <div className='flex flex-col justify-start w-full'>
            <p className='font-Pottaone min-[1440px]:text-7xl text-5xl pb-3 text-white'>
                Marina Beach
            </p>
            <div className='flex flex-row items-center'>
                <img src={assets.location} className='w-[18px] h-[18px]'/>
                <p className='font-Ubuntu min-[1440px]:text-5xl pl-1 text-2xl text-white'>
                    Chennai
                </p>
            </div>
            </div>
        </div>
          <p className="font-Ubuntu text-2xl text-white" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      {/*Section 3 */}
      <div className='bg-black h-screen w-full justify-center flex flex-col items-start p-2' style={{ zIndex: 2 }}>
        <div className='w-full h-fit items-center justify-center flex' style={{flex:0.5}}>
        <div className='linear-weather w-fit h-fit bg-opacity-5 rounded-[35px]'>
          <div className='flex flex-col bg-transparent glass-effect rounded-[35px] p-2 justify-center items-center'>
            <div className='flex flex-row w-full h-fit'>
            <div className='flex flex-col justify-center items-center w-full  px-10' style={{flex:2}}>
              <img src={assets.weather} className='w-[130px] h-[88px] '/>
              <p className='text-base font-Andika text-white py-1'>
                Partly Cloudy
              </p>
            </div>
            <div className='flex items-center justify-center' style={{flex:0.2}}>
              <img src={assets.line} className='h-[110px]'/>
            </div>
            <div className=' w-full flex flex-col items-center justify-center px-10' style={{flex:2}}>
              <div className='w-full'>
              <p className='text-[15px] text-white font-UbuntuBold uppercase text-nowrap py-1'>
                Chennai, Tamil Nadu
              </p>
              <p className='text-[11px] text-white font-Andika'>
                Monday
              </p>
              <p className='text-[33px] font-bold text-white font-salsa'>
              22°C
              </p>
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        <div className=' w-full flex flex-row' style={{flex:2}}>
          <div  className='w-full flex justify-center items-center p-2' style={{flex:1}}>
            <img src={assets.location_card} className='w-[441px] h-[362px] rounded-2xl'/>
          </div>
          <div className='w-full flex justify-center items-center p-2' style={{flex:1}}>

          </div>
        </div>
      </div>
      {/* Section 4*/}
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
                <div className='flex gap-8 flex-row items-center p-7 mx-14 overflow-scroll'>
                    {cards.map((card,index) =>(
                      <div>
                        <div className='w-[350px] h-[470px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[245px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${card.src})`}}>
                        <div className='w-full h-full bg-black opacity-[80%] flex flex-col items-center px-4 py-4 rounded-[37px] group-hover:py-16 transition-all duration-500 overflow-hidden'>
                        <div className='flex flex-row h-fit w-full items-center px-2 pt-3'>
                           <p className='text-white text-2xl font-Salsa'>
                                    {card.title}
                            </p>
                            <img src={card.heart_icon} alt='location' className='w-6 h-6 ml-auto mx-2'/> 
                        </div>
                        <div className='flex flex-row h-fit w-full items-center px-1 pt-2'>
                            <img src={card.location_icon} className='w-[18px] h-[18px]'/>
                            <p className='text-white text-sm font-Andika mx-1'>
                                Lorem
                            </p>
                         </div>
                         <p className='text-white text-sm pt-6 font-Andika mx-6 text-balance mb-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                            {card.text}           
                        </p>
                            <button className='bg-white  text-black font-Andika font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                                {card.button} 
                            </button>
                        </div>
                        </div>
                      </div>  
                    ))}
                </div>
                <div className='w-full flex justify-center pb-10'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-m w-fit rounded-full px-6 py-2 pt-1'>
                    <a onClick={() => navigate("/hidden-spot")}>
                            Explore
                        </a>
                    </button>
                </div>
      </div>
      <FooterElement/>
    </div>
  );
}