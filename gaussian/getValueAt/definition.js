function getValueAt(x) {

	var base = classScope.a;
	base *= Math.E;
	
	var exponent = Math.pow( (x - classScope.b),2);
	exponent = exponent / ( 2 * (Math.powclassScope.c,2) )
	exponent *= -1;

	return Math.pow(base,exponent);
}

module.exports = getValueAt;

