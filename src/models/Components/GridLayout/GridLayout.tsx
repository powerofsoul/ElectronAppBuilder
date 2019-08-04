import { NumericProperty } from '../../Properties/NumericProperty';
import { StringProperty } from '../../Properties/StringProperty';
import { CheckboxProperty } from '../../Properties/CheckboxProperty';
import { RowComponent } from './RowComponent';
import { Component } from '../../../models/Component';

export class GridLayout extends Component {
    constructor() {
        super('Grid Layout', "");

        const onIncrease = () => {
            this.children.push(new RowComponent(() => this.children.length));
        }

        const onDecrease = () => {
            this.children.pop();
        }

        this.properties = {
            "Rows":  new NumericProperty('Rows', 0, 10, onIncrease, onDecrease),
            "ID":  new StringProperty('ID', ''),
            "Width": new StringProperty('Width', '100%'),
            "Height": new StringProperty('Height', '100%'),
            "Visible": new CheckboxProperty('IsVisible', false)
        }
         
        this.style= () => { return {
            width: this.properties['Width'].value as number,
            height: this.properties['Height'].value as number,
        }};
    }
}

