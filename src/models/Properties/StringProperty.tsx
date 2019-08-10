import { IProperty } from "../IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";
import { Property } from "../Property";

export class StringProperty extends Property {
    name: string;
    value: string;

    render: () => any = () => {
        return <StringPropertyRender property={this}/>;
    }

    constructor(name: string, defaultValue = "") {
        super(name, defaultValue);
    }
}

interface Props{
    property: IProperty;
}

class StringPropertyRender extends React.Component<Props, {}>{
    render() {
        return <input onChange={(event) => this.props.property.edit(event.target.value)} 
                      defaultValue={this.props.property.value.toString()}/>;
    }
}

