const fizzBuzz = require('./classtdd');

describe("FizzBuzz", () => {
    it("if divisible by 3 print fizz", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
    it("if divisible by 5 print buzz", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
    it("if divisible by both 3 and 5 print fizzbuzz", () => {
        expect(fizzBuzz(3)).toBe("Fizz");
    })
})