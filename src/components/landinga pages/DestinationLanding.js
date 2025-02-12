import react from "react"
import NavBar from "../navbar/NavBar"
import assets from "../../constants/assets"
import FooterElement from "../footer/FooterElement"
import { col } from "framer-motion/client"

export default function DestinationPage(){
    return(
        <div>
            <NavBar/>
            {/*HomeScreen*/}
            <div className="w-full h-screen destination-landingbg items-end flex">
                <div className="w-fit p-11 pb-12">
                    <p className="font-Pottaone text-5xl text-white py-3">
                        Lorem ipsum
                    </p>
                    <div className="flex flex-row items-center">
                        <img src={assets.location} className="w-5 h-5 mx-1"/>
                        <p className="font-Ubuntu text-xl text-white">
                            Lorem
                        </p>
                    </div>
                </div>
            </div>

            {/*Description page*/}
            <div className="w-full h-screen bg-black flex flex-row">
                <div>
                <p className="font-Pottaone text-5xl text-white py-3">
                        Lorem ipsum
                </p>
                <div className="flex flex-row items-center">
                        <img src={assets.location} className="w-5 h-5 mx-1"/>
                        <p className="font-Ubuntu text-xl text-white">
                            Lorem
                        </p>
                    </div>
                </div>
            </div>
            <FooterElement/>
        </div>
    )
}