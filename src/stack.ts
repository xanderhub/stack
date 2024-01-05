import {StackError} from "./stack-error";
import {Item} from "./item";

export class Stack {

    private _size: number;
    private _top?: Item;

    constructor() {
        this._size = 0;
    }

    public isEmpty(): boolean {
        return this._size == 0;
    }

    public push(value: number): void {
        this._top = {value: value, next: this._top};
        this._size ++;
    }

    public pop(): number {
        if (this.isEmpty())
            throw new StackError(StackError.popFromEmptyStackErrorMessage);

        this._size --;
        let value: number = this._top?.value as number;
        this._top = this._top?.next;
        return value;
    }
}
