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

/* eslint-disable no-undef */
const basicExampleEl = document.getElementById('basic-example');
ReactDOM.render(
  <AppContainer>
    <BasicExample />
  </AppContainer>,
    basicExampleEl,
);

if (module.hot) {
  const examples = [
    { name: MaterialExample, node: <RequiredMaterialExample />, elem: materialExampleEl },
    { name: BasicExample, node: <RequiredBasicExample />, elem: basicExampleEl },
  ];
  examples.forEach((example) => {
    module.hot.accept(`./${example.name}`, () => {
      ReactDOM.render(
        <AppContainer>
          {example.node}
        </AppContainer>,
        example.elem,
      );
    });
  });
}
