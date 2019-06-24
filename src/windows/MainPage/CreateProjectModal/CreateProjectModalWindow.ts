import { Window } from "../../Window";

export class MainPageWindow extends Window{
    constructor(){
        super(require.resolve("./CreateProjectModalView"));
    }

    getProps(){
        return {};
    }
}