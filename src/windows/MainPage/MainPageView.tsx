import * as React from 'react';
const { dialog } = require('electron')
import * as fs from 'fs';
import { WindowProps } from '../Window';
var nmd = require('nano-markdown');

export default class MainPageView extends React.Component<WindowProps, {}>{
    state={
        documentation: ""
    }

    constructor(props: WindowProps){
        super(props);
        var documentationMarkdown = fs.readFileSync(`${__dirname}/../../documentation.md`,'utf-8');
        this.state.documentation = nmd(documentationMarkdown);
    }
    
    createProject(){
        alert(this.props.viewModel.createProject());
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3>App Builder</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div>
                        <a href="#" onClick={() => this.createProject()}>Create new project</a>
                    </div>
                    <div>
                        <a href="#" onClick={()=> this.props.viewModel.openProject()}>Open a project</a>
                    </div>
                </div>
                <div className="col-6">
                    <h4>Documentation</h4>
                        <div dangerouslySetInnerHTML={{__html:this.state.documentation}}>
                    </div>
                </div>
            </div>
        </div>
    }
}