import { getMovie } from "./api.js"

const moviesGrid = document.getElementById("movies-grid")

function createCard(movie){
    const cardd = document.createElement("article")
    
    const title = movie.Title || "Título indisponível"
    const year = movie.Year || "N/A"
    const genre = movie.Genre || "N/A"
    const rating = movie.Ratings && movie.Ratings.length > 0 ? movie.Ratings[0].Value : "N/A"

    cardd.className = "w-full flex flex-col bg-[#1E293B] rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-shadow duration-300 cursor-pointer"
    
    cardd.innerHTML = `
        <img src="${movie.Poster}" alt="${title}" class="w-full h-64 object-cover rounded-lg mb-4 overflow-hidden">
        <h3 class="!ml-2 text-xl font-bold text-[var(--color-texto)] !mb-2 !mt-4">${title}</h3>
        <p class="!ml-2 text-[var(--color-texto-secundario)] !mb-1">Ano: ${year}</p>
        <p class="!ml-2 text-[var(--color-texto-secundario)] !mb-1">Gênero: ${genre}</p>
        <p class="!ml-2 text-[var(--color-secundaria)] font-semibold !mb-2">Avaliação: ⭐ ${rating}</p>
    `
    return cardd
}



async function renderMovies(titleList){
    if(!moviesGrid){
        return
    }
    moviesGrid.innerHTML = ""
    const movieReturn = titleList.map(title => getMovie(title))

    const moviesDados = await Promise.all(movieReturn)
    moviesDados.forEach(movie =>{
        if(movie){
            const card = createCard(movie)
            moviesGrid.appendChild(card)
        }
    })

    
    
}

export { renderMovies }