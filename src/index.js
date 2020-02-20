
exports.min = function min (array) {
  if (!array || !array.length) return [];
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || !array.length) return [];
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!array || !array.length) return [];
  let result = 0;
  array.forEach(element => {
    result +=element;  
  });
  return result/array.length;
}
