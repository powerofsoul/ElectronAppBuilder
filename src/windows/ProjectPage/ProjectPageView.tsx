import * as React from 'react';
import styled from 'styled-components';
import { WindowProps } from '../Window';
import { BaseColors } from '../../styles/Colors';
import { Emulator } from './Emulator'
import AceEditor from 'react-ace';
import { Space } from '../../styles/Space';
import { FontSize } from '../../styles/FontSize';
import { Components } from './Components';
import { IComponent } from '../../models/Components/IComponent';
import { AppComponent } from '../../models/Components/BasicComponents/AppComponent';
import ReactDOMServer from 'react-dom/server';
import BlockUi from 'react-block-ui';

require("brace/mode/javascript");
require("brace/theme/monokai");

enum Tabs {
    Code, Emulator
}

interface State {
    components: IComponent[];
    selectedComponent: IComponent;
    currentTab: Tabs;
    loading: boolean;
}

export default class ProjectPageView extends React.Component<WindowProps, State>{
    code: string;

    state = {
        components: [
            new AppComponent()
        ],
        selectedComponent: undefined,
        currentTab: Tabs.Code,
        loading: false
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
        var htmlOutput = ReactDOMServer.renderToString(this.state.components[0].render());
        this.props.viewModel.createOutput(`
            ${htmlOutput}
            <script>
                ${this.generateCodeAndReferences()}
            </script>
            `
        );

        this.props.viewModel.executeJs(this.generateCodeAndReferences());
    }

    getComponentReferences(c: IComponent){
        return `
            '${c.uniqueId}': () => document.getElementById('${c.uniqueId}') ${c.children.length > 0 ? ',' : ''}
             ${c.children.map(child => this.getComponentReferences(child))}
        `;
    }

    generateCodeAndReferences = () => {
        return `code = () => { 
            ${this.code}
        }
        references = { 
            ${this.getComponentReferences(this.state.components[0])}
        }`
    }

    buildAPK = () => {
        this.setState({loading: true});
        this.props.viewModel.buildApk();
    }

    render() {
        this.props.viewModel.executeJs(this.generateCodeAndReferences());
        const LeftSide = styled.div`
            border-right: 1px solid ${BaseColors.white}
            width: 33%;
        `;

        const MiddleSection = styled.div`
            background-color: ${BaseColors.white}
        `;

        const RightSide = styled.div`
            background-color: ${BaseColors.white}
        `;

        const ButtonsContainer = styled.div`
            margin-top: ${Space.md};
            display: flex;
            bottom: 0;
            z-index:9999;

            button {
                margin-right: ${Space.md};
            }
        `;

        const ActiveView = styled.div`
            width: 100%;
            height: 100%;
            background-color: ${BaseColors.white}
        `;

        const PropertyContainer = styled.div`
            margin-top: ${Space.md}
        `;

        const properties = this.state.selectedComponent ? this.state.selectedComponent.getProperties() : {};

        return <div className="container-fluid">
            <BlockUi blocking={this.state.loading}>
                <div className="row">
                    <LeftSide className="col-5">
                        <div style={{height:"80%", overflow:"auto"}}>
                            <Components components={this.state.components} 
                                        onComponentsUpdate={(components) => this.setState({components})}
                                        selectedComponent={this.state.selectedComponent}
                                        onSelectComponent={(c)=> this.setState({selectedComponent: c})}
                                        onRemoveComponent={this.removeComponent}
                            />
                        </div>
                        <div style={{height:"20%"}}>
                            <ButtonsContainer>
                                <button onClick={()=> this.refresh()}
                                                    className="btn btn-success">
                                    Apply Changes
                                </button>
                                <button onClick={()=> this.buildAPK()}
                                                    className="btn btn-danger">
                                    Build Apk
                                </button>
                            </ButtonsContainer>
                            <ButtonsContainer>
                                <button onClick={() => this.changeTab(Tabs.Code)} className="btn btn-outline-secondary">Code</button>
                                <button onClick={() => this.changeTab(Tabs.Emulator)} className="btn btn-outline-secondary">Emulator</button>
                            </ButtonsContainer>
                        </div>
                    </LeftSide>
                    <MiddleSection className="col-3">
                        <h6>Properties</h6>
                        {this.state.selectedComponent && this.state.selectedComponent.properties &&
                        Object.keys(properties).map(
                            (key: string) => <PropertyContainer>
                                <div>{properties[key].name}</div>
                                {properties[key].render()}
                            </PropertyContainer>
                        )}
                    </MiddleSection>
                    <RightSide className="col-4">
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
                            {this.state.currentTab == Tabs.Emulator && <Emulator codeText={this.generateCodeAndReferences()}>
                                    <div>
                                        {this.state.components.map(c=> c.render())}
                                    </div>
                                </Emulator>
                            }
                        </ActiveView>
                    </RightSide>
                </div>
            </BlockUi>
        </div>
    }
}