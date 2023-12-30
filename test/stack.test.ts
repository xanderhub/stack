import {Stack} from "../src/stack";

describe("stack tests", () => {

    it("should be empty after creation", () => {
        let stack: Stack = new Stack();

        expect(stack.isEmpty).toBeTruthy();
    })
})
