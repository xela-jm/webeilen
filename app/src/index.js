import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/layouts/headers/Header";
import Footer from "./components/layouts/footers/Footer";
import { Provider } from 'react-redux';
import {configureStore} from "./store";

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Header/>
            <div>Body</div>
            <Footer/>
        </div>
    </Provider>,
    document.getElementById('root')
);