import { NumericProperty } from '../../Properties/NumericProperty';
import { StringProperty } from '../../Properties/StringProperty';
import { CheckboxProperty } from '../../Properties/CheckboxProperty';
import { RowComponent } from './RowComponent';
import { Component } from '../../../models/Component';

export class GridLayout extends Component {
    constructor() {
        super('Grid Layout', "");
        const onUpdate = () => {
            this.children = Array.from(new Array(this.properties['Rows'].value).keys()).map(()=> new RowComponent());
        }

        this.properties = {
            "Rows":  new NumericProperty('Rows', 0, 10, onUpdate),
            "ID":  new StringProperty('ID', ''),
            "Width": new StringProperty('Width', '100%'),
            "Height": new StringProperty('Height', '100%'),
            "Visible": new CheckboxProperty('IsVisible', false)
        }
         
        this.style = {
            width: this.properties['Width'].value as number,
            height: this.properties['Height'].value as number,
            position: 'absolute' as 'absolute',
            top: 0,
            left: 0,
            overflow: "hidden"
        };
    }
}

