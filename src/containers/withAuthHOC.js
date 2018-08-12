import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {firebase} from '../api/firebase';
import * as routes from '../constants/routes';

const withAuth = (Comp) => {
    class WithAuth extends Component {
        componentWillMount() {
            this.unsubscribe = firebase.auth.onAuthStateChanged(authUser => {
                if(!authUser && this.props.auth.isLoggedIn === false) {
                    this.props.history.push(routes.LOG_IN);
                }
            });
        }

        componentWillUnmount() {
            this.unsubscribe();
        }

        render() {
            return this.props.auth.isLoggedIn ? <Comp/> : null;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    return withRouter(connect(mapStateToProps, {})(WithAuth));
};

export default withAuth