import styled from "styled-components";
import {colors} from "./../constants/theme";

export const Heading = styled.h1`
    font-weight: 600;
    line-height: 1.4;
    color: ${colors.text.hex};
`;

export const Heading1 = Heading.withComponent('h1').extend`
    font-size: 2.5rem;
`;

export const Heading2 = Heading.withComponent('h2').extend`
    font-size: 2rem;
`;

export const Heading3 = Heading.withComponent('h3').extend`
    font-size: 1.6rem;
`;

export const Paragraph = styled.p`
    line-height: 1.6;
    color: ${colors.text.hex};
`;
