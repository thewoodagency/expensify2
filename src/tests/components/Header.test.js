import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
//for simple component or use "enzyme"
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';  commented out b/c it moved to jest.config
import Header from '../../components/Header';

test('should render Header correctly', () => {

    /*
    code for 'react-test-render'
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    //console.log(renderer.getRenderOutput());

    expect(renderer.getRenderOutput()).toMatchSnapshot();*/

    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
})

