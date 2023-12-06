"use client";
import { useEffect, useState } from "react";

import CharacterCard from "@/components/CharacterCard";

import { getCharacters, Character } from "../../lib/api"

const HomePage = () => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const charactersData = await getCharacters();
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
                    <CharacterCard key={character.id as string} data={character} />
                ))}
            </ul>
        </div>
    );
};

export default HomePage;