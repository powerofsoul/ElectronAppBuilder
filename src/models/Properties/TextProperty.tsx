import { IProperty } from "../IProperty";
import * as React from "react";
import { Property } from "../Property";

export class TextProperty extends Property {
    name: string;
    value: string;

    render: () => any = () => {
        return <TextPropertyRender property={this}/>;
    }

    constructor(name: string, defaultValue = "") {
        super(name, defaultValue);
    }
}

interface Props{
    property: IProperty;
}

class TextPropertyRender extends React.Component<Props, {}>{
    render() {
        return <textarea onChange={(event) => this.props.property.edit(event.target.value)} 
                      >{this.props.property.value.toString()}</textarea>;
    }
}

