import * as React from 'react';
import { Component } from "../Component";
import { StringProperty } from "../../Properties/StringProperty";

export class ButtonComponent extends Component {
    constructor(){
        super("Button", "");

        this.properties = {
            "OnClickMethod": new StringProperty("Value", ""),
            "Text": new StringProperty("Text", "Button"),
        }

        this.view = (id) => <button id={id}>{this.properties['Text'].value}</button>;
    }
}