import styled, { css, keyframes } from "styled-components";
import { Overlay } from "../styles";
import { Button } from "../button";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled(Overlay)``;

export const GameButton = styled(Button)`
  transform: translateX(100%);
  opacity: 0;
  animation: ${slideIn} 0.5s ${props => props.delay} forwards ease-in-out;
  padding: 50px 0;
  margin-bottom: 20px;

  @media (orientation: landscape) {
    margin: 0;
    padding: 100px 0;
  }
`;

export const Instruction = styled.p`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  animation: ${fadeIn} 1s forwards ease-in-out;
  margin: 0 0 30px 0;

  @media (orientation: landscape) {
    grid-column: 1 / span 3;
  }
`;
