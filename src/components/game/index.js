// @flow
import React, { useContext } from 'react';
import { store } from '../../store';

import { Wrapper, EndButton, Choice } from './index.css';
import { Choices } from '../styles';

type Props = {
  show: boolean,
};

export const Game = ({ show = false }: Props) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const showYes = /yes/.test(state.game);
  const showNo = /no/.test(state.game);
  const soundYes = new Audio('https://ipaw.s3.amazonaws.com/Yes.mp3');
  const soundNo = new Audio('https://ipaw.s3.amazonaws.com/No.mp3');
  const endSession = () => {
    const end = window.confirm('Are you sure you want to end this session?');

    if (end) {
      dispatch({ type: 'UPDATE_GAME', payload: 'end' });
    }
  };

  return (
    <Wrapper show={show}>
      <Choices onlyOne={!(showYes && showNo)}>
        {showYes && (
          <Choice
            bgColor="#1040d2"
            delay="1s"
            onTouchStart={() => {
              dispatch({ type: 'UPDATE_YES_COUNT' });
              soundYes.play();
            }}
          >
            <span>YES</span>
          </Choice>
        )}
        {showNo && (
          <Choice
            bgColor="#f1e42d"
            delay="1.5s"
            onTouchStart={() => {
              dispatch({ type: 'UPDATE_NO_COUNT' });
              soundNo.play();
            }}
          >
            <span>NO</span>
          </Choice>
        )}

        <EndButton bgColor="#000" onTouchStart={endSession}>
          <span>END SESSION</span>
        </EndButton>
      </Choices>
    </Wrapper>
  );
};
