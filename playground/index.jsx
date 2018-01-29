import React from 'react';
import { render } from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';

import Playground from './Playground';

function renderPlayground() {
  render(
    <AppContainer>
      <Playground />
    </AppContainer>,
    document.getElementById('root'),
  );
}

renderPlayground();

if (module.hot) {
  module.hot.accept('./index.jsx');
  module.hot.accept('./Playground.jsx', renderPlayground);
}
