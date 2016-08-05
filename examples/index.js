import normalizeCss from './stylesheets/normalize.css';
import githubLightCss from './stylesheets/github-light.css';
import stylesheetCss from './stylesheets/stylesheet.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Table, Row, Cell, UnwrappableCells} from '../src/index';

ReactDOM.render((<Table mdl><Row><Cell minWidthPx={100}>Col-1-1</Cell><Cell minWidthPx={100}>Long text for Col-1-2</Cell></Row><Row><Cell minWidthPx={100}>Col-2-1</Cell><Cell minWidthPx={100}>Col-2-2</Cell></Row><Row><Cell minWidthPx={100}>Long text for Col-3-1</Cell><Cell minWidthPx={100}>Col-3-2</Cell></Row></Table>), document.getElementById('example-0'));


