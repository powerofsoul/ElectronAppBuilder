import * as React from 'react';
import styled from 'styled-components';
import { IComponent } from '../../models/Components/IComponent';
import { BaseColors } from '../../styles/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Space } from '../../styles/Space';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import * as _ from "underscore";

library.add(faTrash);

interface Props {
    components: IComponent[];
    selectedComponent: IComponent;
    onSelectComponent: (c: IComponent) => void;
    onRemoveComponent: (components: IComponent[], i: number) => void;
}

interface State {
    selectedComponent: IComponent;
}

export class Components extends React.Component<Props, State>{
    state = {
        selectedComponent: this.props.selectedComponent
    }

    renderComponents = (components: IComponent[]) => {
        const ComponentSpan = styled.span`
            i {
                display:none;
            }

            &:hover i{
                display: inline-block;
            }
        `;
        
        return components.map((component, i) =>
            <ul>
                <li key={i}>
                    <ContextMenuTrigger id={`${component.name}${i}`}>
                        <ComponentSpan onClick={() => this.props.onSelectComponent(component)}>
                            {component.name}
                            <i style={{ color: BaseColors.red, marginLeft: Space.sm }}
                                onClick={() => { this.props.onRemoveComponent(components, i) }}>
                                <FontAwesomeIcon icon="trash" />
                            </i>
                            <ContextMenu id={`${component.name}${i}`}>
                                <div style={{backgroundColor: "white", width:"100px", height: "100px", zIndex:999999}}>
                                    {_.map(component.childrenTypes, (type, key)=> {
                                       return <button onClick={()=> component.addChild(
                                           new type.element(...type.properties))}>{key}</button>
                                    })}
                                </div>
                            </ContextMenu>
                        </ComponentSpan>

                        {component.children && this.renderComponents(component.children)}
                    </ContextMenuTrigger>

                </li>
            </ul>)
    }

    render() {
        const ComponentsContainer = styled.div`
            height: 40%;
            overflow-x: hidden;
            overflow-y: show;
        `;

        const properties = this.state.selectedComponent ? this.state.selectedComponent.getProperties() : {};
        return <>
            <ComponentsContainer className="">
                <h6>Components</h6>
                {this.renderComponents(this.props.components)}
            </ComponentsContainer>
            <ComponentsContainer>
                <h6>Properties</h6>
                {this.state.selectedComponent && this.state.selectedComponent.properties &&
                    Object.keys(properties).map(
                        (key: string) => properties[key].render())
                }
            </ComponentsContainer>
        </>
    }
}
