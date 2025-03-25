import { backToList } from "../../utils/navigation.js"
import { setActiveTab, initTabNavigation } from "../../utils/tabNavigation.js"
import {infoBasicaCreate} from "../tabsCreate/infoBasicaCreate.js"
import {seoCreate} from "../tabsCreate/seoCreate.js"

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
                ${seoCreate}
            </div>
        </div>`
    container.innerHTML = headerTemplate
    
    backToList(container)
    initTabNavigation(container)

    // Define a URL inicial com a tab info
    history.pushState(null, '', '#/criarArtigo/info')
setActiveTab('tab-info')
    
    return container   
}