//?i=tt3896198&apikey=

export const featuredMovies = [
  "Terrified",
  "The Dark and the Wicked",
  "The Autopsy of Jane Doe",
  "Talk to Me",
  "Incantation",
  "When Evil Lurks",
  "Saw",
  "Hellraiser"
];

const CHAVE_PADRAO = atob("NDM2NDc5ZQ==")
const API_KEY = typeof CONFIG !== "undefined" ? CONFIG.OMDB_API_KEY : CHAVE_PADRAO
const BASE_URL = "https://www.omdbapi.com/"

async function getMovie(title) {
    try{
        const url = `${BASE_URL}?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
        const resposta = await fetch(url)
        if(!resposta.ok){
            throw new Error(`Erro: erro na requisição da consulta ${resposta.status}`)
        }
        const dados = await resposta.json()

        if(dados.Response === "False"){
            throw new Error(dados.error)
        }
        return dados
    }catch(error){
        console.log(error)
    }
}

async function getMovies(title) {
    try{
        const url = `${BASE_URL}?s=${encodeURIComponent(title)}&apikey=${API_KEY}`
        const resposta = await fetch(url)
        if(!resposta.ok){
            throw new Error(`Erro: erro na requisição da consulta ${resposta.status}`)
        }
        const dados = await resposta.json()

        if(dados.Response === "False"){
            throw new Error(dados.error)
        }
        return dados.Search
    }catch(error){
        console.log(error)
        return []
    }
}

export {getMovie, getMovies}