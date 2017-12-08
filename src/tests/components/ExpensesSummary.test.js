/**
 * Created by jay on 12/8/17
 */

import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render the summary with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
/*
test('should correctly render the summary with multiple expenses', () => {

});*/
