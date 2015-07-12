module.exports = function (arr) {
	var res = [];
	var toString = Object.prototype.toString;
	
	function flatten(obj) {
		if (toString.call(obj) === '[object Array]') {
			for (var i = 0; i < obj.length; i++) {
				flatten(obj[i]);
			}
		} else {
			res.push(obj);
		}
	}
	
	flatten(arr);
	
	return res;
};