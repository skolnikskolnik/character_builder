import { FormEvent } from "react";

import * as styledElements from "./TextInputStyles"

const TextInput = ({ name, label, placeholder, setValue }:
    { name: string; label: string; placeholder: string; setValue: (newValue: string) => void }) => {

    return (
        <styledElements.FormElement>
            <styledElements.Label htmlFor={name}>{label}</styledElements.Label>
            <styledElements.Input
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={(event: FormEvent<HTMLInputElement>) => setValue(event.currentTarget.value)}
            />
        </styledElements.FormElement>
    )
}

export default TextInput;