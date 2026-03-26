/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useContext, useEffect } from "react";

const PromptContext = createContext();

export const PromptProvider = ({ children }) => {

    const [reply, setReply] = useState('')
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        const res = (localStorage.getItem('reply'))
        console.log(JSON.parse(res));

        if (res && res !== 'undefind') {
            setReply(JSON.parse(res))
        }
    }, [])

    return (
        <PromptContext.Provider value={{ prompt, setLoader, loader, reply, setReply }}>
            {children}
        </PromptContext.Provider>
    )
}

export const usePrompt = () => useContext(PromptContext)