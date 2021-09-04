import axios from "axios";

const api = axios.create({
    baseURL: "https://pokedexapi-test.herokuapp.com",
});

export default api;