import moment from 'moment';
import { sortByDate, setStartDate, setEndDate, setTextFilter } from '../../actions/filters';

test('should set sortByDate filter action', () => {
    const filter = sortByDate();
    expect(filter).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate set start date action', () => {
    const filter = setStartDate(moment(0));
    expect(filter).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action', () => {
    const filter = setEndDate(moment(0));
    expect(filter).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set text filter object with text value', () => {
    const filter = setTextFilter('Something');
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Something'
    })
})

test('should generate set text filter object with default value', () => {
    const filter = setTextFilter();
    expect(filter).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})