import { useRequest } from "../../../context/RequestContext";
import { Avatar } from "../../Avatar"
import './chatItem.scss'

type TRequest = {
    data?: any;
    fetchData?: any
};

export const ChatItem = ({ item }: any) => {
    const milliseconds = item.last_message.created_at * 1000;
    const dateObject = new Date(milliseconds)

    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes();

    const chatTitle = localStorage.getItem('chatTitle')
    const chatItem = chatTitle === item.title ? 'chatItemActive' : 'chatItem'

    const { data, fetchData } = useRequest();
    console.log('chat item', data)
    const handleClick = (item: any) => {
        console.log('click', item)
        fetchData(item.id);
        localStorage.clear()
        localStorage.setItem('chatTitle', item.title)
        localStorage.setItem('chatID', item.id)
    };

    return (
        <>
            <div className={chatItem} onClick={() => handleClick(item)}>
                <Avatar src={item.avatar} size="md" />
                <div>
                    <div className="chatItem-header">
                        <span className="chatItem-header--title">{item.title}</span>
                        <span className="chatItem-header--time">{hours}:{minutes}</span>
                    </div>
                    <div className="chatItem-message">{item.last_message.message}</div>
                </div>
            </div>
        </>
    )
}

