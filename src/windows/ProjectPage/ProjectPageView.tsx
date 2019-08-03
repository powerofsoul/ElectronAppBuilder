import * as React from 'react';
import styled from 'styled-components';
import { WindowProps } from '../Window';
import { BaseColors } from '../../styles/Colors';
import { Emulator } from './Emulator'
import AceEditor from 'react-ace';
import { Space } from '../../styles/Space';
import { FontSize } from '../../styles/FontSize';
import { Components } from './Components';
import { IComponent } from '../../models/IComponent';
import { GridLayout } from '../../models/Components/GridLayout';

require("brace/mode/javascript");
require("brace/theme/monokai");

enum Tabs {
    Code, Emulator
}

interface State {
    components: IComponent[];
    selectedComponent: IComponent;
    currentTab: Tabs;
}

export default class ProjectPageView extends React.Component<WindowProps, State>{
    code: string;

    updateComponents = () => {
        this.setState({
            components: this.state.components,
            selectedComponent: this.state.selectedComponent
        })
    };

    state = {
        components: [
            new GridLayout(this.updateComponents),
            new GridLayout(this.updateComponents)
        ],
        selectedComponent: undefined,
        currentTab: Tabs.Code
    }

    changeTab = (tab: Tabs) => {
        this.setState({ currentTab: tab })
    }

    render() {
        const LeftSide = styled.div`
            border-right: 1px solid ${BaseColors.white}
        `;

        const RightSide = styled.div`
            background-color: ${BaseColors.white}
            height:
        `;

        const TabButtons = styled.div`
            margin-top: ${Space.md};
            display: flex;
            bottom: 0;
            z-index:9999;
        `;

        const ActiveView = styled.div`
            width: 100%;
            height: 100%;
            background-color: ${BaseColors.white}
        `;

        return <div className="container-fluid">
            <div className="row">
                <LeftSide className="col-3">
                    <Components components={this.state.components} 
                                selectedComponent={this.state.selectedComponent}
                                onComponentSelect={(c)=> this.setState({selectedComponent: c})}
                    />
                    <TabButtons>
                        <button onClick={() => this.changeTab(Tabs.Code)} className="btn btn-outline-secondary">Code</button>
                        <button onClick={() => this.changeTab(Tabs.Emulator)} className="btn btn-outline-secondary">Emulator</button>
                    </TabButtons>
                </LeftSide>
                <RightSide className="col-9">
                    <ActiveView>
                        {this.state.currentTab == Tabs.Code &&
                            <AceEditor
                                mode="javascript"
                                theme="monokai"
                                focus={true}
                                onChange={(code, event) => this.code = code}
                                width="100%"
                                height="100%"
                                style={{fontSize: FontSize.lg}}
                            />
                        }   
                        {this.state.currentTab == Tabs.Emulator && <Emulator>
                            <div>
                                {this.state.components.map(c=> c.component())}
                            </div>
                        </Emulator>}
                    </ActiveView>
                </RightSide>
            </div>
        </div>
    }
}