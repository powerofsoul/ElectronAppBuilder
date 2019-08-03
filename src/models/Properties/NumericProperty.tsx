import { IProperty } from "../IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";
import { Property } from "../Property";

export class NumericProperty extends Property {
    value: number;
    increase: () => void;
    decrease: () => void;

    render: () => any = () => {
        return <NumericPropertyRender property={this}/>;
    }

    constructor(name: string, min: number, max: number, onPropertyUpdate) {
        super(name, min, onPropertyUpdate);
        this.name = name;
        this.value = min;
        this.onPropertyUpdate = onPropertyUpdate;

        this.increase = () => {
            this.value = this.value < max ? this.value + 1 : max;
            this.onPropertyUpdate();
        };
        this.decrease = () => {
            this.value = this.value > min ? this.value - 1 : min;
            this.onPropertyUpdate();
        }
    }
}

interface Props{
    property: IProperty;
}

class NumericPropertyRender extends React.Component<Props, {}>{
    increase = () => {
        this.props.property.increase();
        this.forceUpdate();
    }

    decrease = () => {
        this.props.property.decrease();
        this.forceUpdate();
    }

    render() {
        const PropertyContainer = styled.div`
            margin-top: ${Space.sm};
        `;
        return <PropertyContainer key={this.props.property.name}>
                    {this.props.property.name}: {this.props.property.value} <span onClick={this.increase}>+</span> <span onClick={this.decrease}>-</span>
            </PropertyContainer>
    }
}

