
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import  { GlobalProvider } from './global/GlobalState.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import LogIn from './pages/LogIn/LogIn.jsx'
import HomepageNoUser from './pages/homepageNoUser/HomepageNoUser.jsx'




ReactDOM.createRoot(document.getElementById("root")).render(
    <>
    <BrowserRouter>
        <GlobalProvider>
            <App/>
        </GlobalProvider>
    </BrowserRouter>
     
    </>
)
