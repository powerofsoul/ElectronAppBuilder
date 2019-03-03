export class ViewModel{
    private _listeners: Object;

    constructor(){
        this._listeners = {};
    }

    public registerListener(name, f){
        this._listeners[name] = f;
    }

    public trigger(name): void{
        if(name in this._listeners) this._listeners[name]();
    }
}