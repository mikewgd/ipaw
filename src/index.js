import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import { StateProvider } from './store';

const root = document.getElementById('root');
const renderApp = () => (
  <StateProvider>
    <App />
  </StateProvider>
);

render(renderApp(), root);
