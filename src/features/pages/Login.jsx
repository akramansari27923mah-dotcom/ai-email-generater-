import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useAuthCon } from "../authContext";
import { Loader } from 'lucide-react'
const Login = () => {

    const { user, loader } = useAuthCon()
    const { login } = useAuth()

    const model = {
        email: '',
        password: ''
    }

    const [formData, setFormData] = useState(model)

    const handelInput = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        login(formData);
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-500">

            <form
                onSubmit={handelSubmit}
                className="w-[320px] p-8 rounded-2xl 
                bg-white/10 backdrop-blur-lg 
                border border-white/20 
                shadow-xl text-white"
            >

                <h2 className="text-2xl font-bold text-center mb-6">
                    Login
                </h2>

                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handelInput}
                        className="w-full p-3 rounded-lg 
                        bg-white/20 text-white 
                        placeholder-gray-300 
                        outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handelInput}
                        className="w-full p-3 rounded-lg 
                        bg-white/20 text-white 
                        placeholder-gray-300 
                        outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-lg 
                    bg-gradient-to-r from-cyan-400 to-blue-600 
                    hover:scale-105 transition duration-300 flex justify-center items-center"
                >
                    {loader ? <Loader className="animate-spin" /> : 'Login'}
                </button>

                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <NavLink to={'/sign'} className="text-cyan-300 cursor-pointer">
                        Sign up
                    </NavLink>
                </p>

            </form>

        </div>
    );
};

export default Login;