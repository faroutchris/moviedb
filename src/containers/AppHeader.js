import React from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {Header, HeaderLeft, Menu, MenuItem, MenuLink, MenuBtn, MenuBtn2} from "../components/Layout";
import * as routes from "../constants/routes";
import poweredby from "../assets/poweredby.svg";
import {actions} from "../reducers/auth";

const MenuLoggedOut = () => {
    return (
        <Menu>
            <MenuItem><MenuLink activeClassName="active" to={routes.LOG_IN}>Login</MenuLink></MenuItem>
            <MenuItem><MenuLink activeClassName="active" to={routes.SIGN_UP}>Signup</MenuLink></MenuItem>
            <MenuItem><img alt="Powered by The Movie Database" src={poweredby} height="48" /></MenuItem>
        </Menu>
    )
};

const MenuLoggedIn = (props) => {
    return (
        <Menu>
            <MenuItem>Discover</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem><MenuBtn onClick={props.signout}>Sign out</MenuBtn></MenuItem>
            <MenuItem><img alt="Powered by The Movie Database" src={poweredby} height="48" /></MenuItem>
        </Menu>
    )
};

function AppHeader(props) {
    return (
        <Header>
            <HeaderLeft><MenuBtn2 to={routes.LANDING}>Scenema</MenuBtn2></HeaderLeft>
            {props.auth.isLoggedIn ? <MenuLoggedIn signout={props.signout}/> : <MenuLoggedOut/>}
        </Header>
    );
}

const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(actions.signout()),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AppHeader)
);