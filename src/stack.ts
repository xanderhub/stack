export class Stack {

    private _isEmpty: boolean = true;
    get isEmpty(): boolean {
        return this._isEmpty;
    }

    push() {
        this._isEmpty = false;
    }
}
