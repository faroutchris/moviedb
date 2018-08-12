import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {firebase} from '../api/firebase';
import * as routes from '../constants/routes';

const withAuth = (Comp) => {
    class WithAuth extends Component {

        componentWillMount() {
            firebase.auth.onAuthStateChanged(authUser => {
                if(!authUser) {
                    this.props.history.push(routes.LOG_IN);
                }
            })
        }

        render() {
            return this.props.isLoggedIn ? <Comp/> : null;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    return withRouter(connect(mapStateToProps)(WithAuth));
};

export default withAuth