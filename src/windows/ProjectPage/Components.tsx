import * as React from 'react';
import styled from 'styled-components';
import { IComponent } from '../../models/IComponent';
import { IProperty } from '../../models/IProperty';
import { BaseColors } from '../../styles/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Space } from '../../styles/Space';

library.add(faTrash);

interface Props{
    components: IComponent[];
    selectedComponent: IComponent;
    onSelectComponent: (c: IComponent) => void;
    onRemoveComponent: (i: number) => void;
}

interface State{
    selectedComponent: IComponent;
}

export class Components extends React.Component<Props, State>{
    state = {
        selectedComponent: this.props.selectedComponent
    }

    render(){
        const ComponentsContainer = styled.div`
            height: 40%;
            overflow-x: hidden;
            overflow-y: show;
        `;

        return <>
            <ComponentsContainer className="">
                <h6>Components</h6>
                <ul>
                    {this.props.components && this.props.components.map((component, i) =>
                        <li key={i}>
                            <span onClick={()=> this.props.onSelectComponent(component)}>{component.name}</span>
                            <i style={{color: BaseColors.red, marginLeft: Space.sm}} 
                                    onClick={()=> {this.props.onRemoveComponent(i)}}>
                                        <FontAwesomeIcon icon="trash"/>
                            </i>
                        </li>)}
                </ul>
            </ComponentsContainer>
            <ComponentsContainer>
                <h6>Properties</h6>
                {this.state.selectedComponent && this.state.selectedComponent.properties.map((p: IProperty) => p.render())}
            </ComponentsContainer>
        </>
    }
}
