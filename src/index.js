import React from "react";
import ReactDOM from 'react-dom/client';
import ModuleTitle from "./components/ModuleTitle";
import NameLength from "./components/NameLength";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ModuleTitle title='front-end development' />
        <NameLength />
    </React.StrictMode>
);