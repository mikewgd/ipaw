import React, { useContext } from 'react';
import { store } from '../../store';
import { Instruction, GameButton } from './index.css';
import { Choices } from '../styles';

export const StartSession = ({ show }) => {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  return (
    <>
      <Choices>
        <Instruction>Please select a game below:</Instruction>
        <GameButton
          bgColor="#f1e42d"
          both
          delay="1s"
          onTouchStart={() =>
            dispatch({ type: 'UPDATE_GAME', payload: 'yesno' })
          }
        >
          <span>YES or NO</span>
        </GameButton>
        <GameButton
          bgColor="#1040d2"
          delay="1.5s"
          onTouchStart={() => dispatch({ type: 'UPDATE_GAME', payload: 'yes' })}
        >
          <span>YES</span>
        </GameButton>
        <GameButton
          bgColor="#f1e42d"
          delay="2s"
          onTouchStart={() => dispatch({ type: 'UPDATE_GAME', payload: 'no' })}
        >
          <span>NO</span>
        </GameButton>
      </Choices>
    </>
  );
};
