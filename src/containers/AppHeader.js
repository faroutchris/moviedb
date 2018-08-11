import React from "react";
import {Header, HeaderLeft, Menu, MenuItem} from "../components/Layout";
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";
import poweredby from "../assets/poweredby.svg";
import { connect } from "react-redux";

const MenuLoggedOut = (props) => {
    return (
        <Menu>
            <MenuItem><Link to={routes.LOG_IN}>Login</Link></MenuItem>
            <MenuItem><Link to={routes.SIGN_UP}>Signup</Link></MenuItem>
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