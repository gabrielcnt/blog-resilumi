import { backToList } from "../../utils/navigation.js"
import { setActiveTab, initTabNavigation } from "../../utils/tabNavigation.js"
import {infoBasicaTemplate} from "./tabs/infoBasicaTemplate.js"
import {seoTemplate} from "./tabs/seoTemplate.js"

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
                ${infoBasicaTemplate}
                ${seoTemplate}
            </div>
        </div>`
    container.innerHTML = headerTemplate
    
    backToList(container)
    initTabNavigation(container)
    setActiveTab('tab-info')
    
    return container   
}

// // Adiciona event listeners para as tabs
// const tabs = container.querySelectorAll('.tab')
// tabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const tabId = tab.id
//         setActiveTab(tabId)
//     })
// })

// backToList(container)

// // Ativa a primeira tab após o DOM estar pronto
// setTimeout(() => {
//     setActiveTab('tab-info')
// }, 0)