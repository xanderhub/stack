export class StackError extends Error {

    public static readonly popFromEmptyStackErrorMessage: string = "Cannot pop from empty stack";
    constructor(message: string) {
        super(message);
        this.name = "StackError";
    }
}
