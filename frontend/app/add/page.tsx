"use client";

import NumberInput from "@/components/NumberInput";

import { races } from "@/constants/races";
import { classes } from "@/constants/classes";
import { characteristics } from "@/constants/characteristics";
import * as styledElements from "./AddCharacterStyles"

const AddCharacter = () => {

    return (
        <>
            <styledElements.Container>
                <styledElements.Header>Ajouter un personnage</styledElements.Header>

                <form action="#" method="post">

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="name">Nom:</styledElements.Label>
                        <styledElements.Input type="text" id="name" name="name" placeholder="Shira" />
                    </styledElements.FormElement>

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="race">Race:</styledElements.Label>
                        <styledElements.Select id="race" name="race">

                            {races.map((raceOption) => (
                                <option key={raceOption} value={raceOption}>
                                    {raceOption}
                                </option>
                            ))}
                        </styledElements.Select>
                    </styledElements.FormElement>

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="classe">Classe:</styledElements.Label>
                        <styledElements.Select id="classe" name="classe">

                            {classes.map((classOption) => (
                                <option key={classOption} value={classOption}>
                                    {classOption}
                                </option>
                            ))}
                        </styledElements.Select>
                    </styledElements.FormElement>

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="age">Age:</styledElements.Label>
                        <styledElements.Input type="number" id="age" name="age" placeholder="250" />
                    </styledElements.FormElement>

                    {characteristics.map(characteristic => <NumberInput
                        key={characteristic}
                        label={characteristic}
                        value={characteristic.toLowerCase()}
                    />)}

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="notes">Notes:</styledElements.Label>
                        <styledElements.Textarea id="notes" name="notes" placeholder="Décrire votre personnage" ></styledElements.Textarea>
                    </styledElements.FormElement>

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="image" className="file-label">
                            Choisir un fichier
                            <styledElements.Input type="file" id="image" name="image" accept="image/*" className="file-input" />
                        </styledElements.Label>
                    </styledElements.FormElement>


                    <styledElements.ButtonContainer>
                        <styledElements.Button type="submit" >
                            Soumettre
                        </styledElements.Button>
                    </styledElements.ButtonContainer>

                </form>
            </styledElements.Container>
        </>
    )
}

export default AddCharacter;