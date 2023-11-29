import axios from 'axios';

const backendURL = 'http://localhost:5000'; // will update when deployed

export interface Character {
  id: String;
  name: String;
};

export interface CharacterInput {
  name: string;
  race: string;
  class: string;
  age: number;
  force: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  sagesse: number;
  charisma: number;
  chance: number;
  notes: string;
  selectedImage: File;
}

export const getCharacters = async () => {
  try {
    const response = await axios.get(`${backendURL}/api/characters`);
    return response.data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const addCharacter = async (characterData: CharacterInput) => {
  const postBody = {
    name: characterData.name,
    race: characterData.race,
    class: characterData.class,
    age: characterData.age,
    force: characterData.force,
    constitution: characterData.constitution,
    dexterity: characterData.dexterity,
    intelligence: characterData.intelligence,
    sagesse: characterData.sagesse,
    charisma: characterData.charisma,
    chance: characterData.chance,
    notes: characterData.notes,
    image: characterData.selectedImage,
  }

  console.log(characterData.selectedImage)

  try {
    const response = await axios.post(`${backendURL}/api/characters`, postBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { "success": true };
  } catch (error) {
    throw error;
  }
};

