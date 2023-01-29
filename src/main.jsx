import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

import { App } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App/> */}
        {/* <FirstApp  title="madafakaaa" subTitle={ 123 }/> */}
        <CounterApp value={ 123 }/>
    </React.StrictMode>
);