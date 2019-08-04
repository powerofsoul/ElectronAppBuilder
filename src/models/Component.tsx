import * as React from 'react';
import { IComponent } from "./IComponent";
import { IProperty } from "./IProperty";

export class Component implements IComponent {
    public name: string;
    public category: string;

    public view = <></>;
    public style: React.CSSProperties = {}

    public properties: {[key: string]: IProperty} = {}; 
    public children: IComponent[] = [];

    private render: (component: IComponent) => any = (component) => {
        return component.children.map(c=> <div style={c.style}>
                {c.view}
                {this.render(c)}
                </div>
            )
      
    }

    component: () => any = () => {
        return <div>
            {this.render(this)}
        </div>
    };

    constructor(name: string, category: string = ""){
        this.name = name;
        this.category = category;
    }
}