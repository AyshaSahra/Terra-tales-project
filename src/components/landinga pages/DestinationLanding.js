import React, { useEffect, useState } from 'react';
import assets from '../../constants/assets';
import NavBar from '../navbar/NavBar';
import FooterElement from '../footer/FooterElement';

export default function DestinationPage() {
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
    const finalRight = window.innerWidth - (window.innerWidth * 0.003) + 150;
    
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
        <NavBar className='fixed z-50'/>
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
      <div className="min-h-screen  bg-black backdrop-blur-sm p-12 relative" style={{ zIndex: 2 }}>
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
          <p className="font-Ubuntu text-2xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <FooterElement/>
    </div>
  );
}