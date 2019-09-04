import { NumericProperty } from '../../../Properties/NumericProperty';
import { StringProperty } from '../../../Properties/StringProperty';
import { CheckboxProperty } from '../../../Properties/CheckboxProperty';
import { RowComponent } from './RowComponent';
import { Component } from '../../Component';
import { ColumnComponent } from './ColumnComponent';

export class GridLayout extends Component {
    constructor() {
        super('Grid Layout', "");

        this.properties = {
            "ID":  new StringProperty('ID', ''),
            "Width": new StringProperty('Width', '100vw'),
            "Height": new StringProperty('Height', '100vh'),
            "Visible": new CheckboxProperty('IsVisible', false)
        }
         
        this.style= () => { return {
            width: this.properties['Width'].value as number,
            height: this.properties['Height'].value as number,
        }};

        this.childrenTypes = {
            "Row": {
                element: RowComponent,
                properties: [
                    () => this.children.length
                ]
            }
        }
    }
}

