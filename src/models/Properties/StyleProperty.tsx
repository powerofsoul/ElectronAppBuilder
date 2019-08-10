import { IProperty } from "../IProperty";
import * as React from "react";
import { Property } from "../Property";
import { FontSize } from "../../styles/FontSize";
import AceEditor from 'react-ace';
import brace from 'brace';

require("brace/mode/css");
require("brace/theme/monokai");

export class StyleProperty extends Property {
    name: string;
    value: string;
    id: string;

    render: () => any = () => {
        return <StylePropertyRender property={this}/>;
    }

    constructor(name: string, id: string,  defaultValue = "") {
        super(name, defaultValue);
        this.id = id;
    }
}

interface Props{
    property: StyleProperty;
}

class StylePropertyRender extends React.Component<Props, {}>{
    render() {
        const initialCode =this.props.property.value.toString().trim() =="" ? `#${this.props.property.id} { 
            ${this.props.property.value.toString()}
}` : this.props.property.value.toString();

        return <AceEditor
                    mode="css"
                    theme="monokai"
                    onChange={(code, event) => this.props.property.edit(code)}
                    width="100%"
                    value={initialCode}
                    height="200px"
                    style={{fontSize: FontSize.md}}
        />
    }
}

