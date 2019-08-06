import { IProperty } from "./IProperty";
import * as React from "react";
import styled from 'styled-components';
import { Space } from "../../styles/Space";
import { Property } from "./Property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus);

export class NumericProperty extends Property {
    value: number;
    increase: () => void;
    decrease: () => void;

    render: () => any = () => {
        return <NumericPropertyRender property={this} />;
    }

    constructor(name: string, min: number, max: number, onIncrease = () => { }, onDecrease = () => { }) {
        super(name, min);
        this.name = name;
        this.value = min;

        this.increase = () => {
            this.value = this.value < max ? this.value + 1 : max;
            onIncrease();
        };
        this.decrease = () => {
            this.value = this.value > min ? this.value - 1 : min;
            onDecrease();
        }
    }
}

interface Props {
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

            span{
                margin-left: 5px;
            }
        `;

        return <PropertyContainer key={this.props.property.name}>
            {this.props.property.name}: {this.props.property.value}
            <span onClick={this.increase}>
                <FontAwesomeIcon icon='plus' />
            </span>
            <span onClick={this.decrease}>
                <FontAwesomeIcon icon='minus' />
            </span>
        </PropertyContainer>
    }
}

