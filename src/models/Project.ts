import * as fs from "fs";
import path from 'path';

export class Project{
    static createInitialProject(p: Project){
       fs.writeFileSync(p.getFullPath(), JSON.stringify(p.properties));
    }

    static openProject(projectPath: string) : Project{
        const solutionPath = path.join(projectPath);
        const solution = fs.readFileSync(solutionPath, 'utf-8');

        try {
            const solutionObject = JSON.parse(solution); 
            const project = new Project();
            project.path = path.dirname(projectPath);
            project.properties = solutionObject;
            
            return project;
        } catch (error) {
            throw "Unable to parse solution file. It might be corrupted."
        }
    }

    path: string;
    properties = {
        "name": "myapp",
        "package-name": "mypkg",
        "app-name": "helloworld",
        "project-type": "webview",
        "icon": "./assets/icon/icon.png",
        "version": "1.0.0",
        "description": "",
        "main": "main.js",
        "permission": ["android.permission.INTERNET"],
        "scripts": {
        "test": "node main.js",
        "build": "androidjs build"
        },
        "dist-path": "./dist",
        "author": "",
        "license": "ISC",
        "dependencies": {
        "androidjs": "^1.0.0",
        "left-pad": "^1.3.0",
        "socket.io": "^2.2.0"
        }
    }
    readonly solutionName = "package.json";
    
    getFullPath = () => {
        return path.join(this.path, this.solutionName);
    }
}
 