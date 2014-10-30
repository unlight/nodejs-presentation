function UserError(message) {
	this.constructor.prototype.__proto__ = Error.prototype;
	this.name = this.constructor.name;
	this.message = message;
	Error.captureStackTrace(this, this.constructor);
}

module.exports = UserError;