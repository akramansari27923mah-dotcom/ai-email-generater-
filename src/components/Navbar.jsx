import { useState } from "react";
import useAuth from "../features/hooks/useAuth";
import Profile from "./Profile";
import { useAuthCon } from "../features/authContext";
import { LogOut } from "lucide-react";
const Navbar = () => {

    const [profileShow, setProfileShow] = useState(false)

    const { logout } = useAuth()
    const { user } = useAuthCon()
    const handelLogout = () => {
        logout()
    }

    return (
        <div className="flex justify-between items-center px-6 py-3 
      bg-white/10 backdrop-blur-lg border-b border-white/20 
      shadow-md text-white relative">

            <h1 className="text-2xl font-bold tracking-wide 
        bg-gradient-to-r from-cyan-400 to-blue-500 
        bg-clip-text text-transparent cursor-pointer 
        hover:scale-105 transition duration-300">
                Email.io
            </h1>

            <div className="flex items-center gap-4">

                
                <div
                    onClick={() => setProfileShow(!profileShow)}
                    className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
          text-white font-bold cursor-pointer 
          hover:scale-110 transition duration-300">
                    {user?.username?.[0]?.toUpperCase() || "U"}
                </div>

            
                <button
                    onClick={handelLogout}
                    className="px-5 py-2 rounded-lg 
          bg-gradient-to-r from-red-500 to-pink-500 
          hover:scale-105 hover:shadow-lg 
          active:scale-95 
          transition duration-300 flex items-center gap-3">
                    <LogOut size={20} />
                    Logout
                </button>

            </div>

            {
                profileShow && (
                    <div className="absolute top-[50px] md:right-[140px]">
                        <Profile />
                    </div>
                )
            }
        </div>
    );
};

export default Navbar;