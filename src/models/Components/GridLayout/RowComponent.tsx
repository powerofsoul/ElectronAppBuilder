import { NumericProperty } from "../../../models/Properties/NumericProperty";
import { ColumnComponent } from "./ColumnComponent";
import { Component } from "../../../models/Component";
import { StringProperty } from "../../Properties/StringProperty";

export class RowComponent extends Component {
    constructor(rowCount = () => 1) {
        super("Row");
        this.properties = {
            "BackgroundColor": new StringProperty('Background Color', "transparent")
        }
        
        this.style= () => { return {
            display: "flex",
            width: '100%',
            height: `${100/rowCount()}%`,
            backgroundColor: this.properties['BackgroundColor'].value as string
        }}

        this.childrenTypes = {
            "Column" : {
                element: ColumnComponent, 
                properties: [
                    () => this.children.length
                ]
            }
        }
    }
}