import React from 'react';
import { PageIndex } from "./pages/index";
import { ChatItemList } from './components/Chat Item List';
import './App.css'

function App() {
  const screenWidth = window.innerWidth
  console.log('ШИРИНА ', screenWidth)
  return (
    <div className="App">
      {screenWidth < 700 ? (
        <div>
          ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ
          ТЕЛЕФОНОВ
          У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
        </div>
      ) : (
        <>
          <ChatItemList />
          <PageIndex title='grand' />
        </>
      )
      }

    </div >
  );
}

export default App;
