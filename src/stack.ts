import {StackError} from "./stack-error";

export class Stack {

    private _size: number;

    constructor() {
        this._size = 0;
    }

    public isEmpty(): boolean {
        return this._size == 0;
    }

    public push(): void {
        this._size ++;
    }

    public pop(): void {
        if (this.isEmpty())
            throw new StackError(StackError.popFromEmptyStackErrorMessage);

        this._size --;
    }
}
