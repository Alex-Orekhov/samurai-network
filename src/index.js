import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: `It's my first post`, likesCount: 4}
];

let dialogs = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Greg'},
    {id: 3, name: 'Rick'},
    {id: 4, name: 'Sam'},
    {id: 5, name: 'Andrew'},
    {id: 6, name: 'Stan'},
];

let messages = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'What\'s up?'},
    {id: 3, text: 'I\'m learning React :)'},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
