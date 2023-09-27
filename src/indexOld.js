import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = 'liam ronan'

let rows = []

for(let i = 0; i < 10; i++) {
  rows.push(<li>{i}</li>)
}

const myList = <ul>{ rows }</ul>

root.render(
  <React.StrictMode>
    <h1>Hello world</h1>
    <h2>{ name.toUpperCase() }</h2>
    { myList }
  </React.StrictMode>
);


