/**
 * Created by jay on 12/8/17
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

/*const ExpensesSummary = () => {
    return (
        <div>
            <p>Expenses Summary </p>
        </div>
    )
}*/

//option #1
/*class ExpensesSummary extends Component {

    render() {
        console.log(this.props.expenses);
        return (
            <div>
                <p>Expenses Summary Here</p>
                <p># of expenses: {this.props.expenses.length}</p>
                <p>Total expenses: {numeral(getTotal(this.props.expenses) / 100).format('$0,0.00')}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}*/

//option #2

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expneses';
    const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);