// BEGIN
const simple = (num) => {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  };
  
export default (num) => {
    const result = simple(num) ? 'yes' : 'no';
    console.log(result);
};

// END