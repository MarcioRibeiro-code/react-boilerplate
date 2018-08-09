import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import LayoutContainer from './components/LayoutContainer';

render(
  <Provider store={store}>
    <React.Fragment>
      <LayoutContainer />
    </React.Fragment>
  </Provider>,
  document.getElementById('app'),
);

if (module.hot) module.hot.accept();
