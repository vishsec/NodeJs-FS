const sum = require("./sum")

describe("sum test", () => {
    test("Should be performing the sum operation", () => {
        expect(sum(4,6)).toEqual(10)
    })
})