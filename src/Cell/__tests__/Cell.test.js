import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Cell } from '../../index.js';

describe('Cell', () => {

    it('build a div representing a cell', () => {
        let wrapper = shallow(
            <Cell/>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;"></div>');
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Cell style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;color:red;"></div>');
    });

    it('render inside the cell the children', () => {
        let wrapper = shallow(
            <Cell><span>Content</span></Cell>
        );
        expect(wrapper.html()).to.equal('<div style="flex-grow:1;overflow:hidden;vertical-align:top;white-space:nowrap;text-overflow:ellipsis;height:48px;padding:12px 18px 12px 24px;box-sizing:border-box;"><span>Content</span></div>');
    });

});