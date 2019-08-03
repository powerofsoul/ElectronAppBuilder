import * as React from 'react';
import styled from 'styled-components';
import { WindowProps } from '../Window';
import { BaseColors } from '../../styles/Colors';
import { Emulator } from './Emulator'
import AceEditor from 'react-ace';
import brace from "brace";

require("brace/mode/javascript");
require("brace/theme/monokai");

enum Tabs{
    Code, Emulator
}

interface State{
    components: any[];
    currentTab: Tabs;
    code: string;
}

export default class ProjectPageView extends React.Component<WindowProps, State>{
    state = {
        components: [
            "List", "String"
        ],
        currentTab: Tabs.Code,
        code: `function add(a, b) {
            return a + b;
        }`
    }

    changeTab = (tab: Tabs) => {
        this.setState({currentTab: tab})
    }

    render(){
        const ComponentsContainer = styled.div`
            min-height: 250px;
        `;

        const LeftSide = styled.div`
            border-right: 1px solid ${BaseColors.white}
        `;

        const RightSide = styled.div`
            background-color: ${BaseColors.white}
            height:
        `;

        const TabButtons = styled.div`
            display: flex;
            bottom: 0;
        `;

        const EditorContainer = styled.div`
            width: 100%;
            height: 90%;
            background-color: ${BaseColors.white}
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
                <RightSide className="col-9">
                    {this.state.currentTab == Tabs.Code && 
                    <EditorContainer key="ace-editor">
                         <AceEditor
                            mode="javascript"
                            theme="monokai"
                            focus={true}
                            value= {this.state.code}
                            onChange={(code, event)=> {
                                    this.setState({code: code})
                                }
                            }
                            width="100%"
                            height="100%"
                            editorProps={{$blockScrolling: true}}
                        />
                    </EditorContainer>}
                    {this.state.currentTab == Tabs.Emulator && <Emulator />}
                    <TabButtons>
                        <button onClick={()=> this.changeTab(Tabs.Code)} className="btn btn-outline-secondar">Code</button>
                        <button onClick={()=> this.changeTab(Tabs.Emulator)} className="btn btn-outline-secondar">Emulator</button>
                    </TabButtons>
                </RightSide>
            </div>
        </div>
    }
}