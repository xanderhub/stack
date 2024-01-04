import {StackError} from "./stack-error";

export class Stack {

    private _size: number;
    private _value?: number;

    constructor() {
        this._size = 0;
    }

    public isEmpty(): boolean {
        return this._size == 0;
    }

    public push(value: number): void {
        this._value = value;
        this._size ++;
    }

    public pop(): number {
        if (this.isEmpty() || !this._value)
            throw new StackError(StackError.popFromEmptyStackErrorMessage);

        this._size --;
        return this._value;
    }
}
