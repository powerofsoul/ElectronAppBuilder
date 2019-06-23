import * as fs from "fs";

export class Project{
    static createInitialProject(path: string){
         fs.writeFileSync(`${path}/solution.sap`, "test");
    }
}