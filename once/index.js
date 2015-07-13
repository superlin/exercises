module.exports = function (fun) {
  var called = false;
  var res;
  
  return function() {
    if (called) {
      return res;
    }
    
    res = fun.apply(this, arguments);
    res = (res === undefined ? this : res);
    called = true;
    
    return res;
  };
};