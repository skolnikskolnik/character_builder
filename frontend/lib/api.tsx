import axios from 'axios';

const backendURL = 'http://localhost:5000'; // will update when deployed

export interface Character {
  id: String;
  name: String;
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

