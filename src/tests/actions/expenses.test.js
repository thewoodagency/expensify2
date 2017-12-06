import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '125abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '125abc'
    })
})

// .toBE() is doing === so {} === {} false / [] === [] false
// .toEqual() ==

test('should setup edit expense action object', () => {
    const action = editExpense('12345', {note: 'test'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12345',
        updates: {
            note: 'test'
        }
    });
})

test('should setup add expense acton object', () => {
    const expenseData = { description: 'test', note:'test', amount:23, createdAt: 1000 };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
})

test('should setup add expense acton object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
})

