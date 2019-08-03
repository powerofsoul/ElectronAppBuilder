import * as React from 'react';
import styled from 'styled-components';
import { IComponent } from '../../models/IComponent';
import { IProperty } from '../../models/IProperty';

interface Props{
    components: IComponent[];
}

interface State{
    selectedComponent: IComponent;
}

export class Components extends React.Component<Props, State>{
    state = {
        selectedComponent: undefined
    }

    render(){
        const ComponentsContainer = styled.div`
            height: 40%;
        `;

        return <>
            <ComponentsContainer className="">
                <h6>Components</h6>
                <ul>
                    {this.props.components && this.props.components.map((component, i) =>
                         <li key={i} onClick={()=> this.setState({selectedComponent: component})}>{component.name}</li>)}
                </ul>
            </ComponentsContainer>
            <ComponentsContainer>
                <h6>Properties</h6>
                {this.state.selectedComponent && this.state.selectedComponent.properties.map( (p: IProperty) => p.render())}
            </ComponentsContainer>
        </>
    }
}
