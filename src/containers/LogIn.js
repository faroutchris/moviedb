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
        password: '',
        email: ''
    };

    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.id;
        this.setState({[key]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if(!!this.state.email && !!this.state.password) {
            this.props.loginRequest(this.state.email, this.state.password);
        }
    };

    render() {
        return (
            <div>
                <Row>
                    <Heading1>Log in</Heading1>
                </Row>
                <Row>
                    {this.props.auth.error !== null && this.props.auth.error.code
                        ? <ErrorLabel>{this.props.auth.error.message}</ErrorLabel>
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
                        <FormGroup>
                            <Col>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password" id="password" placeholder="****"/>
                            </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <Col>
                            <FormBtn type="submit" disabled={!this.state.email || !this.state.password}>
                                {this.props.auth.isLoading ? 'Loading' : 'Log in' }
                            </FormBtn>
                            <Paragraph>Don't have an account yet? <Link to={routes.SIGN_UP}>Sign up here!</Link></Paragraph>
                            <Link to={routes.RESET_PASSWORD}>Forgot your password?</Link>
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
