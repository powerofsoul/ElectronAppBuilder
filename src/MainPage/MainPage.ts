import { Window } from "../Window";
import { MainWindowViewModel } from "./MainPageViewModel";

export class MainPageView extends Window{
    constructor(){
        super('MainPage/MainPageView.html', new MainWindowViewModel());
    }
}