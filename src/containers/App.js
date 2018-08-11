import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import * as routes from './../constants/routes';
import AppLayout from "../components/AppLayout";
import SignUp from './SignUp';

class App extends Component {
    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route exact path={routes.SIGN_UP} component={SignUp} />
                </Switch>
            </AppLayout>
        );
    }
}

export default App;