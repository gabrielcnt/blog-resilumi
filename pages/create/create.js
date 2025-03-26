import { backToList } from "../../utils/navigation.js"
import { setActiveTab, initTabNavigation } from "../../utils/tabNavigation.js"


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
                <a href"#/criarArtigo/info" id="tab-info" class="tab active">Informações Básicas</a>
                <a href"#/criarArtigo/editor" id="tab-editor" class="tab">Conteúdo</a>
                <a href"#/criarArtigo/seo" id="tab-seo" class="tab">Imagens & SEO</a>
                <a href"#/criarArtigo/config" id="tab-config" class="tab">Configurações</a>
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