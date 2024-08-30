import React, { createContext, useContext, useState } from 'react';
import { getChatMessages } from '../api/chat';

type TRequest = {
    data?: any;
    fetchData?: any
};

// Создаем контекст
const RequestContext = createContext<TRequest | null>(null);

// Провайдер контекста
export const RequestProvider = ({ children }: any) => {
    const [data, setData] = useState(null);

    const fetchData = async (id: string) => {
        try {
            const result = await getChatMessages(id)
            setData(result.response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <RequestContext.Provider value={{ data, fetchData }}>
            {children}
        </RequestContext.Provider>
    );
};

// Кастомный хук для использования контекста
export const useRequest = () => {
    const context = useContext(RequestContext);

    if (!context) {
        throw Error('Попытка получить доступ вне провайдера');
    }

    return context;
};