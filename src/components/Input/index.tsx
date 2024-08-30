import { useState } from "react";
import './Input.scss'

export const Input = () => {
    const [text, setText] = useState('');

    const handleChange = (event: any) => {
        setText(event.target.value);
    };
    return (
        <>
            <div className="input">
                <div
                    className="input-area"
                    contentEditable
                    suppressContentEditableWarning
                    onKeyDown={handleChange}
                >
                    {text}
                </div>
                <div className="input-buttons">
                    <button className="input-button">
                        <img src="/AttachIcon.svg" />
                    </button>
                    <button className="input-button">
                        <img src="/SendIcon.svg" />
                    </button>
                </div>
            </div>
        </>
    )
}