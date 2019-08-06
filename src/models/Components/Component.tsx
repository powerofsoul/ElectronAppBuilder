import * as React from 'react';
import { IComponent, ChildrenTypeList } from "./IComponent";
import { IProperty } from "../Properties/IProperty";
import { StringProperty } from '../Properties/StringProperty';

export class Component implements IComponent {
    public name: string;
    public category: string;

    public view = () => <></>;
    public style: () => React.CSSProperties = () => { return {} }

    public properties: { [key: string]: IProperty } = {};
    public baseProperties: {[key: string]: IProperty};

    public getProperties = () => {
        return {
            ...this.properties,
            ...this.baseProperties
        }
    }

    public children: IComponent[] = [];
    public childrenTypes: ChildrenTypeList = {};

    private static maxCurrentUniqueId = 0;
    private static getNewUniqueId = () => `maxUniqueId${Component.maxCurrentUniqueId++}`;
    private uniqueId:string;

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
 
        this.uniqueId = Component.getNewUniqueId();
        this.baseProperties = {
            "ID": new StringProperty("ID", this.uniqueId)
        }
    }
}