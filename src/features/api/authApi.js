import { api } from "../lib/utills";


// handel user login 
export const handelLogin = async (text) => {
    const response = await api.post('/auth/login', text);
    return response.data
}

// handel user logout
export const handelLogout = async (text) => {
    const response = await api.post('/auth/logout', text)
    return response.data
}

// handel user register
export const handelRegister = async (text) => {
    const response = await api.post('/auth/register', text);
    return response.data
}

// handel user get
export const handelUser = async (text) => {
    const response = await api.get('/auth/get-me', text)
    return response.data
}