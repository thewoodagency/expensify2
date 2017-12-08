/**
 * Created by jay on 12/8/17
 */

import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if noexpenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195)
})

test('should correctnly add up mulitple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(104695);
});