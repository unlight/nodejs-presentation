function Person(name) {
	this.getName = function() {
		return name;
	}
}

function Worker(name) {
	Person.call(this, name);
}

Worker.prototype.__proto__ = Person.prototype;

var w = new Worker("Joe");

console.log(w.getName()); // "Joe"
console.log(w instanceof Person); // true