const categories = [
    "Action",
    "Comedy",
    "Horror",
    "Sci-Fi",
    "Romance",
    "Thriller"
];

const emojis = {
    Action: "🎬",
    Comedy: "😂",
    Horror: "👻",
    "Sci-Fi": "🚀",
    Romance: "❤️",
    Thriller: "🕵️",
    Drama: "🎭",
    Animation: "🧸"
}




function criarCardCategorias() {
    const categorias = document.getElementById("categoriesCards")
    categories.forEach(category => {
        const card = document.createElement("div")
        card.className = "w-full max-w-[260px]! h-[100px]! cursor-pointer bg-slate-800 hover:bg-[var(--color-secundaria)] hover:text-black duration-300 rounded-xl p-8 text-center shadow-lg hover:scale-105 mb-4!"
        card.innerHTML = `
        <h3 class="mb-2! mt-2!">${emojis[category]}</h3>
        <p class="mb-2!">${category}</p>
    `
        card.addEventListener("click", () => {

            searchMovie(category);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })

        })
        categorias.appendChild(card)
    })
}

export {criarCardCategorias}