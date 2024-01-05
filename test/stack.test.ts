import {Stack} from "../src/stack";
import {StackError} from "../src/stack-error";

describe("stack tests", () => {

    let stack: Stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it("should be empty after creation", () => {
        expect(stack.isEmpty()).toBeTruthy();
    });

    it("should not be empty after push", () => {
        stack.push(42);
        expect(stack.isEmpty()).toBeFalsy()
    });

    it("should throw error when pop from empty stack", () => {
        expect(() => stack.pop()).toThrow(StackError.popFromEmptyStackErrorMessage);
    });

    it("should be empty after one push and one pop", () => {
        stack.push(42);
        stack.pop();

        expect(stack.isEmpty()).toBeTruthy();
    });

    it("should not be empty after two pushes and one pop", () => {
        stack.push(42);
        stack.push(42);
        stack.pop();

        expect(stack.isEmpty()).toBeFalsy();
    });

    it("should pop 42 after pushing 42", () => {
        stack.push(42);
        expect(stack.pop()).toBe(42);
    });

    it("should pop 24 and 42 after pushing 42 and 24", () => {
        stack.push(42);
        stack.push(24);

        expect(stack.pop()).toBe(24);
        expect(stack.pop()).toBe(42);
    })
});
