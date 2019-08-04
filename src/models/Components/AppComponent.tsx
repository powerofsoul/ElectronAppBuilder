import { IComponent } from "../IComponent";
import { IProperty } from "../IProperty";
import { GridLayout } from "./GridLayout/GridLayout";
import * as React from 'react';
import { Component } from "../Component";

export class AppComponent extends Component {
    constructor(){
        super("App", "");
        this.children = [
            new GridLayout()
        ]
    }
}