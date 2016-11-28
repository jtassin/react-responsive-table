import React from 'react';
import sinon from 'sinon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Table } from '../../index.js';

// Used by material-ui
global.navigator = { userAgent: 'all' };

describe('Table', () => {

  // following lines serve to detect bad proptype or any react warning

  /* eslint-disable no-undef, no-console */
  before(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
  });
  /* eslint-disable no-undef */
  after(() => { console.error.restore(); });

    it('build a div representing a table', () => {
        let wrapper = shallow(
            <Table/>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;"></div>');
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Table style={{ color: 'blue' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;color:blue;"></div>');
    });

    it('render inside the table the children', () => {
        let wrapper = shallow(
            <Table><div>Table Content</div></Table>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;"><div>Table Content</div></div>');
    });
  
  describe('material', () => {
    it('add material-ui styles according to the theme if material is true', () => {
      let wrapper = shallow(
        Table({material: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
      );
      expect(wrapper.html()).to.equal('<div style="width:100%;background-color:#ffffff;padding:0 24px;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-family:Roboto, sans-serif;"></div>');
    });

    it('does not fail if context.muiTheme is missing', () => {
      let wrapper = shallow(
        <Table material><span>Content</span></Table>
      );
      expect(wrapper.html()).to.equal('<div style="width:100%;"><span>Content</span></div>');
    });
  });

});
