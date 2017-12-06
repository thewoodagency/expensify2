//can't import moment here for mocking instead
const moment = require.requireActual('moment');
//grab the original version of

export default (timestamp = 0) => {
    return moment(timestamp); //looking for mock version
}