import { FormEvent } from "react";

import * as styledElements from "./NumberInputStyles"

const NumberInput = ({
    label,
    value,
    min = 0,
    max = 100,
    placeholder,
    setValue,
}:
    {
        label: string;
        value: string;
        min?: number;
        max?: number;
        placeholder?: number;
        setValue: (newValue: number) => void;
    }) => {
    return (
        <styledElements.FormElement>
            <styledElements.Label htmlFor={value}>{label}</styledElements.Label>
            <styledElements.Input
                type="number"
                id={value}
                name={value}
                placeholder={placeholder ? `${placeholder}` : `Ajouter ${value}`}
                min={min}
                max={max}
                step="1"
                required
                onChange={(event: FormEvent<HTMLInputElement>) => setValue(parseInt(event.currentTarget.value))}
            />
        </styledElements.FormElement>
    )
}

export default NumberInput