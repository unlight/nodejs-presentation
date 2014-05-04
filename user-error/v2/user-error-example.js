var UserError = require("./user-error.js");

function main() {
	if (typeof head == "undefined") {
		throw new UserError("Message.");
	}
}

main();
