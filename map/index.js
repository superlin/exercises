module.exports = function (arr, fun, thisArg) {
  if (typeof fun !== 'function') {
    throw(fun + ' is not a function');
  }
  
  var A = [];
  var k = 0;
  var len = arr.length;
  var ret;
  
  while (k < len) {
    ret = fun.call(thisArg, arr[k], k, arr);
    if (ret !== undefined) {
      A[k] = ret;
    } else {
      A[k] = arr[k];      
    }
    k++;
  }
  
  return A;
};