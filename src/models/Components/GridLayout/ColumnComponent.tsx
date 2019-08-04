import { IComponent } from "../../IComponent";
import { IProperty } from "../../IProperty";
import { Component } from "../../Component";
import * as React from 'react';

export class ColumnComponent extends Component {
    properties: IProperty[] = [];    
     
    name: string = 'Column';
    category: string;

    children: IComponent[] = [];
    
    style = {
        width: "100px"
    }

    view = <div>Column</div>;
}