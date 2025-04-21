import {backToList} from "../../utils/navigation.js"
import {infoBasicaUpdate} from "../tabsUpdate/infoBasicaUpdate.js"
import {editorUpdate} from "../tabsUpdate/conteudoUpdate.js"
import {seoUpdate} from "../tabsUpdate/seoUpdate.js"
import {configUpdate} from "../tabsUpdate/configUpdate.js"
import {initTabNavigation} from "../../utils/tabNavigation.js"


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
                ${editorUpdate}
                ${seoUpdate}
                ${configUpdate}
                
            </div>
        </div>`

        container.innerHTML = template
        let editorInitialized = false;
        
            setTimeout(() => {
                backToList(container)
                initTabNavigation(container)
                
                // Configura o MutationObserver para monitorar mudanças no DOM
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList' && !editorInitialized) {
                            const editorContainer = document.querySelector('#editor-container')
                            if (editorContainer) {
                                initQuillEditor(editorContainer)
                                editorInitialized = true
                                console.log('Editor inicializado com sucesso')
                                observer.disconnect() // Para de observar após inicialização
                            }
                        }
                    })
                })
        
                // Configura o que observar
                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                })
                
                // Inicializa o editor quando a tab for clicada
                document.getElementById('tab-editor').addEventListener('click', () => {
                    if (!editorInitialized) {
                        const editorContainer = document.querySelector('#editor-container')
                        if (editorContainer) {
                            initQuillEditor(editorContainer)
                            editorInitialized = true
                            console.log('Editor inicializado com sucesso')
                        } else {
                            console.error('Container do editor não encontrado')
                        }
                    }
                })
            }, 0)
    
        return container
}
