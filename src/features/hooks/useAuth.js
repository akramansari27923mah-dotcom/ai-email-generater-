import { handelLogin, handelRegister, handelUser, handelLogout } from "../api/authApi"
import { useAuthCon } from "../authContext"
import { showSuccess } from "../lib/utills"

const useAuth = () => {

    const { setUser, setLoader } = useAuthCon()

    const login = async (text) => {
        setLoader(true);
        try {
            const res = await handelLogin(text);
            localStorage.setItem('user', JSON.stringify(res?.user))
            localStorage.setItem('token', res?.token)
            setTimeout(() => {
                window.location.href = '/'
            }, 1000);
            showSuccess('Login successfully')
        }
        catch (err) {
            alert("Login failed");
        }
        finally {
            setLoader(false);
        }
    }

    const logout = async () => {
        try {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setUser(null)
            setTimeout(() => {
                window.location.href = '/login'
            }, 1000)
            showSuccess('Logout successfully')
        }
        catch (err) {
            console.log('Logout error', err);
            alert('Logout faileds')
        }
    }

    const register = async (text) => {
        setLoader(true);
        try {
            const res = await handelRegister(text);
            setUser(res.user);
            localStorage.setItem('token', res.token)
            window.location.href = '/login'
            showSuccess('Register successfully')
        }
        catch (err) {
            alert("Sign failed");
        }
        finally {
            setLoader(false);
        }
    }

    return {
        login,
        logout,
        register
    }

}

export default useAuth