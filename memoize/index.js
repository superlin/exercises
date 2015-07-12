module.exports = function (fun) {
	var mem = {};
	
	return function memoize() {
		var key = [].slice.call(arguments) + '';
		var val = mem[key];
		
		if (val !== undefined) {
			return val;
		}
		
		val = mem[key] = fun.apply(null, arguments);
		
		return val;
	};
};