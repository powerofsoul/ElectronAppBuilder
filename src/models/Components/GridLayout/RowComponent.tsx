import { NumericProperty } from "../../../models/Properties/NumericProperty";
import { ColumnComponent } from "./ColumnComponent";
import { Component } from "../../../models/Component";
import { StringProperty } from "../../Properties/StringProperty";

export class RowComponent extends Component {
    constructor(rowCount = () => 1){
        super("Row");

        const onIncrease = () => {
            this.children.push(new ColumnComponent(()=> this.children.length))
        }

        const onDecrease = () => {
            this.children.push(new ColumnComponent(()=> this.children.length))
        }

        this.properties = {
            "Width": new NumericProperty('Columns', 0, 10, onIncrease, onDecrease),
            "BackgroundColor": new StringProperty('Background Color', "transparent")
        }
        
        this.style= () => { return {
            display: "flex",
            width: '100%',
            height: `${100/rowCount()}%`,
            backgroundColor: this.properties['BackgroundColor'].value as string
        }}
    }
}