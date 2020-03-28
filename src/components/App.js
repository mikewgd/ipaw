import React, { useContext } from 'react';

import { Container, GlobalStyle } from './styles';
import { store } from '../store';
import { StartSession } from './startSession';
import { EndSession } from './endSession';
import { Game } from './game';

const App = () => {
  const globalState = useContext(store);
  const { state } = globalState;

  return (
    <>
      <GlobalStyle />
      <Container>
        <StartSession />
        <Game show={state.game !== 'start'} />
        <EndSession show={state.game === 'end'} />
      </Container>
    </>
  );
};

export default App;
