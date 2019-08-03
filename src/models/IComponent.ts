import { IProperty } from "./IProperty";

export interface IComponent{
    properties: IProperty[];
    component: React.ElementType;

    children: IComponent[];
    addChildren:(component: IComponent) => void;

    name: string;
    category: string;
}