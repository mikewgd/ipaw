import styled, { css, keyframes } from 'styled-components';
import { Overlay, Choices } from '../styles';
import { Button } from '../button';

export const Wrapper = styled(Overlay)`
  @media (orientation: landscape) {
    transform: translateY(${props => (props.show ? '0%' : '-100%')});

    ${Choices} {
      grid-template-columns: 1fr 1fr;
      height: 100%;
    }
  }
`;

export const Choice = styled(Button)`
  font-size: 40px;
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 20px;

  @media (orientation: landscape) {
    padding: 0;
    height: 75vh;
    margin: 0;
    width: auto;
  }
`;

export const EndButton = styled(Button)`
  font-size: 16px;
  padding: 20px 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;

  &:active {
    position: absolute;
    top: auto;
    left: 0;
  }

  @media (orientation: landscape) {
    position: static;
    grid-column: 1 / span 2;
    margin: 0;
    grid-row: 1;
    padding-bottom: 0;

    &:active {
      position: static;
    }
  }
`;
