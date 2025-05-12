import { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });
    
            // ✅ Handle non-OK responses properly
            const data = await response.json();
    
            if (!response.ok) {
                setMessage(data.message || "Subscription failed");
            } else {
                setMessage(data.message || "Subscribed successfully!");
                setEmail("");
            }
    
        } catch (error) {
            console.error("❌ Subscription error:", error);
            setMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col place-items-center gap-1">
                    <p className="text-white text-xl font-Ubuntu font-bold text-center mb-3">
                    Subscribe to our Newsletter
                    </p>
                
                    <div className="flex flex-row place-items-center gap-0.5">
                    <input
                    type="email"
                    className="p-1 rounded-lg pl-5 text-black focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button type="submit" className="text-white px-4 bg-red-600 font-Andika font-semibold text-base py-0.5 rounded-lg">Subscribe</button>
                    </div>
                </div>
            </form>
            {message && <p className="text-center pt-1 text-white text-xs font-Ubuntu">{message}</p>}
        </div>
    );
};

export default Newsletter;
