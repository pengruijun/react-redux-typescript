import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, Store, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { IBooksReduxStore } from './type';
import { rootReducer } from './reducer';

const preloadedState : IBooksReduxStore = {
    books: [
        { 
            id: 0,
            title: "harry bolet",
            author: "unkonwn",
            price: 12
        },
        {
            id: 1,
            title: "asp.net core",
            author: "john sketch",
            price: 25
        },
    ],
    selectedId: -1,
}


export const store: Store<IBooksReduxStore> = createStore<IBooksReduxStore, any, any, any>(
    rootReducer, 
    preloadedState,
    applyMiddleware(thunk)
    );


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
