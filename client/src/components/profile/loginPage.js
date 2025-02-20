import assets from "../../constants/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FireBase/firebaseConfig";

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/"); // Redirect after successful login
        } catch (error) {
            setError("Invalid email or password. Please try again.");
        }
    };

    return (
        <div className="w-full h-screen profile-background flex justify-end">
            <div className="flex flex-col bg-transparent glass-effect w-1/2 h-full rounded-l-[35px] p-12 justify-center items-center">
                <p className="font-Pottaone text-[34px] text-white">Login</p>
                <div className="w-full h-fit px-[85px] pt-5 flex flex-col gap-[10px]">
                    <div className="w-full h-fit px-4">
                        <p className="font-McLaren text-base text-white py-2">Email address:</p>
                        <input
                            type="email"
                            placeholder="Email address..."
                            className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-full h-fit px-4">
                        <p className="font-McLaren text-base text-white py-2">Password:</p>
                        <input
                            type="password"
                            placeholder="Password..."
                            className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm pt-2">{error}</p>}

                <div className="w-full flex justify-center pt-5">
                    <button
                        className="bg-white text-black font-Andika font-semibold content-center text-base w-fit rounded-full px-8 py-2 pt-1"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>

                <p className="text-white font-McLaren text-xs pt-[15px]">
                    Don't have an account?{" "}
                    <a
                        onClick={() => navigate("/SignUp")}
                        className="underline font-bold cursor-pointer"
                    >
                        Sign up
                    </a>
                </p>

                <p className="text-white font-McLaren text-base pt-[20px]">Or sign in with</p>
                <button className="font-Ubuntu text-base bg-white flex flex-row items-center justify-center p-1 rounded-[10px] my-3 px-3 pt-1">
                    <img src={assets.google_icon} className="w-[32px] h-[32px]" alt="Google Logo" />{" "}
                    <p className="px-1">Google</p>
                </button>
            </div>
        </div>
    );
}
