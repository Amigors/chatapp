import { PersonMessage } from "./Person Message"
import { useRequest } from "../../context/RequestContext";

import './ChatWindow.scss'

export const ChatWindow = () => {
    const { data } = useRequest();

    return (
        <>
            <div className="chatWindow">
                {data?.map((message: any) => {
                    return (
                        <PersonMessage key={message.id} message={message} />
                    )
                })}
            </div>
        </>
    )
}