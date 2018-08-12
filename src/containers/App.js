import React, { Component } from 'react';
import {
    Switch,
    Route,
    withRouter,
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {firebase} from "../api/firebase";
import * as routes from './../constants/routes';
import withAuth from './withAuthHOC';
import {actions} from './../reducers/auth';


import AppLayout from "../components/AppLayout";
import SignUp from './SignUp';
import Login from './LogIn';
import Discover from './Discover';
import connect from "react-redux/es/connect/connect";

class App extends Component {

    componentWillMount() {
        this.unsubscribe = firebase.auth.onAuthStateChanged(authUser => {
            if(authUser && this.props.auth.isLoggedIn === false) {
                this.props.autoLoginRequest(authUser);
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route exact path={routes.LANDING} component={withAuth(Discover)} />
                    <Route exact path={routes.SIGN_UP} component={SignUp} />
                    <Route exact path={routes.LOG_IN} component={Login} />
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
