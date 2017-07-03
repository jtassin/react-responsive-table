import React from 'react';
import sinon from 'sinon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import { Table, Row, Cell } from '../../index.js';

// Used by material-ui
global.navigator = { userAgent: 'all' };

describe('Table', () => {

  // following lines serve to detect bad proptype or any react warning

  /* eslint-disable no-undef, no-console */
  beforeEach(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
  });
  /* eslint-disable no-undef */
  afterEach(() => { console.error.restore(); });

    it('does not fail if children is a mix of array and object', () => {
      const rows = [2, 3].map(index => (<Row key={index}><Cell>{index}</Cell></Row>));
      let wrapper = shallow(
        <Table>
          <Row key={1}><Cell>1</Cell></Row>
          {rows}
          <Row key={4}><Cell>4</Cell></Row>
        </Table>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('build a div representing a table', () => {
        let wrapper = shallow(
            <Table/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Table style={{ color: 'blue' }}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render inside the table the children', () => {
        let wrapper = shallow(
            <Table><div>Table Content</div></Table>
        );
        expect(wrapper).toMatchSnapshot();
    });

  describe('material', () => {
    it('handle striped even with complex children', () => {
      const rows = [2, 3].map(index => (<Row material striped key={index}><Cell>{index}</Cell></Row>));
      const children = [<Row material striped key={1}><Cell>1</Cell></Row>, rows, <Row material striped key={4}><Cell>4</Cell></Row>];
      let wrapper = shallow(
        Table({material: true, children }, { muiTheme: getMuiTheme(lightBaseTheme) })
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('add material-ui styles according to the theme if material is true', () => {
      let wrapper = shallow(
        Table({material: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('does not fail if context.muiTheme is missing', () => {
      let wrapper = shallow(
        <Table material><span>Content</span></Table>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

});
