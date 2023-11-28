"use client";
import { useEffect, useState } from "react";

import { getCharacters, Character } from "../../lib/api"

const HomePage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const charactersData = await getCharacters();
                console.log(charactersData)
                setCharacters(charactersData);
            } catch (error) {
                console.error("Error fetching characters: ", error)
            }
        }
        fetchCharacters()
    }, []);


    return (
        <div>
            <h1>Character Builder App</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.id as string}>{character.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;