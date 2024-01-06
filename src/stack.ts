import {StackError} from "./stack-error";
import {Item} from "./item";

export class Stack {

    private _top?: Item;

    public isEmpty(): boolean {
        return !this._top;
    }

    public push(value: number): void {
        this._top = {value: value, next: this._top};
    }

    public pop(): number {
        if (this.isEmpty())
            throw new StackError(StackError.popFromEmptyStackErrorMessage);

        let value: number = this._top?.value as number;
        this._top = this._top?.next;
        return value;
    }
}
