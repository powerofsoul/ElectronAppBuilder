import { Window } from "../Window";
import { dialog } from "electron";
import * as fs from 'fs';
import { Project } from "../../models/Project";

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
       const path = dialog.showOpenDialog({ properties: ['openDirectory'] })[0]
       if(fs.existsSync(path)){
           Project.createInitialProject(path);
       }
    }
}