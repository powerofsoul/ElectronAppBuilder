import { IProperty } from "../IProperty";

export interface IComponent{
    name: string;
    category: string;
    
    view: (id: string) => any;
    style: () => React.CSSProperties;

    properties: {[key: string]: IProperty};
    getProperties: () => {[key: string]: IProperty};

    render: () => any;
    addChild: (child: IComponent) => void;

    children?: IComponent[];
    childrenTypes: ChildrenTypeList;

    uniqueId: string;

    expanded: boolean;
}

export interface ChildrenTypeList{
    [name: string]: {element: any, properties: any[]}
}