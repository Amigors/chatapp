import { useEffect, useState } from "react"
import { getChatMessages } from "../api/chat"

export const useChatData = (id: any) => {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const fetchMessages = async () => {
            const result = await getChatMessages(id)
            console.log('messages', result.response)
            setMessages(result.response)
        }
        fetchMessages();
    })
    return { messages }
}