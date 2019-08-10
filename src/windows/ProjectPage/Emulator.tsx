import * as React from "react";
import styled from 'styled-components';
import { BaseColors } from "../../styles/Colors";
import DeviceSimulator from 'react-device-simulator'
import Frame, { FrameContextConsumer } from 'react-frame-component'

interface Props {
    codeText: string;
}

export class Emulator extends React.Component<Props> {
    render() {
        const EmulatorContainer = styled.div`
            div{
                margin-left: auto;
                margin-right: auto;
                display:flex;
            }
        `;

        return <EmulatorContainer>
            <div className="marvel-device note8">
                <div className="inner"></div>
                <div className="overflow">
                    <div className="shadow"></div>
                </div>
                <div className="speaker"></div>
                <div className="sensors"></div>
                <div className="more-sensors"></div>
                <div className="sleep"></div>
                <div className="volume"></div>
                <div className="camera"></div>
                <div className="screen">
                <Frame style={{width: "100%", height: "100%"}}>
                    <FrameContextConsumer>
                    {
                        // Callback is invoked with iframe's window and document instances
                        ({document, window}) => {
                            window.eval(this.props.codeText);
                            return this.props.children;
                        }
                    }
                    </FrameContextConsumer>
                </Frame>

                </div>
            </div>

        </EmulatorContainer>
    }
}