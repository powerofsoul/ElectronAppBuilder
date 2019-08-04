import * as React from 'react';
import { Component } from "../Component";
import { StringProperty } from "../Properties/StringProperty";

export class InputComponent extends Component {
    constructor(){
        super("Input", "");

        this.properties = {
            "Value": new StringProperty("Value", ""),
            "Placeholder": new StringProperty("Placeholder", "")
        }

        this.view = () => <input placeholder={this.properties['Placeholder'].value as string} 
                                 defaultValue = {this.properties['Value'].value as string}
                                 onChange = {(e) => this.properties['Value'].edit(e.target.value)} />
    }
}