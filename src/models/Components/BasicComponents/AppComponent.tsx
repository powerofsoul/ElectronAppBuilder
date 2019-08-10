import { GridLayout } from "./GridLayout/GridLayout";
import { Component } from "../Component";
import { StringProperty } from "../../Properties/StringProperty";

export class AppComponent extends Component {
    constructor(){
        super("App", "");
        this.children = []

        this.properties = {
            "Icon": new StringProperty("Icon Path", "./assets/icons/icon.png")
        }

        this.style = () => { return {
            position: 'absolute',
            top: "10px",
            left: "10px",
            overflow: "hidden"
        }}

        this.childrenTypes = {
            "Grid Layout": {element: GridLayout, properties: []}
        }
    }
}