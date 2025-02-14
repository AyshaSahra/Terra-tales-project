import assets from "../../constants/assets";
import { useNavigate } from "react-router-dom";

export default function FooterElement() {
    const navigate = useNavigate();
    return (
        <footer>
            <nav className='footer-bg z-50 w-full flex items-center '>
                <ul className="flex flex-row items-center justify-between w-full px-12">
                    <ul className="pl-5">
                        <a onClick={() => navigate("/")}>
                            <img src={assets.logo} className='w-[160px]'/>
                        </a>
                    </ul>
                    {/*Footer options*/}
                  <ul className="flex flex-row items-center gap-9 pr-5">
                    <ul className="flex flex-col items-start gap-0.5 pr-4">
                        <li>
                            <p className="text-white font-AndikaBold text-[16px]">About us</p>
                        </li>

                        <li>
                            <a onClick={() => navigate("/about")} className="text-white font-Andika text-[16px]">About</a>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">Features</p>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">News & Blogs</p>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start gap-0.5 pr-4 py-4">
                        <li>
                            <p className="text-white font-AndikaBold text-[16px]">Contact</p>
                        </li>

                        <li>
                            <a onClick={() => navigate("/about")} className="text-white font-Andika text-[16px]">Instagram</a>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">Twitter</p>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">Facebook</p>
                        </li>
                    </ul>

                    <ul className="flex flex-col items-start gap-0.5 pr-4 py-4">
                        <li>
                            <p className="text-white font-AndikaBold text-[16px]">Support</p>
                        </li>

                        <li>
                            <a onClick={() => navigate("/about")} className="text-white font-Andika text-[16px]">FAQs</a>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">Support Center</p>
                        </li>

                        <li>
                            <p className="text-white font-Andika text-[16px]">Feedback</p>
                        </li>
                    </ul>
                  </ul>
                </ul>
            </nav>
        </footer>
    )
}