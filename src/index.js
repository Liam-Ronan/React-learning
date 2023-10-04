import React from "react";
import ReactDOM from 'react-dom/client';
import Clicky from "./exampleFunctional/Clicky";
import CountDown from "./exampleFunctional/CountDown";
import LoginForm from "./exampleFunctional/LoginForm";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <LoginForm />
    </React.StrictMode>
);