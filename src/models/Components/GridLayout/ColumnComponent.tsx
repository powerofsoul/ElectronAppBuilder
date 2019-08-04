import { Component } from "../../Component";

export class ColumnComponent extends Component {     
    constructor(columnCount= () => 1){
        super("Column");

        this.style= () => { return {
            width: `${100/columnCount()}%`
        }}
    }
}