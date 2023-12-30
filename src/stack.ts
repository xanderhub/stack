import {StackError} from "./stack-error";

export class Stack {

    private readonly _cannotPopFromEmptyStackError: string = "Cannot pop from empty stack";
    private _isEmpty: boolean = true;

    get isEmpty(): boolean {
        return this._isEmpty;
    }

    public push(): void {
        this._isEmpty = false;
    }

    public pop(): void {
        throw new StackError(this._cannotPopFromEmptyStackError);
    }
}
