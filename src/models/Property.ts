import { IProperty } from "./IProperty";
import * as React from 'react';

export abstract class Property implements IProperty{
    name: string;
    value: number|string|{};

    render: () => React.ComponentClass<{}, any>;
    
    onPropertyUpdate: () => void;
    edit?: (newValue: any) => void;
    increase?: () => void;
    decrease?: () => void;

    constructor(name, defaultValue: number|string|{}, onPropertyUpdate: ()=> void){
        this.name = name;
        this.value = defaultValue;
        this.onPropertyUpdate = onPropertyUpdate;
    }
}