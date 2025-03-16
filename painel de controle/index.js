import home from "../pages/home/dashboard.js";
import create from "../pages/create/create.js"
import update from "../pages/update/update.js"
import readArticle from "../pages/read/readArticle.js";

const main = document.getElementById("root")

const handRoute = () => {
        switch(window.location.hash) {
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

            default:
                main.innerHTML = ""
                main.appendChild(home())
        }
}

window.addEventListener("load", () => {
    handRoute()
})

window.addEventListener("hashchange", handRoute)