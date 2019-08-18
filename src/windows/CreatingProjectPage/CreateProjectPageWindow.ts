import { Window } from "../Window";
import { dialog } from "electron";
import * as fs from 'fs';
import { Project } from "../../models/Project";
import { ProjectPageWindow } from "../ProjectPage/ProjectPageWindow";
var ncp = require('ncp').ncp;

export class CreateProjectPageWindow extends Window{
    constructor(){
        super(require.resolve('./CreateProjectPageView'), "Create project page!", 300, 300);
    }

    close() {
        this.hide();
    }
}