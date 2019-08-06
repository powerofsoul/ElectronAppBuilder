import { IProperty } from "./IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";
import { Property } from "./Property";

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
        const PropertyContainer = styled.div`
            margin-top: ${Space.sm};
        `;

        return <PropertyContainer key={this.props.property.name}>
                    {this.props.property.name}: <input onChange={(event) => this.props.property.edit(event.target.value)} defaultValue={this.props.property.value.toString()}/>
            </PropertyContainer>
    }
}

