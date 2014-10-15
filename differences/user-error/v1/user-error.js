function UserError(message) {
	this.constructor.prototype.__proto__ = Error.prototype;
	this.message = message;
}

module.exports = UserError;