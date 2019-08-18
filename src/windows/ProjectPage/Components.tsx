import * as React from 'react';
import styled from 'styled-components';
import { IComponent } from '../../models/Components/IComponent';
import { BaseColors } from '../../styles/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Space } from '../../styles/Space';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-full-node-drag';

import * as _ from "underscore";

library.add(faTrash, faPlus, faCheck);

interface Props {
    components: IComponent[];
    onComponentsUpdate: (components: IComponent[]) => void;
    selectedComponent: IComponent;
    onSelectComponent: (c: IComponent) => void;
    onRemoveComponent: (components: IComponent[], i: number) => void;
}

interface State {
    selectedComponent: IComponent;
    treeData: any;
}

export class Components extends React.Component<Props, State>{
    constructor(props) {
        super(props);

        this.state = {
            selectedComponent: this.props.selectedComponent,
            treeData: this.props.components.map((c, i) => this.mapToTree(c, undefined, i))
        }
    }

    mapToTree = (c: IComponent, parent: IComponent, index: number) => {
        const Title = styled.div`
            display: flex;
            align-items: center;

            .right-side{
                margin-left: auto;
                display: flex;

                * {
                    margin-right:${Space.sm}
                }
            }
        `;
        return {
            title: <Title onClick={() => this.props.onSelectComponent(c)}>
                {c.name}
                {this.state && this.state.selectedComponent == c && <FontAwesomeIcon style={{ color: BaseColors.green }} icon="check" />}
                <div className="right-side">
                    <ContextMenuTrigger id={`${c.name}`}>
                        <FontAwesomeIcon style={{ color: BaseColors.green }} icon="plus" />
                        <ContextMenu id={`${c.name}`}>
                            <div style={{ backgroundColor: "transparent",
                                          padding: Space.md,
                                          border:"solid 1px black",
                                          zIndex: 999999 
                                    }}>
                                {_.map(c.childrenTypes, (type, key) => {
                                    return <div style={{marginBottom: Space.md}}>
                                        <button className='btn btn-dark' onClick={() => c.addChild(
                                            new type.element(...type.properties))}>{key}</button>
                                    </div>
                                })}
                            </div>
                        </ContextMenu>
                    </ContextMenuTrigger>
                    <span onClick={() => { this.props.onRemoveComponent(parent.children, index) }}> <FontAwesomeIcon style={{ color: BaseColors.red }} icon="trash" /></span>
                </div>
            </Title>,
            subtitle: <div style={{marginTop: "10px"}}>ID: {c.getProperties()['ID'].value}</div>,
            children: c.children.map((sc, i) => this.mapToTree(sc, c, i)),
            expanded: c.expanded,
            component: c
        }
    }

    updateChildren = (treeData) => {
        let newArray = [];
        treeData.forEach(c => {
            const component = c.component;
            newArray.push(component);
            component.expanded = c.expanded;
            component.children = this.updateChildren(c.children);
        });

        return newArray;
    }

    render() {
        return <div>
            <div style={{ overflow: "auto" }}>
                <h6>Components</h6>
                {<SortableTree
                    isVirtualized={true}
                    treeData={this.state.treeData}
                    onChange={treeData => this.props.onComponentsUpdate(this.updateChildren(treeData))}
                />}
            </div>
        </div>
    }
}
