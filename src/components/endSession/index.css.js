import styled, { css, keyframes } from 'styled-components';
import { Overlay, Choices } from '../styles';
import { Button } from '../button';

export const Wrapper = styled(Overlay)`
  @media (orientation: landscape) {
    transform: translateY(${props => (props.show ? '0%' : '-100%')});
  }
`;

export const StatContainer = styled.div`
  display: grid;
  margin: auto;
  text-align: center;
`;

export const Stat = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 12px 0;
`;

export const StatHeader = styled.h1`
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const StatSubheader = styled.p`
  margin: 0 0 20px 0;
`;

export const Span = styled.span`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 24px;
  margin: 0 12px;
`;

export const PlayAgain = styled.button`
  background: #000;
  color: #fff;
  padding: 15px;
  border: 1px solid #fff;
  font-size: 20px;
  margin-top: 20px;
`;
