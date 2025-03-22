import home from "../pages/home/dashboard.js";
import create from "../pages/create/create.js"
import update from "../pages/update/update.js"
import readArticle from "../pages/read/readArticle.js";
import categorias from "../../sidebar/categorias.js"

const main = document.getElementById("root")

const handRoute = () => {
    const hash = window.location.hash

    switch(hash) {
        case "":
            main.innerHTML = ""
            main.appendChild(home())
            break
        case "#/criarArtigo":
            main.innerHTML = ""
            main.appendChild(create())
            break
        case "#/editarArtigo":
            main.innerHTML = ""
            main.appendChild(update())
            break
        case "#/verArtigo":
            main.innerHTML = ""
            main.appendChild(readArticle())
            break
        case "#/categorias":
            main.innerHTML = ""
            main.appendChild(categorias())
            break
        default:
            // Se estiver nas tabs de conteúdo, mantém na página de criação
            if (hash.includes('#/conteudo/')) {
                main.innerHTML = ""
                main.appendChild(create())
                return
            }
            // Caso contrário, vai para home
            main.innerHTML = ""
            main.appendChild(home())
    }
}

// Evento de carregamento inicial
window.addEventListener("load", () => {
    handRoute()
})

// Evento de mudança de hash
window.addEventListener("hashchange", () => {
    handRoute()
})