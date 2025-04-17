// BEGIN
export default (users) => {
    const girlFriends = users.map(user => user.friends.filter(friend => friend.gender === 'female'));
    return girlFriends.flat();
}
// END

