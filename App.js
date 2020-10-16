import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';


import './src/config/moment';
import './src/config/reactotron';

import store from './src/store';
import Routes from './src/routes';

const App = () => (
  <Fragment>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Fragment>
);

export default App;
