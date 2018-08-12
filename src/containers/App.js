import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import * as routes from './../constants/routes';
import AppLayout from "../components/AppLayout";
import SignUp from './SignUp';
import Login from './LogIn';

class App extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route exact path={routes.SIGN_UP} component={SignUp} />
                    <Route exact path={routes.LOG_IN} component={Login} />
                </Switch>
            </AppLayout>
        );
    }
}

export default App;