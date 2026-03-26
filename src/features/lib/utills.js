import axios from 'axios';
import { toast } from 'react-hot-toast'

export const api = axios.create({
    baseURL: 'https://ai-email-auth-api.onrender.com/api',
    withCredentials: true
})

export const showError = (msg) => {
    toast.error(msg)
}

export const showSuccess = (msg) => {
    toast.success(msg)
}