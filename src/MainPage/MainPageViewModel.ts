import { ViewModel } from "../ViewModel";

export class MainWindowViewModel extends ViewModel{
    private _number1: number;
    public get number1():number{
        return this._number1;
    }
    
    public set number1(value){
        this._number1 = value;
        this.trigger('number1');
    }

    public calcSum(){
        console.log(this.number1);
        this.number1 +=1000;
    }
}