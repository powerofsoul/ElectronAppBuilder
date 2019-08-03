export interface IProperty{
    name: string;
    value: number|string|{};
    render: () => React.ComponentClass;
    onPropertyUpdate: () => void;
    
    edit?: (newValue) => void;
    increase?: () => void;
    decrease?: () => void;
}