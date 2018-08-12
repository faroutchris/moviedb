import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from '../components/Layout';
import {Heading1, Paragraph} from './../components/Typography';
import * as routes from './../constants/routes';

class Account extends Component {
    render() {
        const {user} = this.props.auth;

        return (
            <div>
                <Row>
                    <Col>
                        <Heading1>My Account</Heading1>
                        <Paragraph>{user.email}</Paragraph>
                        <Link to={routes.LANDING}>Change password</Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps, {})(Account);