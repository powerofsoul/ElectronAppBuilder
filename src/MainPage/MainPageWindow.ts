import { Window } from "../Window";
import { dialog } from "electron";

export class MainPageWindow extends Window{
    constructor(){
        super(require.resolve('./MainPageView'));
    }

    getProps(){
        return {
            createProject: this.createProject
        }
    }
    
    createProject(){
       return dialog.showOpenDialog({ properties: ['openDirectory'] })
    }
}