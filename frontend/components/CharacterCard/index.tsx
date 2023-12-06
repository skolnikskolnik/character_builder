import { useState } from "react";

import RotatingExpandIcon from "../RotatingExpandIcon";

import { Character } from "@/lib/api";

import * as styledElements from "./CharacterCardStyles";

const CharacterCard = ({ data }: { data: Character }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const {
        name,
        age,
        image,
        class: characterClass,
        race,
        constitution,
        chance,
        charisma,
        intelligence,
        sagesse,
        dexterity,
    } = data;

    const ROWS_INFO = [
        {
            label: "Nom:",
            value: name,
        }, {
            label: "Age:",
            value: age,
        }, {
            label: "Classe:",
            value: characterClass,
        }, {
            label: "Race:",
            value: race,
        }
    ];

    const ATTRIBUTES_INFO = [
        { label: "Constitution:", value: constitution },
        { label: "Chance:", value: chance },
        { label: "Charisme:", value: charisma },
        { label: "Intelligence:", value: intelligence },
        { label: "Sagesse:", value: sagesse },
        { label: "Dexterité:", value: dexterity },
    ];

    return (
        <styledElements.Container>
            {ROWS_INFO.map(row => (
                <styledElements.Row key={row.value}>
                    <span>{row.label}</span>
                    <span>{row.value}</span>
                </styledElements.Row>
            ))}
            <styledElements.ImageContainer>
                <img
                    src={`data:${image.contentType};base64,${Buffer.from(image.data).toString('base64')}`}
                    alt={name}
                />
            </styledElements.ImageContainer>
            {isExpanded && (
                <styledElements.Table>
                    <tbody>
                        {ATTRIBUTES_INFO.map((attribute) => (
                            <tr key={attribute.label}>
                                <td>{attribute.label}</td>
                                <td>{attribute.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </styledElements.Table>
            )}
            <RotatingExpandIcon isExpanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        </styledElements.Container>
    );
}

export default CharacterCard;