import { wrapper } from "../../utils/wrapper";
import { URLS } from "../../constants/urls";
import { version } from "os";



export const getChatList = () => {
    return wrapper("get", URLS.LIST, { offset: 0, limit: 20, },)
}


export const getChatMessages = (chatId: string) => {
    return wrapper("get", URLS.MESSAGES, { chat_id: chatId, offset: 0, limit: 20 },)
}

