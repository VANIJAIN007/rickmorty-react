import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const fetchingCharacters = (params) =>
  axios.get(`${BASE_URL}/character`, { params });

export const fetchCharacter = (id) =>
  axios.get(`${BASE_URL}/character/${id}`);

export const fetchByUrl = (url) =>
  axios.get(url);
