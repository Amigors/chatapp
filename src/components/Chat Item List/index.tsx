import { useEffect, useState } from "react"
import { ChatItem } from "./Chat Item"
import './chatItemList.scss'
import { wrapper } from "../../utils/wrapper"
import { getChatList } from "../../api/chat"

export const ChatItemList = () => {
    const [chats, setChats] = useState([])
    useEffect(() => {
        const fetchingData = async () => {
            const result = await getChatList()
            if (result.response) {
                setChats(() => result.response)
            }
        }
        fetchingData()
    }, [])
    return (
        <>
            <div className="chatItemList">
                <h2 className="chatItemList-title">All chats</h2>
                <div className="chatList">
                    {chats.map((item: any) => {
                        return <ChatItem key={item.id} item={item} />
                    })
                    }
                </div>
            </div>
        </>
    )
}

