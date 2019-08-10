import { Window } from "../Window";
import { dialog } from "electron";
import * as fs from 'fs';
import { Project } from "../../models/Project";
import { ProjectPageWindow } from "../ProjectPage/ProjectPageWindow";
var ncp = require('ncp').ncp;

export class MainPageWindow extends Window{
    constructor(){
        super(require.resolve('./MainPageView'), "Welcome!");
    }
    
    createProject(){
       const path = dialog.showOpenDialog({ properties: ['openDirectory'] })[0]
       if(fs.existsSync(path)){
           const project = new Project();
           project.path = path;
           Project.createInitialProject(project);
           ncp(`${__dirname}/../../default-project`, project.path, (err)=>{
               console.log(err);
           })
       }
    }

    openProject(){
        const path = dialog.showOpenDialog({})[0];
        const project =  Project.openProject(path);

        const projectPage = new ProjectPageWindow(project, project.properties['name']);
        projectPage.show();
        this.hide();
    }
}