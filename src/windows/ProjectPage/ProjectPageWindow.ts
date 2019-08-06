import { Window } from "../Window";
import { Project } from "../../models/Project";
import ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';

export class ProjectPageWindow extends Window{
    project: Project;
    constructor(project: Project, title: string){
        super(require.resolve('./ProjectPageView'), title);
        this.project = project;
    }

    createOutput(stringHTML: string){
        const directory = path.join(this.project.path, "out");
        if(!fs.existsSync(directory)){
            fs.mkdirSync(directory);
        }

        fs.writeFile(path.join(directory, "index.html"), stringHTML, ()=>{});
    }
}