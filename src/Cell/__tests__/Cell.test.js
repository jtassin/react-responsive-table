import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Cell } from '../../index.js';

describe('Cell', () => {

    it('build a div representing a cell', () => {
        let wrapper = shallow(
            <Cell/>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;min-height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;font-size:13px;"></div>');
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Cell style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;min-height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;font-size:13px;color:red;"></div>');
    });

    it('render inside the cell the children', () => {
        let wrapper = shallow(
            <Cell><span>Content</span></Cell>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;min-height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;font-size:13px;"><span>Content</span></div>');
    });
    
    it('add correct style if thead is true', () => {
        let wrapper = shallow(
            <Cell thead/>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;min-height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;font-size:12px;font-weight:700;"></div>');
    });

});