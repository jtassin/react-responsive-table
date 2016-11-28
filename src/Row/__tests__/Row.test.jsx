import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import { Row } from '../../index.js';

// Used by material-ui
global.navigator = { userAgent: 'all' };

function rowWrapper({ index, material = true, striped= true }) {
  return shallow(
    Row({ material, striped, index }, { muiTheme: getMuiTheme(lightBaseTheme) })
  );
}

const DEFAULT_ROW_RESULT = '<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;"></div>';

describe('Row', () => {

    // following lines serve to detect bad proptype or any react warning
  
    /* eslint-disable no-undef, no-console */
    before(() => {
      sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
    });
    /* eslint-disable no-undef */
    after(() => { console.error.restore(); });

    it('build a div representing a row', () => {
      const wrapper = shallow(
          <Row/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('merge styles passed as argument to component style', () => {
        const wrapper = shallow(
            <Row style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:red;"></div>');
    });

    it('render inside the row the children', () => {
        const wrapper = shallow(
            <Row><span>Content</span></Row>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;"><span>Content</span></div>');
    });
  
  describe('material', () => {

    const MATERIAL_UNSTRIPED_ROW_RESULT = '<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:rgba(0, 0, 0, 0.87);min-height:48px;"></div>';
    
    it('does not take striped boolean into account if material is false', () => {
      const wrapper = shallow(
        <Row striped={true}/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('does not fail if context.muiTheme is missing', () => {
      const wrapper = shallow(
        <Row material={true}/>
      );
      expect(wrapper.html()).to.equal(DEFAULT_ROW_RESULT);
    });

    it('use the material ui theme', () => {
      const wrapper = rowWrapper({material: true});
      expect(wrapper.html()).to.equal(MATERIAL_UNSTRIPED_ROW_RESULT);
    });
    
    it('add correct style if index is pair and striped is true', () => {
      const wrapper = rowWrapper({index: 2});
      expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;color:rgba(0, 0, 0, 0.87);background-color:rgba(127, 221, 233, 0.4);min-height:48px;"></div>');
    });

    it('add correct style if index is impair and striped is true', () => {
      const wrapper = rowWrapper({index: 3});
      expect(wrapper.html()).to.equal(MATERIAL_UNSTRIPED_ROW_RESULT);
    });
  });
});
