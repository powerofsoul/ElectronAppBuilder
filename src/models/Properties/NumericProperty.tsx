import { IProperty } from "../IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";

export class NumericProperty implements IProperty {
    name: string;
    value: number;
    
    increase: () => void;
    decrease: () => void;

    render: () => any = () => {
        return <NumericPropertyRender property={this}/>;
    }

    constructor(name: string, min: number, max: number) {
        this.name = name;
        this.value = min;
        this.increase = () => {
            this.value = this.value < max ? this.value + 1 : max;
        };
        this.decrease = () => {
            this.value = this.value > min ? this.value - 1 : min;
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
                    Value: {this.props.property.value} <span onClick={this.increase}>+</span> <span onClick={this.decrease}>-</span>
            </PropertyContainer>
    }
}

