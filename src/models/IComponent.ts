import { IProperty } from "./IProperty";

export interface IComponent{
    properties: IProperty[];
    component: (args?: {[key: string]: any}) => any;
    view: any;
    style: any;
    
    children?: IComponent[];
    addChildren?:() => void;

    name: string;
    category: string;
}