import React from 'react';
import { expect } from 'chai';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import { Row } from '../../index.js';

function rowWrapper({ index }) {
  return shallow(
    Row({ material: true, striped: true, index }, { muiTheme: getMuiTheme(lightBaseTheme) })
  );
}

const DEFAULT_ROW_RESULT = '<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;"></div>';

describe('Row', () => {

    it('build a div representing a row', () => {
      let wrapper = shallow(
          <Row/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Row style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:red;"></div>');
    });

    it('render inside the row the children', () => {
        let wrapper = shallow(
            <Row><span>Content</span></Row>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;"><span>Content</span></div>');
    });
  
  describe('material', () => {
    it('does not take striped boolean into account if material is false', () => {
      let wrapper = shallow(
        <Row striped={true}/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('does not fail if context.muiTheme is missing', () => {
      let wrapper = shallow(
        <Row material={true}/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('use the material ui theme', () => {
      let wrapper = shallow(
        Row({material: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
      );
      expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:rgba(0, 0, 0, 0.87);min-height:48px;"></div>');
    });
    
    it('add correct style if index is pair and striped is true', () => {
      let wrapper = rowWrapper({index: 2});
      expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:rgba(0, 0, 0, 0.87);background-color:rgba(127, 221, 233, 0.4);min-height:48px;"></div>');
    });

    it('add correct style if index is impair and striped is true', () => {
      let wrapper = rowWrapper({index: 3});
      expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:rgba(0, 0, 0, 0.87);min-height:48px;"></div>');
    });
  });
});
