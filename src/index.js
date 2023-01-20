import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD6JELEB_kgBhPAp3EuKvV0T1xNTcYGcYc",
  authDomain: "login-ec946.firebaseapp.com",
  projectId: "login-ec946",
  storageBucket: "login-ec946.appspot.com",
  messagingSenderId: "261513001114",
  appId: "1:261513001114:web:67d5ca7ae1ba27c3ec4723"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
