import { toggleMenu } from "./header.js"
import { renderMovies } from "./movies.js"
import { featuredMovies } from "./api.js"
import { inicializarProcura } from "./search.js"
toggleMenu()
renderMovies(featuredMovies)
inicializarProcura()




