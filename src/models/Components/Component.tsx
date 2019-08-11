import * as React from 'react';
import { IComponent, ChildrenTypeList } from "./IComponent";
import { IProperty } from "../IProperty";
import { StringProperty } from '../Properties/StringProperty';
import { StyleProperty } from '../Properties/StyleProperty';

export class Component implements IComponent {
    public name: string;
    public category: string;

    public view: (id) => string = (id) => "";
    public style: () => React.CSSProperties = () => { return {} }

    public properties: { [key: string]: IProperty } = {};
    public baseProperties: { [key: string]: IProperty };

    public expanded = true;

    public getProperties = () => {
        return {
            ...this.properties,
            ...this.baseProperties
        }
    }

    public children: IComponent[] = [];
    public childrenTypes: ChildrenTypeList = {};

    private static maxCurrentUniqueId = 0;
    private static getNewUniqueId = () => `ID${Component.maxCurrentUniqueId++}`;
    public uniqueId: string;

    public addChild = (child: IComponent) => {
        this.children.push(child);
    }

    public render: () => any = () => {
        return <>
            <style>
                {this.baseProperties['Style'].value}
            </style>
            <div style={this.style()} id={this.view(this.baseProperties['ID'].value) == "" && this.baseProperties['ID'].value.toString()}>
                    <span dangerouslySetInnerHTML={{ __html: this.view(this.baseProperties['ID'].value) }}/>
                    {this.children.map((c: IComponent) => c.render())}      
            </div>
        </>
    }

    constructor(name: string, category: string = "") {
        this.name = name;
        this.category = category;

        this.uniqueId = Component.getNewUniqueId();
        this.baseProperties = {
            "ID": new StringProperty("ID", this.uniqueId),
            "Style": new StyleProperty("Style", this.uniqueId, "")
        }
    }
}