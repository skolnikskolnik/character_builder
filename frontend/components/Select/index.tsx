import { FormEvent } from "react";

import * as styledElements from "./SelectStyles";

const Select = ({ options, value, setValue, name, label }:
    { options: string[]; value: string; setValue: (newValue: string) => void; name: string; label: string; }) => {
    return (
        <styledElements.FormElement>
            <styledElements.Label htmlFor={name}>{label}</styledElements.Label>
            <styledElements.Select
                id={name}
                name={name}
                onChange={(event: FormEvent<HTMLSelectElement>) => setValue(event.currentTarget.value)}
                value={value}
            >
                <option disabled value="">
                    Sélectionner votre {name}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </styledElements.Select>
        </styledElements.FormElement>
    )
}

export default Select;