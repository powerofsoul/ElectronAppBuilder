import * as React from 'react';
import { Component } from "../Component";
import { StringProperty } from "../../Properties/StringProperty";

export class ParagraphComponent extends Component {
    constructor(){
        super("Paragraph", "");

        this.properties = {
            "Value": new StringProperty("Value", ""),
        }

        this.view = (id) => `<p id='${id}'>${this.properties['Value'].value}</p>`
    }
}