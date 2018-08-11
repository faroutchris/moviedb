import React, {Component} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {actions } from './../reducers/auth';
import { Row, Col } from '../components/Layout';
import { Form, FormGroup, Input, InputLabel, ErrorLabel, FormBtn } from './../components/Forms';
import { Heading1 } from './../components/Typography';

const isLongEnough = length => string => string.length >= length;
const isEqualTo = fieldName => (string, state) => string === state[fieldName].value;
const isEmail = string => /\S+@\S+/.test(string);

class SignUp extends Component {
    self = this;

    state = {
        p1: {
            value: '',
            validate: isLongEnough(6),
            hasError: false,
            errorMessage: 'Password must be at least 8 characters.'
        },
        p2: {
            value: '',
            validate: isEqualTo('p1'),
            hasError: false,
            errorMessage: 'Password fields must match.'
        },
        email: {
            value: '',
            validate: isEmail,
            hasError: false,
            errorMessage: 'This is not a valid email address.'
        }
    };

    isValid = (state) => {
        const stateKeys = Object.keys(state);
        const validation = stateKeys
            .map( key => state[key].validate(state[key].value, state) );

        const isValid = validation.every( value => value === true);

        if(isValid) {
            return true;
        } else {
            stateKeys.forEach((key, i) => {
                if(!validation[i]) {
                    const invalidKey = stateKeys[i];
                    this.setState(prevState => ({
                        ...prevState,
                        [invalidKey]: {
                            ...prevState[invalidKey],
                            hasError: true
                        }
                    }));
                }
            });
            return false;
        }
    };

    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.id;
        this.setState(prevState => ({
            ...prevState,
            [key]: {...prevState[key], value}
        }))
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.isValid(this.state)) {
            this.props.signupRequest(this.state.email.value, this.state.p1.value);
        }
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <Row>
                    <Heading1>Sign Up</Heading1>
                </Row>
                <Row>
                {this.props.auth.error !== null
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
                                value={this.state['email'].value}
                                onChange={this.handleChange}
                                hasError={this.state['email'].hasError}
                                type="text" id="email" placeholder="myname@email.com"/>
                            {this.state['email'].hasError
                                ? <ErrorLabel>{this.state['email'].errorMessage}</ErrorLabel>
                                : null
                            }
                        </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Col>
                                <InputLabel htmlFor="p1">Password</InputLabel>
                                <Input
                                    value={this.state['p1'].value}
                                    onChange={this.handleChange}
                                    hasError={this.state['p1'].hasError}
                                    type="password" id="p1" placeholder="****"/>
                                {this.state['p1'].hasError
                                    ? <ErrorLabel>{this.state['p1'].errorMessage}</ErrorLabel>
                                    : null
                                }
                            </Col>
                            <Col>
                                <InputLabel htmlFor="p2">Retype Password</InputLabel>
                                <Input
                                    value={this.state['p2'].value}
                                    onChange={this.handleChange}
                                    hasError={this.state['p2'].hasError}
                                    type="password" id="p2" placeholder="****"/>
                                {this.state['p2'].hasError
                                    ? <ErrorLabel>{this.state['p2'].errorMessage}</ErrorLabel>
                                    : null
                                }
                            </Col>
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormBtn type="submit">
                            {this.props.auth.isLoading ? 'Loading' : 'Submit' }
                        </FormBtn>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
