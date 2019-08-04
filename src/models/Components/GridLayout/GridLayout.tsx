import * as React from 'react';
import { IComponent } from '../../IComponent';
import { IProperty } from '../../IProperty';
import { NumericProperty } from '../../Properties/NumericProperty';
import styled from 'styled-components';
import { StringProperty } from '../../Properties/StringProperty';
import { CheckboxProperty } from '../../Properties/CheckboxProperty';
import { RowComponent } from './RowComponent';
import { Component } from '../../../models/Component';

export class GridLayout extends Component {
    public name: string = "Grid Layout";
    public category: string;

    private RowProperty: NumericProperty;
    private IdProperty: StringProperty;
    private WidthProperty: StringProperty;
    private HeightProperty: StringProperty;
    private IsVisibleProperty: CheckboxProperty;

    public properties: IProperty[];
    public children: RowComponent[] = [];

    public style;
    view;

    constructor() {
        super();
        const onUpdate = () => {
            this.children = Array.from(new Array(this.RowProperty.value).keys()).map(()=> new RowComponent());
        }

        this.RowProperty = new NumericProperty('Rows', 0, 10, onUpdate);
        this.IdProperty = new StringProperty('ID', '');
        this.WidthProperty = new StringProperty('Width', '100%');
        this.HeightProperty = new StringProperty('Height', '100%');
        this.IsVisibleProperty = new CheckboxProperty('IsVisible', false);

        this.properties = [this.RowProperty,
            this.IdProperty,
            this.WidthProperty,
            this.HeightProperty,
            this.IsVisibleProperty
        ];

        this.style = {
            width: this.WidthProperty.value,
            height: this.HeightProperty.value,
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            overflow: "hidden"
        };
    }
}

