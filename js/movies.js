const movies = [

    {

        title: "Interstellar",

        year: 2014,

        genre: "Sci-Fi",

        rating: "8.7",

        poster: "./assets/images/images.jpeg"

    },
    {

        title: "Inception",

        year: 2010,

        genre: "Sci-Fi",

        rating: "8.8",

        poster: "./assets/images/images.jpeg"

    },
    {

        title: "The Dark Knight",

        year: 2008,

        genre: "Action",

        rating: "9.0",

        poster: "./assets/images/images.jpeg"

    },
    {
        title: "The Matrix",

        year: 1999,

        genre: "Sci-Fi",

        rating: "8.7",

        poster: "./assets/images/images.jpeg"
    },
     {
        title: "The Matrix",

        year: 1999,

        genre: "Sci-Fi",

        rating: "8.7",

        poster: "./assets/images/images.jpeg"
    },
    {
        title: "The Matrix",

        year: 1999,

        genre: "Sci-Fi",

        rating: "8.7",

        poster: "./assets/images/images.jpeg"
    }

]

const moviesGrid = document.getElementById("movies-grid")

function createCard(movie){
    const cardd = document.createElement("article")
    cardd.className = " w-full flex flex-col  bg-[#1E293B] rounded-lg p-4 shadow-md hover:shadow-lg hover:-translate-y-2 transition-shadow duration-300"
    cardd.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="w-full h-64 object-cover rounded-lg mb-4 overflow-hidden">
        <h3 class="!ml-2 text-xl font-bold text-[var(--color-texto)] !mb-2 !mt-4">${movie.title}</h3>
        <p class="!ml-2 text-[var(--color-texto-secundario)] !mb-1">Ano: ${movie.year}</p>
        <p class="!ml-2 text-[var(--color-texto-secundario)] !mb-1">Gênero: ${movie.genre}</p>
        <p class="!ml-2 text-[var(--color-secundaria)] font-semibold !mb-2">Avaliação: ${movie.rating}</p>
    `
    return cardd
}


function renderMovies(){
    moviesGrid.innerHTML = ""

    movies.forEach(movie => {
        const card = createCard(movie)
        moviesGrid.appendChild(card)
    })
}

export { renderMovies }