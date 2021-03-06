import styled from "styled-components";
import {colors} from './../constants/theme';
import {NavLink, Link} from 'react-router-dom';

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Karla:400,700&subset=latin-ext');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 15px;
  }
  
  html {
    overflow: hidden;
    height: 100%;
  }
  
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    background: white
    color: ${colors.text.hex}
  }
  
  a {
    color: ${colors.text.hex};
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fafafa;
  overflow: hidden;
`;


export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
`;

export const Part = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: ${props => props.direction || "row"};
  flex: ${props => props.flex || 1};
  overflow: hidden;
`;

export const Row = styled.div`
  padding: 0 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  flex: ${props => props.flex || 1};
  margin-right: 0.75rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const Scrollable = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled.div`
    background-color: ${colors.secondary.hex};
    width: 100%;
    padding: 1.5rem 1.5rem;
    color: ${colors.white.hex};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  line-height: 1;
`;

export const MenuItem = styled.div`
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }  
`;

export const MenuLink = styled(NavLink)`
    position: relative;
    color: ${colors.white.hex};
    text-decoration: none;
    font-weight: bold;
    padding: 1rem 0;
    transition: color 0.125s ease-in;
    &:before {
        content: '';
        position: absolute;
        bottom: 0.65rem;
        display: block;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        background: ${colors.primary.hex};
        transition: all 0.125s ease-in;
    }
    &:hover {
        color: ${colors.primary.hex}
    }
    &.active {
        &:before {
            transform: scaleX(1);        
        }
        color: ${colors.primary.hex}
    }
`;

export const MenuBtn = MenuLink.withComponent('span').extend`
    cursor: pointer;
`;

export const MenuBtn2 = MenuLink.withComponent(Link);

export const HeaderLeft = styled.div`
`;

export const HeaderRight = styled.div`
`;
