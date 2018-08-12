import React, {Component} from "react";
import {connect} from 'react-redux';
import {Row, Col} from '../components/Layout';
import {Heading1, Paragraph} from './../components/Typography';

class Account extends Component {
    render() {
        const {user} = this.props.auth;

        return (
            <div>
                <Row>
                    <Col>
                        <Heading1>My Account</Heading1>
                        <Paragraph>{user.email}</Paragraph>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {})(Account);