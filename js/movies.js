import { getMovie } from "./api.js"

const moviesGrid = document.getElementById("movies-grid")

function createCard(movie){
    const cardd = document.createElement("article")
    
    const title = movie.Title || "Título indisponível"
    const year = movie.Year || "N/A"
    const genre = movie.Genre || "N/A"
    const rating = movie.Ratings && movie.Ratings.length > 0 ? movie.Ratings[0].Value : "N/A"

    cardd.className = "w-full flex flex-col bg-[#1E293B] rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-shadow duration-300 cursor-pointer"

    const poster = document.createElement("img")
    poster.src = movie.Poster !== "N/A" ? movie.Poster : "assets/images/imagem-padrao.jpg"
    poster.alt = title
    poster.className = "w-full h-64 object-cover rounded-lg mb-4 overflow-hidden"

    const titleEl = document.createElement("h3")
    titleEl.className = "!ml-2 text-xl font-bold text-[var(--color-texto)] !mb-2 !mt-4"
    titleEl.textContent = title

    const yearEl = document.createElement("p")
    yearEl.className = "!ml-2 text-[var(--color-texto-secundario)] !mb-1"
    yearEl.textContent = `Ano: ${year}`

    const genreEl = document.createElement("p")
    genreEl.className = "!ml-2 text-[var(--color-texto-secundario)] !mb-1"
    genreEl.textContent = `Gênero: ${genre}`

    const ratingEl = document.createElement("p")
    ratingEl.className = "!ml-2 text-[var(--color-secundaria)] font-semibold !mb-2"
    ratingEl.textContent = `Avaliação: ⭐ ${rating}`

    const btn = document.createElement("button")
    btn.className = "!py-3 btn-ver-mais mt-auto w-[90%] mx-auto! bg-[var(--color-principal)] hover:opacity-80 text-white font-semibold py-2 rounded-xl text-sm transition-all cursor-pointer"
    btn.textContent = "Ver Mais"

    cardd.append(poster, titleEl, yearEl, genreEl, ratingEl, btn)
    return cardd
}



async function renderMovies(titleList){
    if(!moviesGrid){
        return
    }
    moviesGrid.innerHTML = ""
    const movieReturn = titleList.map(title => getMovie(title))

    try {
        const moviesDados = await Promise.all(movieReturn)
        moviesDados.forEach(movie =>{
            if(movie){
                const card = createCard(movie)
                moviesGrid.appendChild(card)
            }
        })
    } catch (error) {
        moviesGrid.innerHTML = `<p class="text-red-400 text-center col-span-full">Erro ao carregar filmes. Tente novamente mais tarde.</p>`
    }

    
    
}

export { renderMovies, createCard }