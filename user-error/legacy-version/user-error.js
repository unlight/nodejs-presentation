function UserError(message) {
	Error.captureStackTrace(this, this.constructor);
	this.name = this.constructor.name;
	this.message = message;
}

UserError.prototype = Object.create(Error.prototype);
UserError.prototype.constructor = UserError;


module.exports = UserError;