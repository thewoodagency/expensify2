/**
 * Created by jay on 12/8/17
 */
import React from 'react';

export default (expenses) => {
    let total = 0;
    if (expenses.length === 0) {
        return total
    } else {
        /*expenses.map(expense => {
            sum += expense.amount;
        });
        return sum;*/

        total = expenses
            .map(expense => expense.amount)
            .reduce((sum, value) => (sum + value), 0);
        return total;
    }
}