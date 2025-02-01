import React from 'react';
import assets from '../../constants/assets';

export default function CardComponent(){
    return(
        <div className='w-full px-12 gap-6 py-12'style={{flex:3,flexDirection:'row',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    {/*Column 1*/}
                    <div className='w-full flex flex-col gap-6'>
                    <div className='bg-black full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>
                    </div>

                    {/*Column 2*/}
                    <div className='w-full flex flex-col gap-6'>
                    <div className='bg-black w-full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>
                    </div>

                    {/*Column 3*/}
                    <div className='w-full flex flex-col gap-6'>
                    <div className='bg-black w-full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>

                    <div className='bg-black w-full'>
                        <div className='h-[520px] rounded-[37px] bg-cover bg-center background opacity-[90%] flex justify-center items-end px-2'style={{backgroundImage:`url(${assets.image})`}}>
                            <div className='w-full h-[178px] bg-black opacity-[80%] flex flex-col px-4 py-2 rounded-[37px] mb-2'>
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
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    )
}