import { ColumnComponent } from "./ColumnComponent";
import { Component } from "../../Component";
import { GridLayout } from "./GridLayout";

export class RowComponent extends Component {
    constructor(rowCount = () => 1) {
        super("Row");
        
        this.style= () => { return {
            display: "flex",
            width: '100%',
            height: `${100/rowCount()}%`,
        }}

        this.childrenTypes = {
            "Column" : {
                element: ColumnComponent, 
                properties: [
                    () => this.children.length
                ]
            },
            "Gird Layout": {element: GridLayout, properties: []},
        }
    }
}