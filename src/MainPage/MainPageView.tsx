import * as React from 'react';
const { dialog } = require('electron')
import * as fs from 'fs';
var nmd = require('nano-markdown');

interface WindowProps {
    events: { [key: string]: () => void }
}

interface Props extends WindowProps {

}

export default class MainPageView extends React.Component<Props, {}>{
    state={
        documentation: ""
    }

    constructor(props: Props){
        super(props);
        var documentationMarkdown = fs.readFileSync(`${__dirname}/../documentation.md`,'utf-8');
        this.state.documentation = nmd(documentationMarkdown);
    }
    
    createProject(){
        alert(this.props.events.createProject());
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
                        <a href="#">Open a project</a>
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