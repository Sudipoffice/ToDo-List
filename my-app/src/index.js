import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const INFO = [
  { id: "todo-0", name: "Do Laundry", completed: true },
  { id: "todo-1", name: "Go to Market", completed: true },
  { id: "todo-2", name: "Pickup Parcel", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={INFO} />
  </React.StrictMode>,
  document.getElementById('root')
);