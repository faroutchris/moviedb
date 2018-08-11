import React, {Component} from "react";
import {Header, HeaderLeft, Layout, Menu, MenuItem, Part, Row, Scrollable, Wrapper} from "./Layout";
import poweredby from "../assets/poweredby.svg";

class AppLayout extends Component {
    render() {
        return (
            <Wrapper>
                <Layout>
                    <Part flex={'0 1 auto'}>
                        <Header>
                            <HeaderLeft>Scenema</HeaderLeft>
                            <Menu>
                                <MenuItem>Discover</MenuItem>
                                <MenuItem>Login</MenuItem>
                                <MenuItem>Signup</MenuItem>
                                <MenuItem><img src={poweredby} height="48" /></MenuItem>
                            </Menu>
                        </Header>
                    </Part>
                    <Part>
                        <Scrollable>
                            {this.props.children}
                        </Scrollable>
                    </Part>
                    <Part flex={'0 1 auto'}>
                        <Row>
                            Footer
                        </Row>
                    </Part>
                </Layout>
            </Wrapper>
        );
    }
}

export default AppLayout;
