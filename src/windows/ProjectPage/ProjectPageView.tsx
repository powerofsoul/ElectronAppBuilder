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
import { GridLayout } from '../../models/Components/GridLayout/GridLayout';
import { AppComponent } from '../../models/Components/AppComponent';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';

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

    state = {
        components: [
            new AppComponent()
        ],
        selectedComponent: undefined,
        currentTab: Tabs.Code
    }

    changeTab = (tab: Tabs) => {
        this.setState({ currentTab: tab })
    }

    removeComponent = (components: IComponent[], index: number) => {
        components.splice(index, 1);
        this.setState({
            components: this.state.components
        });
    }

    refresh = () => {
        this.setState({components: this.state.components});
        var htmlOutput = ReactDOMServer.renderToString(this.state.components[0].component());
        this.props.viewModel.createOutput(htmlOutput);
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

        const ApplyChangesButton = styled.button`
            margin-left:auto;
            margin-right:auto;
        `;

        const ButtonsContainer = styled.div`
            margin-top: ${Space.sm}
        `;

        return <div className="container-fluid">
            <div className="row">
                <LeftSide className="col-3">
                    <Components components={this.state.components} 
                                selectedComponent={this.state.selectedComponent}
                                onSelectComponent={(c)=> this.setState({selectedComponent: c})}
                                onRemoveComponent={this.removeComponent}
                    />
                    <ButtonsContainer>
                        <ApplyChangesButton onClick={()=> this.refresh()}
                                            className="btn btn-success">
                            Apply Changes
                        </ApplyChangesButton>
                        <ApplyChangesButton onClick={()=> this.props.viewModel.buildApk()}
                                            className="btn btn-danger">
                            Build Apk
                        </ApplyChangesButton>
                        <TabButtons>
                            <button onClick={() => this.changeTab(Tabs.Code)} className="btn btn-outline-secondary">Code</button>
                            <button onClick={() => this.changeTab(Tabs.Emulator)} className="btn btn-outline-secondary">Emulator</button>
                        </TabButtons>
                    </ButtonsContainer>
                </LeftSide>
                <RightSide className="col-9">
                    <ActiveView>
                        {this.state.currentTab == Tabs.Code &&
                            <AceEditor
                                mode="javascript"
                                theme="monokai"
                                onChange={(code, event) => this.code = code}
                                width="100%"
                                value={this.code}
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