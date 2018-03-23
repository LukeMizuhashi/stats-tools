function description() {

  it("Returns blah when blah",testReturn(1,2));
}

module.exports = description;


///////////////////////////////////////////////////////////////////////////////
var GaussianFunction = require("../constructor.js");

function testReturn(input,output) {

  function innerTestReturn() {
    var unitUnderTest = new GaussianFunction();
    assert(true);
  }

  return innerTestReturn();
}

