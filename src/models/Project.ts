import * as fs from "fs";
import path from 'path';

export class Project{
    static createInitialProject(p: Project){
       fs.writeFileSync(p.getFullPath(), JSON.stringify(p));
    }

    static openProject(projectPath: string) : Project{
        const solutionPath = path.join(projectPath);
        const solution = fs.readFileSync(solutionPath, 'utf-8');

        try {
            const solutionObject = JSON.parse(solution) as Project; 
            solutionObject.path = projectPath;

            return solutionObject;
        } catch (error) {
            throw "Unable to parse solution file. It might be corupted."
        }
    }

    version: string;
    name: string;
    author: string;
    path: string;

    readonly solutionName = "solution.ab";
    
    getFullPath = () => {
        return path.join(this.path, this.solutionName);
    }
}