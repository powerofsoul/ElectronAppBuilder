import { IComponent } from "../../IComponent";
import { IProperty } from "../../IProperty";
import { GridLayout } from "./../GridLayout/GridLayout";
import * as React from 'react';
import { NumericProperty } from "../../../models/Properties/NumericProperty";
import { ColumnComponent } from "./ColumnComponent";
import { Component } from "../../../models/Component";

export class RowComponent extends Component {
    properties: IProperty[] = [];    
     
    name: string = 'Row';
    category: string;

    children: IComponent[] = [];
    private ColumnProperty: NumericProperty;
    
    style= {
        display: "flex",
        width: '100%',
        height: "100px"
    }

    view;

    constructor(){
        super();
        const onUpdate = () => {
            this.children = Array.from(new Array(this.ColumnProperty.value).keys()).map(()=> new ColumnComponent());
        }

        this.ColumnProperty = new NumericProperty('Columns', 0, 10, onUpdate);

        this.properties = [
            this.ColumnProperty
        ]
    }
}