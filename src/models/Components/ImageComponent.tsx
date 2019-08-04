import * as React from 'react';
import { Component } from "../Component";
import { StringProperty } from "../Properties/StringProperty";

export class ImageComponent extends Component {
    constructor(){
        super("Image", "");

        this.properties = {
            "Src": new StringProperty("Src", ""),
            "Width": new StringProperty("Width", "10px"),
            "Height": new StringProperty("Height", "10px")
        }

        this.style= {
            width: this.properties['Width'].value as string,
            height: this.properties['Height'].value as string
        }
        this.view = <img src={this.properties['Src'].value as string} />
    }
}