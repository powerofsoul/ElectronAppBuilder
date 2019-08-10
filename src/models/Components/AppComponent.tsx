import { IComponent } from "./IComponent";
import { IProperty } from "../IProperty";
import { GridLayout } from "./GridLayout/GridLayout";
import * as React from 'react';
import { Component } from "./Component";
import { StringProperty } from "../Properties/StringProperty";

export class AppComponent extends Component {
    constructor(){
        super("App", "");
        this.children = []

        this.properties = {
            "bc": new StringProperty("Background-Color", "transparent")
        }

        this.style = () => { return {
            backgroundColor: this.properties['bc'].value as string,
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