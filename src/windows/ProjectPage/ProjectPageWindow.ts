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
        fs.writeFile(path.join(this.project.path, "out", "index.html"), stringHTML, ()=>{});
    }
}