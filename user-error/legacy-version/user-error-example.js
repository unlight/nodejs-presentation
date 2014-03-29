var UserError = require("./user-error.js");

function dummy() {
	unknown();
}

function main() {
	if (typeof head == "undefined") {
		throw new UserError();
	}
	dummy();
}


main();