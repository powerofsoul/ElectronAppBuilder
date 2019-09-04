import { Component } from "../../Component";
import { StringProperty } from "../../../Properties/StringProperty";
import { ImageComponent } from "../ImageComponent";
import { InputComponent } from "../InputComponent";
import { ButtonComponent } from "../ButtonComponent";
import { ParagraphComponent } from "../ParagraphComponent";
import { GridLayout } from "./GridLayout";


export class ColumnComponent extends Component {     
    constructor(columnCount= () => 1){
        super("Column");
        
        this.style= () => { return {
            width: `${100/columnCount()}%`,
        }}

        this.childrenTypes = {
           "New Image": {element: ImageComponent, properties: []}, 
           "New Input": {element: InputComponent, properties: []},
           "New Button": {element: ButtonComponent, properties: []},
           "New paragraph": {element: ParagraphComponent, properties: []},
           "Gird Layout": {element: GridLayout, properties: []},
        }
    }
}