import { Window } from "../Window";
import { Project } from "../../models/Project";
import ReactDOMServer from 'react-dom/server';
import * as fs from 'fs';
import * as path from 'path';
import * as androidJS from "androidjs-builder";
const util = require('util');
const {dialog} = require('electron');
import { buildAPK } from "androidjs-builder/lib/buildAPK";

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
        buildAPK({});
    }

    executeJs(code) {
        this.win.webContents.executeJavaScript(code);
    }
}