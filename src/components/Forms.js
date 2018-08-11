import styled, {css} from "styled-components";
import {colors} from "./../constants/theme";

export const Form = styled.form`
    display: block;
    width: 100%;
    margin: 0 0 1.5rem;
`;

export const FormGroup = styled.div`
    display: flex;
    flex: 1;
    margin: 0 0 1rem;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0 0;
    font-family: 'Karla', sans-serif;
    font-size: 13px;
    border: ${props => props.hasError ? `1px solid rgba(${colors.error.rgb}, 0.8)` : `1px solid rgba(${colors.secondary.rgb}, 0.05)`};
`;

export const InputLabel = styled.label`
    display: inline-block;
    padding: 0 0.5rem 0.5rem;
    font-size: 14px;
`;

export const ErrorLabel = InputLabel.withComponent('span').extend`
    color: ${colors.error.hex};
`;

export const FormBtn = styled.button`
    padding: 0.5rem 1rem;
    background: ${colors.secondary.hex};
    color: ${colors.white.hex};
    border: 0;
    border-radius: 3px;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    font-size: 13px;
`;