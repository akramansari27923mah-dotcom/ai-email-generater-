
import { useAuthCon } from "../features/authContext";

const Profile = () => {
    const { user } = useAuthCon();

    return (
        <div className="flex justify-center items-center min-h-[300px]">

            <div className="w-[320px] p-6 rounded-2xl 
        bg-white/10 backdrop-blur-lg 
        border border-white/20 
        shadow-xl text-white">

                {/* Avatar */}
                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 flex items-center justify-center 
            rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 
            text-2xl font-bold">
                        {user?.username?.[0]?.toUpperCase() || "U"}
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-center mb-4 text-gray-500">
                    User Profile
                </h2>

                <div className="space-y-2 text-center">
                    <p className="text-sm text-gray-300">Email</p>
                    <h3 className="font-medium text-gray-500">{user?.email || "Not available"}</h3>

                    <p className="text-sm text-gray-300 mt-3">Username</p>
                    <h3 className="font-medium text-gray-500">{user?.username || "Not available"}</h3>
                </div>

            </div>

        </div>
    );
};

export default Profile;