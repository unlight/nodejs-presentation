var strUtils = require("./string-utils.js");
var trim = strUtils.trim;
var suffixString = strUtils.suffixString;

var string = "Hello";
var result = suffixString(string, "World");

console.log(result);