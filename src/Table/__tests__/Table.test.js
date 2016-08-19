import React from 'react';
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

});