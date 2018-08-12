import styled from "styled-components";
import {colors} from './../constants/theme';
import {NavLink} from 'react-router-dom';
import React from "react";

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Karla:400,700&subset=latin-ext');

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Karla', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
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
  flex: 1;
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
    color: ${colors.white.hex};
    text-decoration: none;
    padding: 1rem 0;
    transition: color 0.125s ease-in;
    &:hover {
        color: ${colors.primary.hex}
    }
    &.active {
        color: ${colors.primary.hex}
        border-bottom: 1px solid ${colors.primary.hex}
    }
`;

export const MenuBtn = MenuLink.withComponent('span').extend`
    cursor: pointer;
`;

export const HeaderLeft = styled.div`
`;

export const HeaderRight = styled.div`
`;
