import { Window } from "../Window";
import { Project } from "../../models/Project";
import ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as androidJS from "androidjs-builder";
const util = require('util');
const {dialog} = require('electron');

export class ProjectPageWindow extends Window {
    project: Project;
    constructor(project: Project, title: string) {
        super(require.resolve('./ProjectPageView'), title, 1200, 1000);
        this.project = project;
    }

    createOutput(stringHTML: string) {
        const directory = path.join(this.project.path, "views");
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory);
        }

        fs.writeFile(path.join(directory, "index.html"), stringHTML, () => { });
    }

    buildApk() {
        const exec = util.promisify(require('child_process').exec);
        const projectPath = this.project.path;
        async function ls() {
            const { stdout, stderr } = await exec(`c: && cd ${projectPath} && dir && androidjs b`);
            console.log('stdout:', stdout);
            console.log('stderr:', stderr);
            
            return stdout;
        }

        var showMessage = (message) => {
            const dialogOptions = {type: 'info', buttons: ['OK'], message: message}

            dialog.showMessageBox(dialogOptions, i => console.log(i))
        };

        ls().then((out)=>{
            showMessage(out);
        });
    }
}