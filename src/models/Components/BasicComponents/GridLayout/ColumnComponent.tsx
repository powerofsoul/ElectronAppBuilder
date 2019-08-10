import { Component } from "../../Component";
import { StringProperty } from "../../../Properties/StringProperty";
import { ImageComponent } from "../ImageComponent";
import { InputComponent } from "../InputComponent";
import { ButtonComponent } from "../ButtonComponent";


export class ColumnComponent extends Component {     
    constructor(columnCount= () => 1){
        super("Column");
        
        this.style= () => { return {
            width: `${100/columnCount()}%`,
        }}

        this.childrenTypes = {
           "New Image": {element: ImageComponent, properties: []}, 
           "New Component": {element: InputComponent, properties: []},
           "New Button": {element: ButtonComponent, properties: []}
        }
    }
}