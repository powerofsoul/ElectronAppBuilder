import * as React from 'react';
import { IComponent } from "./IComponent";
import { IProperty } from "./IProperty";

export abstract class Component implements IComponent {
    properties: IProperty[]; 
    children?: IComponent[];
    addChildren?: () => void;
    name: string;
    category: string;
    abstract view;
    abstract style;

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
}