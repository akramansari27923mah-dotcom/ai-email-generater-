import { Loader, Send } from "lucide-react"
import { usePrompt } from "../context/Prompt.context"
import aiResponse from "../services/apiAi"
import { useState } from "react"
const Input = () => {

    const { loader, setLoader, setReply } = usePrompt()
    const [prompt, setPrompt] = useState('')
    const [type, setType] = useState('')
    const [tone, setTone] = useState('')
    const [recipt, setRecipt] = useState('')
    const [length, setLendth] = useState('')
    const [language, setLanguage] = useState('English')

    const sendPrompt = async () => {
        setLoader(true)
        setPrompt('')
        try {
            const res = await aiResponse(prompt, type, recipt, tone, length, language)
            console.log(res);

            const replyData = res?.data?.reply
            setReply(replyData)
            localStorage.setItem('reply', JSON.stringify(replyData))
        }
        catch (err) {
            console.log('Api faileds');
        }
        finally {
            setLoader(false)
        }
    }

    const keyDownHandel = (e) => {
        if (e?.key === 'Enter' && !e?.shiftkey) {
            e.preventDefault()
            sendPrompt()
        }
    }

    return (
        <div className='flex justify-center items-center flex-col gap-4 w-full'>

            <div className="text-center grid md:grid-cols-3 grid-cols-2 gap-5 items-center justify-centertext-gray-400">
                <div>
                    <h1 className="font-semibold">Email type</h1>
                    <select
                        value={type}
                        className="p-2 rounded-lg bg-black/30 text-white border border-white/20"
                        onChange={(e) => setType(e.target.value)}>
                        <option>Job Application</option>
                        <option>Leave Request</option>
                        <option>Business Proposal</option>
                        <option>Meeting Request</option>
                        <option>Follow Up</option>
                        <option>Complaint</option>
                        <option>Casual Email</option>
                    </select>
                </div>

                <div>
                    <h1 className="font-semibold">
                        Tone
                    </h1>
                    <select
                        className="p-2 rounded-lg bg-black/30 text-white border border-white/20"
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}>
                        <option>Formal</option>
                        <option>Professional</option>
                        <option>Friendly</option>
                        <option>Casual</option>
                    </select>
                </div>

                <div>
                    <h1 className="font-semibold">
                        Length
                    </h1>
                    <select
                        className="p-2 rounded-lg bg-black/30 text-white border border-white/20"
                        value={length}
                        onChange={(e) => setLendth(e.target.value)}>
                        <option>short</option>
                        <option>long</option>
                        <option>medium</option>
                    </select>
                </div>

                <div>
                    <h1 className="font-semibold">
                        Language
                    </h1>
                    <select
                        className="p-2 rounded-lg bg-black/30 text-white border border-white/20"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hinglish">Hinglish</option>
                        <option value="Urdu">Urdu</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Bengali">Bengali</option>
                    </select>
                </div>

                <div>
                    <div className="w-full max-w-md mx-auto">
                        <label className="block mb-2 text-sm font-semibold text-gray-700">
                            Recipient
                        </label>

                        <div className="relative">
                            <input
                                list="Recipt"
                                onChange={(e) => setRecipt(e.target.value)}
                                type="text"
                                value={recipt}
                                placeholder="Select or type recipient..."
                                className="w-full p-3 rounded-xl border border-gray-300 
      focus:outline-none focus:ring-2 focus:ring-blue-500 
      focus:border-blue-500 transition duration-200 
      shadow-sm hover:shadow-md"
                            />

                            <span className="absolute right-3 top-3 text-gray-400">
                                👤
                            </span>
                        </div>

                        <datalist id="Recipt">
                            <option value="HR" />
                            <option value="Manager" />
                            <option value="Client" />
                            <option value="Team Lead" />
                            <option value="Hiring Manager" />
                            <option value="Support Team" />
                            <option value="Project Manager" />
                            <option value="CEO" />
                        </datalist>

                        <p className="text-xs text-gray-500 mt-1">
                            You can type your own or select from suggestions
                        </p>
                    </div>
                </div>
            </div>


            <div className="md:w-8/12 relative w-full">
                <textarea
                    className='w-full border border-gray-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-300 p-4 pr-12 outline-none rounded-xl resize-none transition-all duration-300 shadow-sm'
                    rows={3}
                    placeholder='Type your prompt...'
                    value={prompt}
                    onChange={(e) => {
                        setPrompt(e.target.value)
                    }}
                    onKeyDown={keyDownHandel}
                />

                <button
                    onClick={sendPrompt}
                    disabled={!prompt.trim() || loader}
                    className="absolute bottom-3 right-3 flex items-center justify-center 
            bg-gradient-to-r from-cyan-400 to-blue-500 
            hover:scale-105 active:scale-95
            disabled:opacity-50 disabled:cursor-not-allowed
            text-white p-3 rounded-full shadow-md transition-all duration-200"
                >
                    {
                        loader ?
                            <Loader className="animate-spin" size={18} /> :
                            <Send size={18} />
                    }
                </button>
            </div>

            {
                loader && (
                    <p className="text-sm text-gray-500 animate-pulse">
                        Generating response...
                    </p>
                )
            }

        </div>
    )
}

export default Input