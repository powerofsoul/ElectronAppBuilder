import * as React from 'react';
import { IComponent, ChildrenTypeList } from "./IComponent";
import { IProperty } from "../IProperty";
import { StringProperty } from '../Properties/StringProperty';
import { StyleProperty } from '../Properties/StyleProperty';

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
    private static getNewUniqueId = () => `ID${Component.maxCurrentUniqueId++}`;
    private uniqueId:string;
    
    public addChild = (child: IComponent) => {
        this.children.push(child);
    }

    public render: () => any = () => {
        return <>
            <style>
                {this.baseProperties['Style'].value}  
            </style>
            <div id={this.baseProperties['ID'].value as string} style={this.style()}>
                {this.view()}
                {this.children.map((c: IComponent) => c.render())}
            </div>
        </>
    }

    constructor(name: string, category: string = "") {
        this.name = name;
        this.category = category;
 
        debugger;
        this.uniqueId = Component.getNewUniqueId();
        this.baseProperties = {
            "ID": new StringProperty("ID", this.uniqueId),
            "Style": new StyleProperty("Style", this.uniqueId,  "")
        }
    }
}