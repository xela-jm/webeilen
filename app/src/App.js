import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AsyncHomePage} from "./util/AsyncRoutes";
import Header from "./components/layouts/headers/Header";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={AsyncHomePage}/>
                </Switch>
            </div>
        )
    }
}

export default App;