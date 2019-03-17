import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, Store } from 'redux';
import { IBooksReduxStore } from './type';
import { rootReducer } from './reducer';

const preloadedState : IBooksReduxStore = {
    books: [
        {
            title: "harry bolet",
            author: "unkonwn",
            price: 12
        },
        {
            title: "asp.net core",
            author: "john sketch",
            price: 25
        },
    ],
}


const store: Store<IBooksReduxStore> = createStore<IBooksReduxStore, any, any, any>(
    rootReducer, 
    preloadedState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
