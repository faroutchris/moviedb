import React, { Component } from 'react';
import {
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import * as routes from './../constants/routes';
import withAuth from './withAuthHOC';
import {actions} from './../reducers/auth';

import AppLayout from "../components/AppLayout";
import SignUp from './SignUp';
import Login from './LogIn';
import Discover from './Discover';
import Account from './Account';
import ResetPassword from './ResetPassword';

class App extends Component {

    componentWillMount() {
        this.props.autoLoginRequest(this.props.auth.isLoggedIn);
    }

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route exact path={routes.LANDING} component={withAuth(Discover)} />
                    <Route exact path={routes.ACCOUNT} component={withAuth(Account)} />
                    <Route exact path={routes.SIGN_UP} component={SignUp} />
                    <Route exact path={routes.LOG_IN} component={Login} />
                    <Route exact path={routes.RESET_PASSWORD} component={ResetPassword} />
                </Switch>
            </AppLayout>
        );
    }
}


const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
