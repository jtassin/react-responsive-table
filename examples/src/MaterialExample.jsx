import React from 'react';
import Playground from 'component-playground';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Table, Row, Cell } from '../../src/index';

export default function render() {
  return (
    <div>
      <div style={{ backgroundColor: 'white' }}>
        <Playground
          codeText={`<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
  <Table material>
    <Row header key="row1">
      <Cell minWidthPx={100} key="cell1">Head-1-1</Cell>
      <Cell minWidthPx={100} key="cell2">Head-1-2</Cell>
       <Cell minWidthPx={200} key="cell3">Head-1-3</Cell>
    </Row>
    <Row striped key="row2">
      <Cell minWidthPx={100} key="cell1">Col-1-1</Cell>
      <Cell minWidthPx={100} key="cell2">Very very very very Long text for Col-1-2</Cell>
      <Cell minWidthPx={200} key="cell3">Col-1-3</Cell>
    </Row>
    <Row striped key="row3">
      <Cell minWidthPx={100} key="cell1">Col-2-1</Cell>
      <Cell minWidthPx={100} key="cell2">Col-2-2</Cell>
       <Cell minWidthPx={200} key="cell3">Col-2-3</Cell>
    </Row>
    <Row striped key="row4">
      <Cell minWidthPx={100} key="cell1">Long text for Col-3-1</Cell>
      <Cell minWidthPx={100} key="cell2">Col-3-2</Cell>
      <Cell minWidthPx={200} key="cell3">Col-3-3</Cell>
    </Row>
  </Table>
</MuiThemeProvider>`} scope={{ React, Table, Row, Cell, MuiThemeProvider, lightBaseTheme, getMuiTheme }}
        />
      </div>
      <span style={{ marginTop: '20px' }}>Change your window size to see the trick.</span>
    </div>
  );
}

