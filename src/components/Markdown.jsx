import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function EmailMarkdown({ content }) {
    return (
        <div className="prose max-w-none break-words text-black">

            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{

                    h1: ({ children }) => (
                        <h1 className="text-xl font-bold mb-2">{children}</h1>
                    ),

                    h2: ({ children }) => (
                        <h2 className="text-lg font-semibold mb-2">{children}</h2>
                    ),

                    p: ({ children }) => (
                        <p className="mb-2 leading-relaxed">{children}</p>
                    ),

                    li: ({ children }) => (
                        <li className="ml-4 list-disc">{children}</li>
                    ),

                    strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                    ),

                    em: ({ children }) => (
                        <em className="italic">{children}</em>
                    ),

                    a: ({ href, children }) => (
                        <a href={href} className="text-blue-600 underline">
                            {children}
                        </a>
                    ),

                }}
            >
                {content}
            </ReactMarkdown>

        </div>
    )
}