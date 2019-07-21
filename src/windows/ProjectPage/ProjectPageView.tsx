import * as React from 'react';
import { WindowProps } from '../Window';

export class ProjectPageView extends React.Component<WindowProps>{
    render(){
        return <div className="row"> 
            <div className="col-3">Left Side</div>
            <div className="col-9">Right Side</div>
        </div>
    }
}