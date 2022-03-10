import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { TiArrowDownOutline } from "react-icons/ti"

import './index.css';

function ScrollToBottomButton() {
  const handleScrollToBottom = () => {
      window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <div className="scroll-to-bottom-button">
      <button onClick={handleScrollToBottom}>
        <TiArrowDownOutline />
      </button>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <Navbar />
      <App />
      <Footer />
      <ScrollToBottomButton />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
