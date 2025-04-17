// BEGIN
export default (...dates) => {
    let rerult = [];
    if (dates.length === 0) {
        return rerult;
    }

    for (let [year, month, day] of dates) {
        rerult.push(new Date(year, month, day).toDateString());
    }
    return rerult;

}
// END

