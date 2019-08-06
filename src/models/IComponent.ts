import { IProperty } from "./IProperty";

export interface IComponent{
    name: string;
    category: string;
    
    view: () => any;
    style: () => React.CSSProperties;

    properties: {[key: string]: IProperty};
    getProperties: () => {[key: string]: IProperty};

    component: (args?: {[key: string]: any}) => any;
    addChild: (child: IComponent) => void;

    children?: IComponent[];
    childrenTypes: ChildrenTypeList;
}

export interface ChildrenTypeList{
    [name: string]: {element: any, properties: any[]}
}