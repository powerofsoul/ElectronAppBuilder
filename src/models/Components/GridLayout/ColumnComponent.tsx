import { Component } from "../../Component";

export class ColumnComponent extends Component {     
    constructor(){
        super("Column");

        this.style= () => { return {
            width: "100px"
        }}
    }
}