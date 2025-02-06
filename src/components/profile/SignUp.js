import assets from "../../constants/assets";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    return(
        <div className="w-full h-screen profile-background flex justify-end">
            <div className="flex flex-col bg-transparent glass-effect w-1/2 h-full rounded-l-[35px] p-12 justify-center items-center">
               <p className="font-Pottaone text-[34px] text-white">
                    Sign up
                </p> 
               <div className="w-full h-fit px-[85px] pt-3 flex flex-col gap-[10px]">
                <div className=" w-full h-fit px-4">
                    <p className="font-McLaren text-base text-white py-2">
                        User Name:
                    </p>
                    <input type="text" placeholder="Username..." className="p-3 py-2 text-xs font-mono rounded-lg w-full focus:outline-none"/>
                </div>

                <div className=" w-full h-fit px-4">
                    <p className="font-McLaren text-base text-white py-2">
                        Email address:
                    </p>
                    <input type="text" placeholder="Email address..." className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"/>
                </div>

                <div className=" w-full h-fit px-4">
                    <p className="font-McLaren text-base text-white py-2">
                        Password:
                    </p>
                    <input type="text" placeholder="Password..." className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"/>
                </div>

                <div className=" w-full h-fit px-4">
                    <p className="font-McLaren text-base text-white py-2">
                        Confirm password:
                    </p>
                    <input type="text" placeholder="Confirm password..." className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"/>
                </div>
               </div>

               <div className='w-full flex justify-center pt-5'>
                    <button className='bg-white  text-black font-Andika font-semibold  content-center text-base w-fit rounded-full px-8 py-2 pt-1'>
                        Sign up
                    </button>
                </div>
                <p className="text-white font-McLaren text-xs pt-[15px]">
                    Already  have an account <a onClick={() => navigate("/login")}
                            className='underline font-bold cursor-pointer'>
                            Login
                        </a> 
                </p>

                <p className="text-white font-McLaren text-base pt-[15px]">
                    Or sign up with
                </p>
                <button className="font-Ubuntu text-base bg-white flex flex-row items-center justify-center p-1 rounded-[10px] my-2 px-3 pt-1">
                    <img src={assets.google_icon} className="w-[32px] h-[32px]"/> <p className="px-1">Google</p>
                </button>
            </div>
        </div>
    )
}