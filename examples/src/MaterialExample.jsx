import React from 'react';
import Playground  from 'component-playground';
import {Table, Row, Cell} from '../../src/index';

export default function render() {
  return (
      <div>
        <div style={{backgroundColor: 'white'}}>
          <Playground codeText={`<div>
  <Table material>
    <Row>
      <Cell thead minWidthPx={100}>Head-1-1</Cell>
      <Cell thead minWidthPx={100}>Head-1-2</Cell>
    </Row>
    <Row>
      <Cell minWidthPx={100}>Col-1-1</Cell>
      <Cell minWidthPx={100}>Long text for Col-1-2</Cell>
    </Row>
    <Row>
      <Cell minWidthPx={100}>Col-2-1</Cell>
      <Cell minWidthPx={100}>Col-2-2</Cell>
    </Row>
    <Row>
      <Cell minWidthPx={100}>Long text for Col-3-1</Cell>
      <Cell minWidthPx={100}>Col-3-2</Cell>
    </Row>
  </Table>
</div>`} scope={{React: React, Table: Table, Row: Row, Cell: Cell}}/>
        </div>
        <span style={{ marginTop: '20px' }}>Change your window size to see the trick.</span>
      </div>
  );
}

