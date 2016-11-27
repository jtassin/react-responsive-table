import React from 'react';
import { expect } from 'chai';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import { Cell } from '../../index.js';

describe('Cell', () => {

    it('build a div representing a cell', () => {
        let wrapper = shallow(
            <Cell/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;"><div style="margin:auto;"></div></div>');
    });
  
  it('use minWidthPx property', () => {
    let wrapper = shallow(
      <Cell minWidthPx={100}/>
    );
    expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;width:100px;"><div style="margin:auto;"></div></div>');
  });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Cell style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;"><div style="margin:auto;color:red;"></div></div>');
    });

    it('render inside the cell the children', () => {
        let wrapper = shallow(
            <Cell><span>Content</span></Cell>
        );
      expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;"><div style="margin:auto;"><span>Content</span></div></div>');
    });
    
    describe('material', () => {
      it('does not take header boolean into account in material is false', () => {
        let wrapper = shallow(
          <Cell header={true}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;"><div style="margin:auto;"></div></div>');
      });

      it('does not fail if context.muiTheme is missing', () => {
        let wrapper = shallow(
          <Cell material={true}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;"><div style="margin:auto;"></div></div>');
      });

      it('use the material ui theme', () => {
        let wrapper = shallow(
          Cell({material: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding-left:24px;padding-right:24px;min-height:48px;text-align:left;font-size:13px;"><div style="margin:auto;"></div></div>');
      });

      it('add correct style if header is true', () => {
        let wrapper = shallow(
          Cell({material: true, header: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-grow:1;overflow:hidden;vertical-align:middle;text-overflow:ellipsis;padding-left:24px;padding-right:24px;min-height:48px;text-align:left;font-weight:normal;font-size:12px;color:#9e9e9e;position:relative;"><div style="margin:auto;"></div></div>');
      });
    });
});