exports.min = function min (array) {
    if (array === undefined) {
        return 0;
    }
    let number = array.length;
    if (number === 0) return 0;
    
    return Math.min(...array);
}

exports.max = function max (array) {
    if (array === undefined ) {
        return 0;
    }
    let number = array.length;
    if (number === 0) return 0;

    return Math.max(...array);
}

exports.avg = function avg (array) {
    if (array === undefined ) {
        return 0;
    }
    let number = array.length;
    if (number === 0) return 0;
    
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let sum = array.reduce(reducer);
  return sum / array.length;
}
