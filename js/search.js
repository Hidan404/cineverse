import { getMovies, getMovie } from "./api.js";
import { createCard } from "./movies.js";

const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const result = document.getElementById("search-result")

export function inicializarProcura() {
    searchBtn.addEventListener("click", procurarFilme)
}

async function procurarFilme() {
    const titulo = searchInput.value.trim()
    searchInput.addEventListener("input", () =>{
        if(searchInput.value.trim() === ""){
            result.innerHTML = ""
        }
    })
    
    if (!titulo) {
        return
    }

    result.innerHTML = `
        <div class=" flex justify-center items-center py-12 ">
            <div class="w-10 h-10 border-4 border-[var(--color-principal)] border-t-transparent rounded-full animate-spin"></div>
        </div>    
    `
    const filmeRetornado = await getMovies(titulo)
    result.innerHTML = ""
    if (filmeRetornado.length === 0) {
        result.innerHTML = `
            <p class="text-center text-red-400 flex items-center my-auto">
                Nenhum filme encontrado.
            </p>
        `
        return
    }

    const promesas = filmeRetornado.map(movie => getMovie(movie.Title))

    const todosFilmeParecidos = await Promise.all(promesas)
    const card = createCard(filmeRetornado)
    todosFilmeParecidos.forEach(movie => {

        const card = createCard(movie);

        card.classList.add(
            "opacity-0",
            "translate-y-6",
            "transition-all",
            "duration-500"
        );

        result.appendChild(card);

        requestAnimationFrame(() => {
            card.classList.remove(
                "opacity-0",
                "translate-y-6"
            )
        })
        

    })


}
