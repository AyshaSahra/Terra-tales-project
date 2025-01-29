import React from 'react'
import NavBar from '../navbar/NavBar'
import assets from '../../constants/assets'

export default function HomePage() {
    return (
        <div>
            {/*Home screen*/}
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

            {/*Destination page*/}
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
                <div className='px-14 w-full py-11'style={{flex:3,flexDirection:'row',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    {/*Column 1*/}
                    <div className='bg-black w-1/3'>
                        <div className='h-[450px] w-[320px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-[306px] h-[154px] bg-black opacity-[80%] rounded-[37px] mb-2'>

                            </div>
                        </div>
                    </div>

                    {/*Column 2*/}
                    <div className='bg-black w-1/3'>
                        <div className='h-[450px] w-[320px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-[306px] h-[174px] bg-black opacity-[80%] rounded-[37px] mb-2'>

                            </div>
                        </div>
                    </div>

                    {/*Column 3*/}
                    <div className='bg-black w-1/3'>
                        <div className='h-[450px] w-[320px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-[306px] h-[174px] bg-black opacity-[80%] rounded-[37px] mb-2'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
