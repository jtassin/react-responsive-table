import React from 'react';
import sinon from 'sinon';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { shallow } from 'enzyme';
import { Cell } from '../../index.js';

// Used by material-ui
global.navigator = { userAgent: 'all' };

describe('Cell', () => {

  // following lines serve to detect bad proptype or any react warning

  /* eslint-disable no-undef, no-console */
  beforeEach(() => {
    sinon.stub(console, 'error', (warning) => { throw new Error(warning); });
  });
  /* eslint-disable no-undef */
  afterEach(() => { console.error.restore(); });

    it('build a div representing a cell', () => {
        let wrapper = shallow(
            <Cell/>
        );
        expect(wrapper).toMatchSnapshot();
    });

  it('use minWidthPx property', () => {
    let wrapper = shallow(
      <Cell minWidthPx={100}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Cell style={{ color: 'red' }}/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('render inside the cell the children', () => {
        let wrapper = shallow(
            <Cell><span>Content</span></Cell>
        );
      expect(wrapper).toMatchSnapshot();
    });

    describe('material', () => {
      it('does not take header boolean into account if material is false', () => {
        let wrapper = shallow(
          <Cell header={true}/>
        );
        expect(wrapper).toMatchSnapshot();
      });

      it('does not fail if context.muiTheme is missing', () => {
        let wrapper = shallow(
          <Cell material={true}/>
        );
        expect(wrapper).toMatchSnapshot();
      });

      it('use the material ui theme', () => {
        let wrapper = shallow(
          Cell({material: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
        );
        expect(wrapper).toMatchSnapshot();
      });

      it('add correct style if header is true', () => {
        let wrapper = shallow(
          Cell({material: true, header: true}, { muiTheme: getMuiTheme(lightBaseTheme) })
        );
        expect(wrapper).toMatchSnapshot();
      });
    });
});
