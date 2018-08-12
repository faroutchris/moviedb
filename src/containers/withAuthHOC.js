import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {auth, firebase} from '../api/firebase';
import * as routes from '../constants/routes';
import {actions} from './../reducers/auth';

const withAuth = (Comp) => {
    class WithAuth extends Component {
        componentWillMount() {
            firebase.auth.onAuthStateChanged(authUser => {

                if(authUser && this.props.auth.isLoggedIn === false) {
                    this.props.autoLoginRequest(authUser);
                }
                else if(!authUser && this.props.auth.isLoggedIn === false) {
                    this.props.history.push(routes.LOG_IN);
                }

            });
        }

        render() {
            return this.props.isLoggedIn ? <Comp/> : null;
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });

    const mapDispatchToProps = dispatch => ({
        ...bindActionCreators(actions, dispatch)
    });

    return withRouter(connect(mapStateToProps, mapDispatchToProps)(WithAuth));
};

export default withAuth