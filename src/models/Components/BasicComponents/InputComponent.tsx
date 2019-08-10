import * as React from 'react';
import { Component } from "../Component";
import { StringProperty } from "../../Properties/StringProperty";

export class InputComponent extends Component {
    constructor(){
        super("Input", "");

        this.properties = {
            "Value": new StringProperty("Value", ""),
            "Placeholder": new StringProperty("Placeholder", ""),
            "OnInputChange": new StringProperty("On Input Change Function", "")
        }

        this.view = (id) => `<input id='${id}'
                                    placeholder='${this.properties['Placeholder'].value as string}' 
                                    defaultValue='${this.properties['Value'].value as string}'
                        }} />`
    }
}