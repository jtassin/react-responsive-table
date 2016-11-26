import React from 'react';
import Playground  from 'component-playground';
import {Table, Row, Cell} from '../../src/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default function render() {
  return (
      <div>
        <div style={{backgroundColor: 'white'}}>
          <Playground codeText={`<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
  <Table material>
    <Row>
      <Cell thead minWidthPx={100}>Head-1-1</Cell>
      <Cell thead minWidthPx={100}>Head-1-2</Cell>
    </Row>
    <Row stripped>
      <Cell minWidthPx={100}>Col-1-1</Cell>
      <Cell minWidthPx={100}>Long text for Col-1-2</Cell>
    </Row>
    <Row stripped>
      <Cell minWidthPx={100}>Col-2-1</Cell>
      <Cell minWidthPx={100}>Col-2-2</Cell>
    </Row>
    <Row stripped>
      <Cell minWidthPx={100}>Long text for Col-3-1</Cell>
      <Cell minWidthPx={100}>Col-3-2</Cell>
    </Row>
  </Table>
</MuiThemeProvider>`} scope={{React, Table, Row, Cell, MuiThemeProvider, lightBaseTheme, getMuiTheme, TextField}}/>
        </div>
        <span style={{ marginTop: '20px' }}>Change your window size to see the trick.</span>
      </div>
  );
}

