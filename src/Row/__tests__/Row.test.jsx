import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Row } from '../../index.js';

describe('Row', () => {

    it('build a div representing a row', () => {
        let wrapper = shallow(
            <Row/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;border-top:1px solid rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.12);"></div>');
    });

    it('merge styles passed as argument to component style', () => {
        let wrapper = shallow(
            <Row style={{ color: 'red' }}/>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;border-top:1px solid rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.12);color:red;"></div>');
    });

    it('render inside the row the children', () => {
        let wrapper = shallow(
            <Row><span>Content</span></Row>
        );
        expect(wrapper.html()).to.equal('<div style="display:flex;flex-direction:row;flex-wrap:wrap;flex-grow:0;width:100%;border-top:1px solid rgba(0,0,0,.12);border-bottom:1px solid rgba(0,0,0,.12);"><span>Content</span></div>');
    });

});