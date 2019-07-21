import * as React from 'react';
import styled from 'styled-components';
import { WindowProps } from '../Window';
import { BaseColors } from '../../styles/Colors';

interface State{
    components: any[];
}

export default class ProjectPageView extends React.Component<WindowProps, State>{
    state = {
        components: [
            "List", "String"
        ]
    }

    render(){
        const ComponentsContainer = styled.div`
            min-height: 250px;
        `;

        const LeftSide = styled.div`
            border-right: 1px solid ${BaseColors.white}
        `;

        return  <div className="container-fluid">
            <div className="row"> 
                <LeftSide className="col-3">
                    <ComponentsContainer className="">
                        <h6>Components</h6>
                        <ul>
                            {this.state.components.map((e, i)=> <li key={i}>{e}</li>)}
                        </ul>
                    </ComponentsContainer>
                    <ComponentsContainer>
                        <h6>Properties</h6>
                    </ComponentsContainer>
                </LeftSide>
                <div className="col-9">Right Side</div>
            </div>
        </div>
    }
}