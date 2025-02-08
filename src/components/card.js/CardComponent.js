import React from 'react';
import assets from '../../constants/assets';
import React from 'react';
import assets from '../../constants/assets';

export default function CardComponent(){
    return(
        <div className='w-full px-12 gap-6 py-12'style={{flex:3,flexDirection:'row',display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <div className='bg-black full'> {/**/}
                        <div className='h-[520px] rounded-[37px] bg-cover group bg-center background opacity-[90%] flex justify-center items-end px-2 pb-2 pt-[345px] hover:py-2 transition-all duration-500'style={{backgroundImage:`url(${assets.image6})`}}>
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
    )
}