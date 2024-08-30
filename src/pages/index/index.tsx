import React, { FC } from "react";
import { IPage } from "../../interface/page";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ChatWindow } from "../../components/Chat Window";

export const PageIndex: FC<IPage> = (props: IPage) => {
    const { title } = props;
    return (
        <>
            <div className="message ">
                <Header />
                <ChatWindow />
                <Input />
            </div>
        </>
    )
}