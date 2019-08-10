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
            width:'100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            overflow: "hidden"
        }}

        this.childrenTypes = {
            "Grid Layout": {element: GridLayout, properties: []}
        }
    }
}