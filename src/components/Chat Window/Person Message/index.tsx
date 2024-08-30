import { Avatar } from '../../Avatar'
import './PersonMessage.scss'

export const PersonMessage = ({ message }: any) => {
    console.log(message)
    const personMessage = message.user.you ? `personMessage--my` : 'personMessage--other'
    const myMessage = message.user.you ? 'myMessageBody' : 'messageBody'
    return (
        <>
            <div className={personMessage}>
                <div className='messageAvatar'>
                    {!message.user.you && <Avatar src={message.user.avatar} size='sm' />}
                </div>
                <div>
                    {!message.user.you && <span className='personName'>{message.user.name} {message.user.surname}</span>}
                    <div className={myMessage}>
                        <span className='messageText'>
                            {message.message}
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}