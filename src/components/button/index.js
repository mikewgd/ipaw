/* eslint-disable */
import styled, { css, keyframes } from 'styled-components';

export const Button = styled.button`
  color: #fff;
  font-size: 24px;
  text-align: center;
  background-color: ${props => props.bgColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;

  &:active {
    position: relative;
    top: 2px;
    left: 2px;
  }

  span {
    position: relative;
    z-index: 1;
  }

  ${props =>
    props.both &&
    css`
      position: relative;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background-color: #1040d2;
        width: 50%;
        height: 100%;
      }
    `};
`;
