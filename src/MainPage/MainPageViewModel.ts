import { ViewModel } from "../ViewModel";
const fs = require('fs');
var nmd = require('nano-markdown');

export class MainWindowViewModel extends ViewModel{
    public documentation:string;

    constructor() {
        super();
        var documentationMarkdown = fs.readFileSync(`${__dirname}/../documentation.md`,'utf-8');
        this.documentation = nmd(documentationMarkdown);
    }
}