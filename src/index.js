import React from "react";
import ReactDOM from 'react-dom/client';
import Clicky from "./exampleFunctional/Clicky";
import CountDown from "./exampleFunctional/CountDown";
import LoginForm from "./exampleFunctional/LoginForm";
import MultipleForm from "./exampleFunctional/MultipleForm";
import ActivityForm from "./exampleFunctional/ActivityForm";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <ActivityForm />
    </React.StrictMode>
);