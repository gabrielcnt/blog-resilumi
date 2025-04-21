import { backToList } from "../../utils/navigation.js"
import { initTabNavigation } from "../../utils/tabNavigation.js"
import {infoBasicaCreate} from "../tabsCreate/infoBasicaCreate.js"
import {seoCreate} from "../tabsCreate/seoCreate.js"
import { editorCreate, initEditor, destroyEditor } from "../tabsCreate/conteudoCreate.js"
import {configCreate} from "../tabsCreate/configCreate.js"
import { articleService } from "../../services/articleService.js"


export default () => {

    const container = document.createElement('div')

    // Template do cabeçalho com as tabs
    const headerTemplate = `<div class="dashboard-header">
            <h2 class="page-title">Criar Novo Artigo</h2>
            <div id="btn-back" class="action-button" style="background-color: #666; user-select: none;">
                Voltar para Lista
            </div>
        </div>
        
        <div class="tab-container">
            <div class="tabs">
                <div id="tab-info" class="tab active" data-container="info-container">Informações Básicas</div>
                <div id="tab-editor" class="tab" data-container="editor-container">Conteúdo</div>
                <div id="tab-seo" class="tab" data-container="seo-container">Imagens & SEO</div>
                <div id="tab-config" class="tab" data-container="config-container">Configurações</div>
            </div>

            <div class="tab-content">
                ${infoBasicaCreate}
                ${editorCreate}
                ${seoCreate}
                ${configCreate}
            </div>


        </div>`
    container.innerHTML = headerTemplate
    
    setTimeout(() => {
        backToList(container)
        initTabNavigation(container)
        
        destroyEditor(); 
        // Inicializa o editor quando a tab for clicada
        document.getElementById('tab-editor').addEventListener('click', initEditor)
    }, 500)
    
     // Adiciona listener para receber os dados do artigo
     document.addEventListener('articleDataReady', async (event) => {
        try {
            const articleData = event.detail;
            console.log("Dados do artigo recebidos:", articleData);

            // Salva no Firebase através do service
            await articleService.create(articleData);
            
            alert("Artigo salvo com sucesso!");
            window.location.hash = "#/dashboard";
            
        } catch (error) {
            console.error("Erro ao salvar artigo:", error);
            alert("Erro ao salvar artigo: " + error.message);
        }
    });
    
    return container   
}