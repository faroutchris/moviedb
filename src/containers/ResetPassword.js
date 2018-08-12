import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actions } from './../reducers/auth';
import { Row, Col } from '../components/Layout';
import { Form, FormGroup, Input, InputLabel, ErrorLabel, FormBtn } from './../components/Forms';
import { Heading1, Paragraph } from './../components/Typography';
import {Link} from "react-router-dom";
import * as routes from "../constants/routes";

class Login extends Component {
    self = this;

    state = {
        email: ''
    };

    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.id;
        this.setState({[key]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.resetPasswordRequest(this.state.email);
    };

    render() {
        return (
            <div>
                <Row>
                    <Heading1>Reset your password</Heading1>
                </Row>
                <Row>
                    {this.props.auth.error !== null && this.props.auth.error.code
                        ? <ErrorLabel>{this.props.auth.error.message}</ErrorLabel>
                        : null
                    }
                </Row>
                <Row>
                    {this.props.auth.passwordResetSent
                        ? <InputLabel>A new password has been sent to your email.</InputLabel>
                        : null
                    }
                </Row>
                <Form action="#" onSubmit={this.handleSubmit}>
                    <Row>
                        <FormGroup>
                            <Col>
                                <InputLabel htmlFor="email">Email</InputLabel>
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    type="text" id="email" placeholder="myname@email.com"/>
                            </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormBtn type="submit" disabled={!this.state.email}>
                                {this.props.auth.isLoading ? 'Loading' : 'Reset' }
                            </FormBtn>
                        </Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({auth: state.auth});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
