import { useState } from "react"
import { NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Sign = () => {

    const { register } = useAuth()

    const model = {
        username: '',
        email: '',
        password: ''
    }
    const [formData, setFormData] = useState(model)

    const handelInput = (e) => {
        const input = e.target
        const value = input.value
        const name = input.name

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        register(formData)
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-500">

            <form
                className="w-[350px] p-8 rounded-2xl  bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl text-white"
                onSubmit={handelSubmit}
            >

                <h2 className="text-2xl font-bold text-center mb-6">
                    Sign Up
                </h2>

                {/* Name */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        onChange={handelInput}
                        name="username"
                        className="w-full p-3 rounded-lg 
            bg-white/20 text-white 
            placeholder-gray-300 
            outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handelInput}
                        name="email"
                        className="w-full p-3 rounded-lg 
            bg-white/20 text-white 
            placeholder-gray-300 
            outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <input
                        type="password"
                        onChange={handelInput}
                        name="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg 
            bg-white/20 text-white 
            placeholder-gray-300 
            outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Button */}
                <button className="w-full py-3 rounded-lg 
          bg-gradient-to-r from-cyan-400 to-blue-600 
          hover:scale-105 transition duration-300">
                    Create Account
                </button>

                {/* Footer */}
                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}
                    <NavLink to={'/login'} className="text-cyan-300 cursor-pointer">
                        Login
                    </NavLink>
                </p>

            </form>

        </div >
    )
}

export default Sign