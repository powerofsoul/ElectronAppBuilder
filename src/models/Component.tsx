import * as React from 'react';
import { IComponent } from "./IComponent";
import { IProperty } from "./IProperty";

export class Component implements IComponent {
    public name: string;
    public category: string;

    public view = () => <></>;
    public style: () => React.CSSProperties = () => { return {} }

    public properties: { [key: string]: IProperty } = {};
    public children: IComponent[] = [];

    public addChild = (child: IComponent) => {
        this.children.push(child);
    }

    private render: (component: IComponent) => any = (component) => {
        return <div style={component.style()}>
            {component.view()}
            {component.children.map(c => this.render(c))}
        </div>
    }

    component: () => any = () => {
        return <div>
            {this.render(this)}
        </div>
    };

    constructor(name: string, category: string = "") {
        this.name = name;
        this.category = category;
    }
}