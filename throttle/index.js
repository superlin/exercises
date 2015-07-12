function throttle(func, wait) {
	var context, args, result;
    var timeout = null;
    var previous = 0;
	
    return function() {
      var now = Date.now();
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout) {
        timeout = setTimeout(function() {
          previous = Date.now();
          timeout = null;
          result = func.apply(context, args);
        }, remaining);
      }
      return result;
    };
};

module.exports = throttle;