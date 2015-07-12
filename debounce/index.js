var debounce = function(fn, timeSpace) {
  var timer

  return function() {
    var realArg = arguments
	  , start = Date.now()
      , now = Date.now()
      , timePassed = now - start
      , innerThis = this

    if (timePassed > timeSpace) {
      clearTimeout(timer)
      fn.apply(innerThis, realArg)
      start = now
    } else {
      clearTimeout(timer)
      timer = setTimeout(function() {
        fn.apply(innerThis, realArg)
        start = Date.now()
      }, timeSpace - timePassed)
    }
  }
}

module.exports = debounce;