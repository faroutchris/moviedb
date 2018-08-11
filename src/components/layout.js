import styled from "styled-components";

const colors = {
  primary: {
    hex: '#01d277',
    rgb: '1, 210, 119'
  },
  secondary: {
    hex: '#081c24',
    rgb: '8, 28, 36'
  },
  text: {
    hex: '#333c4e',
    rgb: '51, 60, 78'
  }
}

export const globalStyles = `
  @import url('https://fonts.googleapis.com/css?family=Karla');

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
  padding: 1.5rem 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Scrollable = styled.div`
  overflow-y: auto;
  width: 100%;
`;

export const Header = styled.div`
    background-color: ${colors.secondary.hex};
    width: 100%;
    padding: 1.5rem 1.5rem;
    color: #fff;
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


export const HeaderLeft = styled.div`
`;

export const HeaderRight = styled.div`
`;
