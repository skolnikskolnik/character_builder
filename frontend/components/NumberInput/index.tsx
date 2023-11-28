import * as styledElements from "./NumberInputStyles"

const NumberInput = ({ label, value, min = 0, max = 100 }:
    { label: string; value: string; min?: number; max?: number }) => {
    return (
        <styledElements.FormElement>
            <styledElements.Label htmlFor={value}>{label}</styledElements.Label>
            <styledElements.Input
                type="number"
                id={value}
                name={value}
                placeholder={`Ajouter ${value}`}
                min={min}
                max={max}
                step="1"
                required
            />
        </styledElements.FormElement>
    )
}

export default NumberInput