import { Component } from "../Component";
import { StringProperty } from "../../../models/Properties/StringProperty";
import { ImageComponent } from "../ImageComponent";
import { InputComponent } from "../InputComponent";

export class ColumnComponent extends Component {     
    constructor(columnCount= () => 1){
        super("Column");
        this.properties = {
            "BackgroundColor": new StringProperty('Background Color', "transparent")
        }
        
        this.style= () => { return {
            width: `${100/columnCount()}%`,
            backgroundColor: this.properties['BackgroundColor'].value as string
        }}

        this.childrenTypes = {
           "Image Component": {element: ImageComponent, properties: []}, 
           "Input Component": {element: InputComponent, properties: []}
        }
    }
}