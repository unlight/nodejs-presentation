function sum() {
	var args = [].slice.call(arguments);
	var result = 0;
	args.forEach(function(value) {
		result += value;
	});
	return result;
}