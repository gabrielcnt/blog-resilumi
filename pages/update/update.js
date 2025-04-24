import {backToList} from "../../utils/navigation.js"
import {infoBasicaCreate} from "../tabsCreate/infoBasicaCreate.js"
import {editorCreate} from "../tabsCreate/conteudoCreate.js"
import {seoCreate} from "../tabsCreate/seoCreate.js"
import {configCreate} from "../tabsCreate/configCreate.js"
import {initTabNavigation} from "../../utils/tabNavigation.js"
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { db } from "../../services/firebase/config.js";
import {loadCategorias} from "../tabsCreate/infoBasicaCreate.js"


export default async (articleId) => {
    const container = document.createElement('div')

    let articleData = {};
    if (articleId) {
        // Carrega os dados do artigo
        const docRef = doc(db, "articles", articleId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            articleData = docSnap.data();
        } else {
            console.error("Artigo não encontrado");
        }
    }
    // Carrega as categorias e seleciona a previamente escolhida
    await loadCategorias(articleData.category);
        
    
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
                ${infoBasicaCreate(articleData)}
                ${editorCreate(articleData)}
                ${seoCreate(articleData)}
                ${configCreate(articleData)}
                
            </div>
        </div>`

        container.innerHTML = template;

        let editorInitialized = false;

        
        setTimeout(() => {
            backToList(container);
            initTabNavigation(container);
    
            // Carrega os dados do artigo
            loadArticleData(articleId);
    
            // Configura o MutationObserver para monitorar mudanças no DOM
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && !editorInitialized) {
                        const editorContainer = document.querySelector('#editor-container');
                        if (editorContainer) {
                            initQuillEditor(editorContainer);
                            editorInitialized = true;
                            console.log('Editor inicializado com sucesso');
                            observer.disconnect(); // Para de observar após inicialização
                        }
                    }
                });
            });
    
            // Configura o que observar
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
    
            // Inicializa o editor quando a tab for clicada
            document.getElementById('tab-editor').addEventListener('click', () => {
                if (!editorInitialized) {
                    const editorContainer = document.querySelector('#editor-container');
                    if (editorContainer) {
                        initQuillEditor(editorContainer);
                        editorInitialized = true;
                        console.log('Editor inicializado com sucesso');
                    } else {
                        console.error('Container do editor não encontrado');
                    }
                }
            });
        }, 0);
    
        return container;
    };

    async function loadArticleData(articleId) {
        try {
            const docRef = doc(db, "articles", articleId);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                const article = docSnap.data();
    
                // Preenche os campos com os dados do artigo
                document.getElementById('title').value = article.title || '';
                document.getElementById('category').value = article.category || '';
                document.getElementById('author').value = article.author || '';
                document.getElementById('excerpt').value = article.descricao || '';
                document.getElementById('publish-date').value = article.publishDate || '';
                document.getElementById('reading-time').value = article.readingTime || 1;
    
                // Exibe a imagem destacada, se existir
                if (article.thumbnail) {
                    const uploadBox = document.getElementById('uploadBox');
                    uploadBox.innerHTML = `<img src="${article.thumbnail.url}" alt="Imagem Selecionada" style="max-width:100%; height:auto;">`;
                }
            } else {
                console.error("Artigo não encontrado");
            }
        } catch (error) {
            console.error("Erro ao carregar dados do artigo:", error);
        }
    }

    