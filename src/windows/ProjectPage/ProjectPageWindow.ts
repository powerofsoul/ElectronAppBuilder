import { Window } from "../Window";
import { Project } from "../../models/Project";

export class ProjectPageWindow extends Window{
    constructor(project: Project){
        super(require.resolve('./ProjectPageView'));
    }
}