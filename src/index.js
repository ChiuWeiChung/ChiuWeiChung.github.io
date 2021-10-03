import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { HashRouter } from 'react-router-dom'
import './index.css';

// redux configuration
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk'
import reducers from './store/reducers/index';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.querySelector('#root'))