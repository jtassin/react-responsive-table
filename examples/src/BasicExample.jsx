import React from 'react';
import Playground  from 'component-playground';
import { Table, Row, Cell } from '../../src/index';

export default function render() {
  return (
      <div>
  <div style={{backgroundColor: 'white'}}>
    <Playground codeText={`<Table>
        <Row>
          <Cell thead minWidthPx={100}>Head-1-1</Cell>
          <Cell thead minWidthPx={100}>Head-1-2</Cell>
          <Cell thead minWidthPx={300}>Head-1-3</Cell>
        </Row>
        <Row>
          <Cell minWidthPx={100}>Col-1-1</Cell>
          <Cell minWidthPx={100}>Long text for Col-1-2</Cell>
          <Cell thead minWidthPx={300}>Col-1-3</Cell>
        </Row>
        <Row>
          <Cell minWidthPx={100}>Col-2-1</Cell>
          <Cell minWidthPx={100}>Col-2-2</Cell>
          <Cell thead minWidthPx={300}>Col-2-3</Cell>
        </Row>
        <Row>
          <Cell minWidthPx={100}>Long text for Col-3-1</Cell>
          <Cell minWidthPx={100}>Col-3-2</Cell>
          <Cell thead minWidthPx={300}>Col-3-3</Cell>
        </Row>
      </Table>`} scope={{React: React, Table: Table, Row: Row, Cell: Cell}}/>
  </div>
        <span style={{ marginTop: '20px' }}>Change your window size to see the trick.</span>
        </div>
  );
}

