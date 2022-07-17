type InputControl = {
    type: 'input',
    key: string,
    defaultValue?: string
 }
 type SelectControl = {
    type: 'select',
    key: string,
    options: string[],
    defaultOptions?: string
 }
 type GenericControl = InputControl | SelectControl;
 type FormDescription = GenericControl[];