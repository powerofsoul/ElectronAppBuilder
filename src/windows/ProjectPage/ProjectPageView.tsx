import * as React from 'react';
import styled from 'styled-components';
import { WindowProps } from '../Window';
import { BaseColors } from '../../styles/Colors';
import { Emulator } from './Emulator'
import AceEditor from 'react-ace';
import { Space } from '../../styles/Space';
import { FontSize } from '../../styles/FontSize';

require("brace/mode/javascript");
require("brace/theme/monokai");

enum Tabs {
    Code, Emulator
}

interface State {
    components: any[];
    currentTab: Tabs;
}

export default class ProjectPageView extends React.Component<WindowProps, State>{
    code: string;

    state = {
        components: [
            "List", "String"
        ],
        currentTab: Tabs.Code
    }

    changeTab = (tab: Tabs) => {
        this.setState({ currentTab: tab })
    }

    render() {
        const ComponentsContainer = styled.div`
            height: 40%;
        `;

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
                    <ComponentsContainer className="">
                        <h6>Components</h6>
                        <ul>
                            {this.state.components.map((e, i) => <li key={i}>{e}</li>)}
                        </ul>
                    </ComponentsContainer>
                    <ComponentsContainer>
                        <h6>Properties</h6>
                    </ComponentsContainer>
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
                        {this.state.currentTab == Tabs.Emulator && <Emulator />}
                    </ActiveView>
                </RightSide>
            </div>
        </div>
    }
}