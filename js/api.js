//?i=tt3896198&apikey=

export const featuredMovies = [
  "Interstellar",
  "The Dark Knight",
  "Inception",
  "The Matrix",
  "Gladiator",
  "Dune",
  "Saw",
  "Hellraiser"
];

const API_KEY = "436479e"
const BASE_URL = "https://www.omdbapi.com/"

async function getMovie(title) {
    const url = `${BASE_URL}?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
    const resposta = await fetch(url)
    if(!resposta.ok){
        alert(`Erro: erro na requisição da consulta ${resposta.status}`)
    }
    const dados = await resposta.json()


    return dados
}

export {getMovie}