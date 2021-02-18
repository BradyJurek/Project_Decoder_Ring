const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius()", () => {
  it("should return false if nothing is inputed", () => {
        const expected = false;
        const actual = polybius();
        expect(actual).to.eql(expected);
  });

});