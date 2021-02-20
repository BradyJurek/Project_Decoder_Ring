const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius()", () => {
  it("should return false if nothing is inputed", () => {
        const actual = polybius();
        expect(actual).to.be.false
  });

  it("should still remain a string", () => {
          const actual = polybius();
          expect(actual).to.have.string
    });

});