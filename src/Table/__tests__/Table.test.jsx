import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Table } from '../../index.js';

describe('Table', () => {

    it('build a div representing a table', () => {
        let wrapper = shallow(
            <Table/>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;"></div>');
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Table style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;color:red;"></div>');
    });

    it('render inside the table the children', () => {
        let wrapper = shallow(
            <Table><span>Content</span></Table>
        );
        expect(wrapper.html()).to.equal('<div style="width:100%;"><span>Content</span></div>');
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
