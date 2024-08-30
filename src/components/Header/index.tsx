import './Header.scss'

export const Header = () => {
    const title = localStorage.getItem('chatTitle')
    return (
        <>
            <div className="header">
                <img style={{ width: '20px', height: '20px' }} src='/DialogIcon.svg' />
                <span className='headerTitle'>
                    {title}
                </span>
            </div>
        </>
    )
}