import * as React from 'react';
import { IComponent } from '../IComponent';
import { IProperty } from '../IProperty';
import { NumericProperty } from '../Properties/NumericProperty';
import styled from 'styled-components';

export class GridLayout implements IComponent {
    public name: string = "Grid Layout";
    public category: string;

    private RowProperty: NumericProperty = new NumericProperty('Rows', 0 , 10);
    private ColumnProperty: NumericProperty = new NumericProperty('Columns', 0 , 10);

    public properties: IProperty[] = [this.ColumnProperty, this.RowProperty];

    children: IComponent[] = [];
    addChildren: (component: IComponent) => void = ()=>{};

    component() {
        const Row = styled.div`
            display:flex;
            width:100%;
        `;

        const Column = styled.div`
            width: ${100/this.ColumnProperty.value}%
        `;

        const grid = Array.from(Array(this.RowProperty.value).keys()).map(()=>{
            <Row>
                {Array.from(Array(this.RowProperty.value).keys()).map(()=> <Column>TEST</Column>)}
            </Row>
        })

        return <div>
             {grid}
        </div>
    }
}

