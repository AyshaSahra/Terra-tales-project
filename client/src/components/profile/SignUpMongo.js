import assets from "../../constants/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FireBase/firebaseConfig";

export default function SignUp() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            // Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username });

            // Send user data to MongoDB using Axios
            await axios.post("http://localhost:5000/register", {
                username,
                email,
                password, // The backend will hash this
                firebaseUID: userCredential.user.uid,
            });

            navigate("/login"); // Redirect after signup
        } catch (error) {
            setError(error.response?.data?.error || error.message);
        }
    };

    return (
        <div className="w-full h-screen profile-background flex justify-end">
            <div className="flex flex-col bg-transparent glass-effect w-1/2 h-full rounded-l-[35px] p-12 justify-center items-center">
                <p className="font-Pottaone text-[34px] text-white">Sign up</p>

                <div className="w-full h-fit px-[85px] pt-3 flex flex-col gap-[10px]">
                    <div className="w-full h-fit px-4">
                        <p className="font-McLaren text-base text-white py-2">User Name:</p>
                        <input
                            type="text"
                            placeholder="Username..."
                            className="p-3 py-2 text-xs font-mono rounded-lg w-full focus:outline-none"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

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

                    <div className="w-full h-fit px-4">
                        <p className="font-McLaren text-base text-white py-2">Confirm password:</p>
                        <input
                            type="password"
                            placeholder="Confirm password..."
                            className="p-3 py-2 text-sm font-mono rounded-lg w-full focus:outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                {error && <p className="text-red-500 text-sm pt-2">{error}</p>}

                <div className="w-full flex justify-center pt-5">
                    <button
                        className="bg-white text-black font-Andika font-semibold content-center text-base w-fit rounded-full px-8 py-2 pt-1"
                        onClick={handleSignUp}
                    >
                        Sign up
                    </button>
                </div>

                <p className="text-white font-McLaren text-xs pt-[15px]">
                    Already have an account?{" "}
                    <a
                        onClick={() => navigate("/login")}
                        className="underline font-bold cursor-pointer"
                    >
                        Login
                    </a>
                </p>

                <p className="text-white font-McLaren text-base pt-[15px]">Or sign up with</p>
                <button className="font-Ubuntu text-base bg-white flex flex-row items-center justify-center p-1 rounded-[10px] my-2 px-3 pt-1">
                    <img src={assets.google_icon} className="w-[32px] h-[32px]" alt="Google Logo" />{" "}
                    <p className="px-1">Google</p>
                </button>
            </div>
        </div>
    );
}
