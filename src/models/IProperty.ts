export interface IProperty{
    name: string;
    value: number|string|{};
    render: () => React.ComponentClass      
    
    edit?: (newValue) => void;
    increase?: () => void;
    decrease?: () => void;
}