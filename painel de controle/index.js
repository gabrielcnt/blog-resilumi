import home from "../pages/home/dashboard.js";
import create from "../pages/create/create.js"
import update from "../pages/update/update.js"
import readArticle from "../pages/read/readArticle.js";
import categorias from "../../sidebar/categorias.js"
import settings from "../../sidebar/configuracoes.js"

const main = document.getElementById("root")

const handRoute = async () => {
    const hash = window.location.hash;

    if (hash === "") {
        main.innerHTML = "";
        main.appendChild(home());
    } else if (hash === "#/criarArtigo") {
        main.innerHTML = "";
        const component = await create(); // espera o elemento ser retornado
        main.appendChild(component);
    } else if (hash.startsWith("#/editarArtigo/")) {
        const articleId = hash.split("/")[2];
        main.innerHTML = "";
        const component = await update(articleId); // também é async
        main.appendChild(component);
    } else if (hash === "#/verArtigo") {
        main.innerHTML = "";
        main.appendChild(readArticle());
    } else if (hash === "#/categorias") {
        main.innerHTML = "";
        main.appendChild(categorias());
    } else if (hash === "#/configuracoes") {
        main.innerHTML = "";
        main.appendChild(settings());
    } else if (hash.includes("#/conteudo/")) {
        main.innerHTML = "";
        const component = await create(); // mesmo create() async aqui
        main.appendChild(component);
    } else {
        main.innerHTML = "";
        main.appendChild(home());
    }
};

// Evento de carregamento inicial
window.addEventListener("load", () => {
    handRoute()
})

// Evento de mudança de hash
window.addEventListener("hashchange", () => {
    handRoute()
})