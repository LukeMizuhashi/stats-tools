function GaussianFunction() {

	var classScope = this;
	classScope.a;
	classScope.b;
	classScope.c;
}

GaussianFunction.prototype.getValueAt = require("./getValueAt/definition.js"); 

module.exports = GaussianFunction;

