import React, {Component} from "react";
import {Layout, Part, Row, Scrollable, Wrapper} from "./Layout";
import AppHeader from '../containers/AppHeader';

class AppLayout extends Component {
    render() {
        return (
            <Wrapper>
                <Layout>
                    <Part flex={'0 1 auto'}>
                        <AppHeader/>
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
