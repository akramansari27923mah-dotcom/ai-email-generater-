import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './features/authContext.jsx'
import { PromptProvider } from './context/Prompt.context.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <PromptProvider>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  </PromptProvider>
)
