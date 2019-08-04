import { NumericProperty } from "../../../models/Properties/NumericProperty";
import { ColumnComponent } from "./ColumnComponent";
import { Component } from "../../../models/Component";

export class RowComponent extends Component {
    constructor(){
        super("Row");
        const onUpdate = () => {
            this.children = Array.from(new Array(this.properties['Width'].value).keys()).map(()=> new ColumnComponent());
        }

        this.properties = {
            "Width": new NumericProperty('Columns', 0, 10, onUpdate)
        }
        
        this.style= {
            display: "flex",
            width: '100%',
            height: "100px"
        }
    }
}