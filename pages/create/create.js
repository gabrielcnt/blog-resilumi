import { backToList } from "../../utils/navigation.js"
import { setActiveTab, initTabNavigation } from "../../utils/tabNavigation.js"
import {infoBasicaCreate} from "../tabsCreate/infoBasicaCreate.js"
import {seoCreate} from "../tabsCreate/seoCreate.js"
import { editorCreate } from "../tabsCreate/conteudoCreate.js"
import { initQuillEditor } from "../../utils/editorQuill.js"
import {configCreate} from "../tabsCreate/configCreate.js"

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

    // Função para cancelar e voltar para a dashboard ou lista de artigos
    window.cancelForm = () => {
        // Utilize sua função de navegação, por exemplo:
        backToList(container)
    }

    // Função para salvar os dados da aba "Informações Básicas" e avançar para a próxima aba
    window.saveInfoBasica = () => {
        try {
            // Coleta os dados da aba de informações básicas
            const basicData = getInfoBasicaData()
            
            // Armazena os dados em um objeto central (pode ser em window.articleData ou outro state manager)
            window.articleData = {
                ...window.articleData,
                ...basicData
            }
            
            // Navega para a aba de conteúdo
            // Aqui, usando o setActiveTab para mudar a tab ativa (ou acionando o clique na tab correspondente)
            setActiveTab('tab-editor', container)
        } catch (error) {
            alert(error.message)
        }
    }
    
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