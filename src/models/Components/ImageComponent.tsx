import * as React from 'react';
import { Component } from "./Component";
import { StringProperty } from "../Properties/StringProperty";

export class ImageComponent extends Component {
    constructor(){
        super("Image", "");

        this.properties = {
            "Src": new StringProperty("Src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/286px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"),
            "Width": new StringProperty("Width", "10px"),
            "Height": new StringProperty("Height", "10px")
        }

        this.view = () => <img src={this.properties['Src'].value as string} style= {{
            width: this.properties['Width'].value as string,
            height: this.properties['Height'].value as string
        }}/>
    }
}