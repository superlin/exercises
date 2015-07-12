module.exports = function (fun) {
	var init_args = [].slice.call(arguments, 1);
	var fun_args_len = fun.length;
	
	function curried(args) {
		if (args.length >= fun_args_len) {
			return fun.apply(null, args);
		}
		
		return function () {
			return curried(args.concat([].slice.apply(arguments)));	
		};
	};
	
	return curried(init_args);
};