import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/layouts/headers/Header";
import Footer from "./components/layouts/footers/Footer";
import { Provider } from 'react-redux';
import {configureStore} from "./store";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Header/>
                <Route path="/" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);