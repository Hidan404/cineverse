import { toggleMenu } from "./header.js"
import { renderMovies } from "./movies.js"
import { featuredMovies } from "./api.js"
import { inicializarProcura } from "./search.js"
import { criarCardCategorias } from "./categoriesCards.js"
import { cepEvento } from "./viacep.js"
toggleMenu()
renderMovies(featuredMovies)
inicializarProcura()
criarCardCategorias()
cepEvento()




