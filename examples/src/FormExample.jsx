import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
  <form key="row1" onSubmit={(event) => { event.preventDefault(); alert('submitted row 1'); }}>
      <Row>
        <Cell minWidthPx={100} key="cell1"><TextField fullWidth hintText="Required field" required/></Cell>
        <Cell minWidthPx={100} key="cell2"><TextField fullWidth hintText="Required field"/></Cell>
        <Cell minWidthPx={200} key="cell3"><FlatButton type="submit" primary label="Submit Row 1"/></Cell>
      </Row>
    </form>
    <form key="row2" onSubmit={(event) => { event.preventDefault(); alert('submitted row 2'); }}>
      <Row>
        <Cell minWidthPx={100} key="cell1"><TextField fullWidth hintText="Required field" required/></Cell>
        <Cell minWidthPx={100} key="cell2"><TextField fullWidth hintText="Required field"/></Cell>
        <Cell minWidthPx={200} key="cell3"><FlatButton type="submit" primary label="Submit Row 2"/></Cell>
      </Row>
    </form>
  </Table>
</MuiThemeProvider>`}
          scope={{
            React,
            Table,
            Row,
            Cell,
            MuiThemeProvider,
            lightBaseTheme,
            getMuiTheme,
            TextField,
            FlatButton,
          }}
        />
      </div>
    </div>
  );
}
