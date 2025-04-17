import _ from 'lodash';
// BEGIN
export default (...numbers) => {
    if (numbers.length === 0) {
        return null;
    }

    const average = _.sum(numbers)/numbers.length;
    return average;
}
// END  