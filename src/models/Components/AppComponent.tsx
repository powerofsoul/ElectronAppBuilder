import { IComponent } from "../IComponent";
import { IProperty } from "../IProperty";
import { GridLayout } from "./GridLayout/GridLayout";
import * as React from 'react';
import { Component } from "../Component";

export class AppComponent extends Component {
    view: any;
    style: any;
    
    properties: IProperty[] = [];    
     
    name: string = 'App';
    category: string;

    children: IComponent[] = [
        new GridLayout()
    ]
}