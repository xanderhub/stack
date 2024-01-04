import {StackError} from "./stack-error";

export class Stack {

    private _isEmpty: boolean = true;
    get isEmpty(): boolean {
        return this._isEmpty;
    }

    public push(): void {
        this._isEmpty = false;
    }

    public pop(): void {
        if (this.isEmpty)
            throw new StackError(StackError.popFromEmptyStackErrorMessage);

        this._isEmpty = true;
    }
}
