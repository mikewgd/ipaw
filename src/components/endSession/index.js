/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useContext } from 'react';
import { store } from '../../store';

import {
  Wrapper,
  StatContainer,
  Stat,
  Span,
  StatHeader,
  StatSubheader,
  PlayAgain,
} from './index.css';

export const EndSession = ({ show }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;

  return (
    <Wrapper show={show}>
      <StatContainer>
        <StatHeader>Stats🌟</StatHeader>
        <StatSubheader>Thank you for playing 😄</StatSubheader>
        <Stat>
          <Span color="#1040d2">YES</Span>
          was clicked
          <Span color="#1040d2">{state.yesCount}</Span>
          time(s)
        </Stat>
        <Stat>
          <Span color="#f1e42d">NO</Span>
          was clicked
          <Span color="#f1e42d">{state.noCount}</Span>
          time(s)
        </Stat>

        <PlayAgain onClick={() => dispatch({ type: 'RESET_GAME' })}>
          Want to play again? 👍
        </PlayAgain>
      </StatContainer>
    </Wrapper>
  );
};
