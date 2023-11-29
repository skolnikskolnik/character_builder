"use client";

import { useState, FormEvent, ChangeEvent } from "react";

import NumberInput from "@/components/NumberInput";
import TextInput from "@/components/TextInput";
import Select from "@/components/Select";

import { addCharacter } from "@/lib/api";
import { races } from "@/constants/races";
import { classes } from "@/constants/classes";
import * as styledElements from "./AddCharacterStyles"

const AddCharacter = () => {
    const [name, setName] = useState<string | null>(null);
    const [race, setRace] = useState("");
    const [characterClass, setCharacterClass] = useState("");
    const [age, setAge] = useState<number | null>(null);
    const [force, setForce] = useState<number | null>(null);
    const [constitution, setConstitution] = useState<number | null>(null);
    const [dexterity, setDexterity] = useState<number | null>(null);
    const [intelligence, setIntelligence] = useState<number | null>(null);
    const [sagesse, setSagesse] = useState<number | null>(null);
    const [charisma, setCharisma] = useState<number | null>(null);
    const [chance, setChance] = useState<number | null>(null);
    const [notes, setNotes] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setErrorMessage(null);
        setSuccessMessage(null);

        if (name === null) {
            setErrorMessage("SVP ajouter un nom.")
        } else if (race === "") {
            setErrorMessage("SVP choisir un race");
        } else if (selectedImage === null) {
            setErrorMessage("SVP ajouter un image");
        } else {
            const submission = {
                name: name,
                race: race,
                class: characterClass,
                age: age as number,
                force: force as number,
                constitution: constitution as number,
                dexterity: dexterity as number,
                intelligence: intelligence as number,
                sagesse: sagesse as number,
                charisma: charisma as number,
                chance: chance as number,
                notes: notes,
                selectedImage: selectedImage,
            }

            let isErrored = false;
            try {
                await addCharacter(submission);
            } catch (error) {
                isErrored = true;
                setErrorMessage(error);
            } finally {
                if (isErrored === false) {
                    // reset the form
                    setName(null);
                    setRace("");
                    setCharacterClass("");
                    setAge(null);
                    setForce(null);
                    setConstitution(null);
                    setDexterity(null);
                    setIntelligence(null);
                    setSagesse(null);
                    setCharisma(null);
                    setChance(null);
                    setNotes("");
                    setSelectedImage(null);


                    setSuccessMessage("Vous avez ajouté un personnage");
                }
            }

        }
    };

    return (
        <>
            <styledElements.Container>
                <styledElements.Header>Ajouter un personnage</styledElements.Header>

                <form onSubmit={handleSubmit}>

                    <TextInput
                        name="name"
                        label="Nom:"
                        placeholder="Shira"
                        setValue={value => setName(value)}
                    />

                    <Select
                        options={races}
                        setValue={(newValue) => setRace(newValue)}
                        value={race}
                        name="race"
                        label="Race"
                    />

                    <Select
                        options={classes}
                        setValue={(newValue) => setCharacterClass(newValue)}
                        value={characterClass}
                        name="class"
                        label="Classe:"
                    />

                    <NumberInput
                        label="Age:"
                        value="age"
                        placeholder={250}
                        max={100000}
                        setValue={(newValue) => setAge(newValue)}
                    />

                    <NumberInput
                        label="Force:"
                        value="force"
                        setValue={(newValue) => setForce(newValue)}
                    />

                    <NumberInput
                        label="Constitution:"
                        value="constitution"
                        setValue={(newValue) => setConstitution(newValue)}
                    />

                    <NumberInput
                        label="Dexterity:"
                        value="dexterity"
                        setValue={(newValue) => setDexterity(newValue)}
                    />

                    <NumberInput
                        label="Intelligence:"
                        value="intelligence"
                        setValue={(newValue) => setIntelligence(newValue)}
                    />

                    <NumberInput
                        label="Sagesse:"
                        value="sagesse"
                        setValue={(newValue) => setSagesse(newValue)}
                    />

                    <NumberInput
                        label="Charisme:"
                        value="charisma"
                        setValue={(newValue) => setCharisma(newValue)}
                    />

                    <NumberInput
                        label="Chance:"
                        value="chance"
                        setValue={(newValue) => setChance(newValue)}
                    />

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="notes">Notes:</styledElements.Label>
                        <styledElements.Textarea
                            id="notes"
                            name="notes"
                            placeholder="Décrire votre personnage"
                            onChange={(event: FormEvent<HTMLTextAreaElement>) => setNotes(event.currentTarget.value)}
                        ></styledElements.Textarea>

                    </styledElements.FormElement>

                    <styledElements.FormElement>
                        <styledElements.Label htmlFor="image" className="file-label">
                            Choisir un fichier
                            <styledElements.Input
                                type="file" id="image"
                                name="image"
                                accept="image/*"
                                className="file-input"
                                onChange={(event: ChangeEvent<HTMLInputElement>) => setSelectedImage(event.target.files?.[0] || null)}
                            />
                        </styledElements.Label>
                    </styledElements.FormElement>


                    <styledElements.ButtonContainer>
                        <styledElements.Button type="submit">
                            Soumettre
                        </styledElements.Button>
                    </styledElements.ButtonContainer>

                    {errorMessage && <styledElements.ErrorMessage>{errorMessage}</styledElements.ErrorMessage>}
                    {successMessage && <styledElements.SuccessMessage>{successMessage}</styledElements.SuccessMessage>}

                </form>
            </styledElements.Container>
        </>
    )
}

export default AddCharacter;