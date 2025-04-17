import _ from 'lodash';

// BEGIN
export default takeOldest = (users, n = 1) => {
    
    const sortedUsers = _.sortBy(users, (user) => Date.parse(user.birthday));
    return sortedUsers.slice(0, n);

}
// END