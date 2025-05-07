import axios from "axios"

const API_URL = "https://backend.playhives.com/game/categorywise"

export const actionGames = async()=>{
    const response = await axios.get(`${API_URL}`)
    return response.data.games.Action
}
export const adventureGames = async()=>{
    const response = await axios.get(`${API_URL}`)
    return response.data.games.Adventure
}
export const funnyGames = async()=>{
    const response = await axios.get(`${API_URL}`)
    return response.data.games.Funny
}
export const mindGames = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data.games["Mind Games"];
};
export const puzzleGames = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data.games.Puzzle;
};