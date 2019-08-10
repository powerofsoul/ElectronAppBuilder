import { Component } from "../Component";
import { StringProperty } from "../../../models/Properties/StringProperty";
import { ImageComponent } from "../ImageComponent";
import { InputComponent } from "../InputComponent";

export class ColumnComponent extends Component {     
    constructor(columnCount= () => 1){
        super("Column");
        
        this.style= () => { return {
            width: `${100/columnCount()}%`,
        }}

        this.childrenTypes = {
           "Image Component": {element: ImageComponent, properties: []}, 
           "Input Component": {element: InputComponent, properties: []}
        }
    }
}