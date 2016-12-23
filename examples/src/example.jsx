import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import BasicExample from './BasicExample';
import FormExample from './FormExample';
import MaterialExample from './MaterialExample';

const RequiredMaterialExample = require('./MaterialExample').default;
const RequiredBasicExample = require('./BasicExample').default;
const RequiredFormExample = require('./FormExample').default;

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
const requiredFormExampleEl = document.getElementById('form-example');
ReactDOM.render(
  <AppContainer>
    <FormExample />
  </AppContainer>,
  requiredFormExampleEl,
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
    { name: FormExample, node: <RequiredFormExample />, elem: requiredFormExampleEl },
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
