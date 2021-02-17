const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar()", () => {
  it("should encode a message with the shift value", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!';
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.eql(expected);
  });

  it("should return false if the shift value is not present, equal to 0, less than -25, or greater than 25", () => {
    const expected = false;
    const actual = caesar("abcdef", 0);
    const actual2 = caesar("abcdef");
    const actual3 = caesar("abcdef", -50);
    expect(actual).to.eql(expected);
    expect(actual2).to.eql(expected);
    expect(actual3).to.eql(expected);
  });

  it("should leave spaces alone", () => {
    const expected = 'oczmz ncjpgy wz ij ydaazmzixz di nkvxzn';
    const actual = caesar("There should be no difference in spaces", -5);
    expect(actual).to.eql(expected);
});
    it("should decode a message with the shift value", () => {
    const expected = 'this is a secret message!';
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
});
});