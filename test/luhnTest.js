const chai = require('chai');
const assert = chai.assert;

const check = require("../luhn");

describe("a checker for valid creditcard numbers" , function() {
  it("checks a creditcard", function() {
    let actualResult = check(7992739871)
    let expectedResult = 3
    assert.equal(actualResult, expectedResult)
  })
})