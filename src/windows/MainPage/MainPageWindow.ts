import { Window } from "../Window";
import { dialog } from "electron";
import * as fs from 'fs';
import { Project } from "../../models/Project";
import { ProjectPageWindow } from "../ProjectPage/ProjectPageWindow";

export class MainPageWindow extends Window{
    constructor(){
        super(require.resolve('./MainPageView'), "Welcome!");
    }
    
    createProject(){
       const path = dialog.showOpenDialog({ properties: ['openDirectory'] })[0]
       if(fs.existsSync(path)){
           const project = new Project();
           project.path = path;
           project.version = "0.0.1";
           project.name = "Test Project";
           project.author = "Florin Munteanu";
           Project.createInitialProject(project);
       }
    }

    openProject(){
        const path = dialog.showOpenDialog({})[0];
        const project =  Project.openProject(path);

        const projectPage = new ProjectPageWindow(project, project.name);
        projectPage.show();
        this.hide();
    }
}