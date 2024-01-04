import {Stack} from "../src/stack";
import {StackError} from "../src/stack-error";

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

    it("should throw error when pop from empty stack", () => {
        expect(() => stack.pop()).toThrow(StackError.popFromEmptyStackErrorMessage);
    });

    it("should be empty after one push and one pop", () => {
        stack.push();
        stack.pop();

        expect(stack.isEmpty).toBeTruthy();
    });
});
