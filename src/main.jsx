import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/output.css'
import { BrowserRouter } from 'react-router-dom'
import CntxBasket from './services/CntxBasket.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <CntxBasket>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CntxBasket>
    </>
)
