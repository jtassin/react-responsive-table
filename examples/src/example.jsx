import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BasicExample from './BasicExample';
import MaterialExample from './MaterialExample';

const RequiredMaterialExample = require('./MaterialExample').default;
const RequiredBasicExample = require('./BasicExample').default;

require('./github-light.css');
require('./normalize.css');
require('./stylesheet.css');

/* eslint-disable no-undef */
const materialExampleEl = document.getElementById('material-example');
ReactDOM.render(
  <AppContainer>
    <MaterialExample />
  </AppContainer>,
    materialExampleEl,
);

if (module.hot) {
  module.hot.accept('./MaterialExample', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
        <RequiredMaterialExample />
      </AppContainer>,
        materialExampleEl,
    );
  });
}

/* eslint-disable no-undef */
const basicExampleEl = document.getElementById('basic-example');
ReactDOM.render(
  <AppContainer>
    <BasicExample />
  </AppContainer>,
    basicExampleEl,
);

if (module.hot) {
  module.hot.accept('./BasicExample', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    ReactDOM.render(
      <AppContainer>
        <RequiredBasicExample />
      </AppContainer>,
        basicExampleEl,
    );
  });
}
