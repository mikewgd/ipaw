/* eslint-disable no-shadow */
import React, { createContext, useReducer } from 'react';

const initialState = { yesCount: 0, noCount: 0, game: 'start' };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'UPDATE_YES_COUNT':
        return {
          game: state.game,
          yesCount: state.yesCount + 1,
          noCount: state.noCount,
        };
      case 'UPDATE_NO_COUNT':
        return {
          game: state.game,
          yesCount: state.yesCount,
          noCount: state.noCount + 1,
        };
      case 'UPDATE_GAME':
        return {
          game: action.payload,
          yesCount: state.yesCount,
          noCount: state.noCount,
        };
      case 'RESET_GAME':
        return initialState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
