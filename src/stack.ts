export class Stack {

    private _isEmpty: boolean = true;
    get isEmpty(): boolean {
        return this._isEmpty;
    }

    public push(): void {
        this._isEmpty = false;
    }
}
