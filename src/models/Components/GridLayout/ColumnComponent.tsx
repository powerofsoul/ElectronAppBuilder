import { IComponent } from "../../IComponent";
import { IProperty } from "../../IProperty";
import { Component } from "../../Component";
import * as React from 'react';

export class ColumnComponent extends Component {     
    children: IComponent[] = [];
    
    style = {
        width: "100px"
    }

    view = <div>Column</div>;

    constructor(){
        super("Column");
    }
}