/**
 * Suffix string.
 * @param  {string} string 
 * @param  {string} suffix
 * @return {string}        Result.
 */
var suffixString = function(string, suffix) {
	var length = suffix.length;
	if (string.substr(-length) != suffix) {
		string += suffix;
	}
	return string;
}

module.exports = {
	"suffixString": suffixString
}