import { IProperty } from "../IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";
import { Property } from "../Property";
import Checkbox from 'react-simple-checkbox';
import { BaseColors } from "../../styles/Colors";

export class CheckboxProperty extends Property {
    value: boolean;

    render: () => any = () => {
        return <CheckboxPropertyRender property={this} />;
    }

    constructor(name: string, value: boolean) {
        super(name, value);
        this.name = name;
        this.value = value;
    }
}

interface Props {
    property: IProperty;
}

class CheckboxPropertyRender extends React.Component<Props, {}>{
    onCheck = (value: boolean) => {
        this.props.property.edit(value);
        this.forceUpdate();
    }

    render() {
        return <Checkbox color={BaseColors.blue} 
                      onChange={this.onCheck}
                      size={1}
                      checked={this.props.property.value}/>
 
    }
}

