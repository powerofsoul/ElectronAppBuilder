import { IProperty } from "./IProperty";
import * as React from 'react';

export abstract class Property implements IProperty{
    name: string;
    value: number|string|boolean;

    abstract render: () => React.ComponentClass<{}, any>;
    edit = (newValue) => {
        this.value = newValue;
    };

    increase?: () => void;
    decrease?: () => void;

    constructor(name, defaultValue: number|string|boolean, onUpdate = () => {}){
        this.name = name;
        this.value = defaultValue;
    }
}