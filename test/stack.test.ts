import {Stack} from "../src/stack";

describe("stack tests", () => {

    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it("should be empty after creation", () => {
        expect(stack.isEmpty).toBeTruthy();
    });

    it("should not be empty after push", () => {
        stack.push();
        expect(stack.isEmpty).toBeFalsy()
    });
})
