import { backToList } from "../../utils/navigation.js"
import {infoBasicaUpdate} from "./tabsUpdate/infoBasicaUpdate.js"
import { setActiveTab, initTabNavigation } from "../../utils/tabNavigation.js"


export default () => {
    const container = document.createElement('div')
    
    const template = `
        <div class="dashboard-header">
            <h2 class="page-title">Editar Artigo</h2>
            <div id="btn-back" class="action-button" style="background-color: #666;">
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
                ${infoBasicaUpdate}
                
            </div>
        </div>`

        container.innerHTML = template
        backToList(container)
        backToList(container)
        initTabNavigation(container)
        setActiveTab('tab-info')
        return container
}
