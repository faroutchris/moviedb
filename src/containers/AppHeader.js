import React from "react";
import {Header, HeaderLeft, Menu, MenuItem, MenuLink} from "../components/Layout";
import * as routes from "../constants/routes";
import poweredby from "../assets/poweredby.svg";
import { connect } from "react-redux";

const MenuLoggedOut = (props) => {
    return (
        <Menu>
            <MenuItem><MenuLink activeClassName="active" to={routes.LOG_IN}>Login</MenuLink></MenuItem>
            <MenuItem><MenuLink activeClassName="active" to={routes.SIGN_UP}>Signup</MenuLink></MenuItem>
            <MenuItem><img src={poweredby} height="48" /></MenuItem>
        </Menu>
    )
};

const MenuLoggedIn = (props) => {
    return (
        <Menu>
            <MenuItem>Discover</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Log out</MenuItem>
            <MenuItem><img src={poweredby} height="48" /></MenuItem>
        </Menu>
    )
};

const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)((props) => {
    return (
        <Header>
            <HeaderLeft>Scenema</HeaderLeft>
            {props.auth.isLoggedIn ? <MenuLoggedIn/> : <MenuLoggedOut/> }
        </Header>
    );
});