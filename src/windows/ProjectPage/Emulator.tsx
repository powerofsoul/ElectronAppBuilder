import * as React from "react";
import styled from 'styled-components';
import { BaseColors } from "../../styles/Colors";

interface Props{

}

interface State{
 
}

export class Emulator extends React.Component<Props, State>{
    render() {
        const EmulatorContainer = styled.div`
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            height: 90%;;
            background-color: ${BaseColors.black}
        `;

        return <EmulatorContainer />
    }
}