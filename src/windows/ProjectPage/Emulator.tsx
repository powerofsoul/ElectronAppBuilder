import * as React from "react";
import styled from 'styled-components';
import { BaseColors } from "../../styles/Colors";
import DeviceSimulator from 'react-device-simulator'

export class Emulator extends React.Component{
    render() {
        const EmulatorContainer = styled.div`
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 90%;;
            background-color: ${BaseColors.black}
        `;

        return <EmulatorContainer>
            <DeviceSimulator>
                {this.props.children}
            </DeviceSimulator>
        </EmulatorContainer>
    }
}