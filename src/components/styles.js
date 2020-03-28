import styled, { createGlobalStyle, css } from 'styled-components';
import { Button } from './button';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    background: #000;
    color: #fff;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  display: grid;
  overflow: hidden;
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  display: grid;
  transform: translateX(${props => (props.show ? '0%' : '100%')});
  transition: transform 0.25s ease-in;
  ${'' /* opacity: ${props => (props.show ? 1 : 0)}; */}
`;

export const Choices = styled.div`
  align-self: center;
  text-align: center;
  display: grid;

  ${Button} {
    ${props =>
      props.onlyOne &&
      css`
        grid-column: 1 / span 2;
      `};
  }

  @media (orientation: landscape) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
`;
