import React from 'react';
import assets from '../../constants/assets';
import {motion} from 'framer-motion';
import { b } from 'framer-motion/client';

export default function ExampleCard(){
    return(
        <div className='w-full px-12 gap-6 py-12'>
          <motion.div className='bg-black w-fit rounded-[50px]'
          initial={{scaleX:'30%',
            rotate:'-90deg',
          }}
          animate={{scaleX:'100%',
            rotate:'-0deg',
            transition:{
              duration:0.5,
              delay:0.5,
              type:'spring',
            }
          }}
          >
            <div className='w-[390px] h-[376px] p-10 rounded-[50px] flex flex-col items-center justify-center gap-6' 
            style={{backgroundImage:`url(${assets.image5})`,backgroundSize:`cover`}}>
                <motion.p className='font-Salsa text-3xl text-white'
                initial={{textaxis:'90deg'}}>
                  Lorem ipsum
                </motion.p>
                <p className='font-Andika text-base text-white text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur maximus lacus, non lacinia enim sodales sed. Aenean a facilisis purus. Ut varius eget velit egestas ullamcorper. Praesent sed volutpat lorem, sit amet pellentesque turpis.
                </p>
                <button className='bg-white  text-black font-Andika font-semibold content-center text-m w-1/2 rounded-full px-3 py-2 pt-1'>
                    Explore more 
                </button>
              </div>
          </motion.div>
        </div>
    )
}