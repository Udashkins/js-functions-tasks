// BEGIN
export default (objs, arg) => {
    const res = {};
    if (objs.length === 0 || arg === '') {
        return res;
    }
    for (const obj of objs) {
        const key = obj[arg];
        if (!Object.hasOwn(res, key)) {
            res[key] = [];
        }
        res[key].push(obj);
    }
    return res;
}

// END
