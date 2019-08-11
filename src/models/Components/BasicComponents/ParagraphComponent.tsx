import * as React from 'react';
import { Component } from "../Component";
import { TextProperty } from '../../../models/Properties/TextProperty';

export class ParagraphComponent extends Component {
    constructor(){
        super("Paragraph", "");

        this.properties = {
            "Value": new TextProperty("Value", ""),
        }

        this.view = (id) => `<p id='${id}'>${this.properties['Value'].value}</p>`
    }
}