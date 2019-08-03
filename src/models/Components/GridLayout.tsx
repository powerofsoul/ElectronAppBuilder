import * as React from 'react';
import { IComponent } from '../IComponent';
import { IProperty } from '../IProperty';
import { NumericProperty } from '../Properties/NumericProperty';
import styled from 'styled-components';
import { StringProperty } from '../Properties/StringProperty';

export class GridLayout implements IComponent {
    public name: string = "Grid Layout";
    public category: string;

    private RowProperty: NumericProperty;
    private ColumnProperty: NumericProperty;
    private IdProperty: StringProperty;
    private WidthProperty: StringProperty;
    private HeightProperty: StringProperty;

    public properties: IProperty[];

    constructor(onPropertyUpdate) {
        this.RowProperty = new NumericProperty('Rows', 0, 10, onPropertyUpdate);
        this.ColumnProperty = new NumericProperty('Columns', 0, 10, onPropertyUpdate);
        this.IdProperty = new StringProperty('ID', '', onPropertyUpdate);
        this.WidthProperty = new StringProperty('Width', '90vw', onPropertyUpdate);
        this.HeightProperty = new StringProperty('Height', '90vw', onPropertyUpdate);

        this.properties = [this.RowProperty, this.ColumnProperty, this.IdProperty, this.WidthProperty, this.HeightProperty];
    }

    component() {
        const containerStyle = {
            width: this.WidthProperty.value,
            height: this.HeightProperty.value,
            overflow: "hidden"
        };

        const rowStyle={
            width: "100",
            height: `${100 / this.RowProperty.value}%`,
            display: 'flex'
        }

        const columnStyle = {
            width: `${100 / this.ColumnProperty.value}%`
        }

        const grid =  <div style={containerStyle}>
            {Array.from(Array(this.RowProperty.value).keys()).map((re, ri) =>
                <div style={rowStyle}>
                    {Array.from(Array(this.ColumnProperty.value).keys()).map((ce, ci) =>
                        <div style={columnStyle}>{ri} {ci}</div>)
                    }
                </div>)}
            </div>
            
        return <>
            {grid}
        </>;
    }
}

