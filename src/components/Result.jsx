import { usePrompt } from '../context/Prompt.context'
import { Loader, Trash } from 'lucide-react';
import EmailMarkdown from "./Markdown"

const Result = () => {

    const { reply, loader, setReply } = usePrompt()

    const deleteContent = () => {
        localStorage.removeItem('reply')
        setReply('')
    }

    return (
        <div className='flex justify-center w-full md:h-[550px] h-[400px] md:my-4 overflow-hidden'>


            <div className='md:w-8/12 bg-white shadow-lg rounded-xl p-5 min-h-[120px] transition-all duration-300 border border-gray-200 overflow-y-scroll hide'>

                {
                    !reply || !loader && (
                        <div title='Clean' onClick={deleteContent} className='flex justify-end items-center' >
                            <Trash color='red' className='cursor-pointer hover:scale-110 duration-300 transition-all' />
                        </div>
                    )
                }

                {
                    loader && (
                        <div className='flex items-center gap-3 text-gray-500 animate-pulse'>
                            <Loader className='animate-spin' size={22} />
                            <span>AI is thinking...</span>
                        </div>
                    )
                }

                {
                    !loader && reply && (
                        <div className='text-gray-800 leading-relaxed whitespace-pre-wrap animate-fadeIn'>
                            <EmailMarkdown content={reply} />
                        </div>
                    )
                }

                {
                    !loader && !reply && (
                        <p className='text-gray-400 text-sm text-center'>
                            Your AI response will appear here...
                        </p>
                    )
                }


            </div>

        </div>
    )
}

export default Result