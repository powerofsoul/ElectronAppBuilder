import * as React from 'react';

export class MainPageView extends React.Component{
    render(){
        return <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <center><h3>App Builder</h3></center>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <a href="#">Create new project</a>
                            </div>
                            <div>
                                <a href="#">Open a project</a>
                            </div>
                        </div>
                        <div class="col-6">
                            <h4>Documentation</h4>
                            <div bind="documentation"></div>
                        </div>
                    </div>
                </div>
    }
}