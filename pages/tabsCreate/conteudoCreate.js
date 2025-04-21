

let editor = null
let editorInitialized = false;

export const editorCreate = `<div id="editor-container" class="form-container">
                <h3 class="form-title">Editor de Conteúdo</h3>
                
                <div class="form-group">
                    <label for="subtitle">Subtítulo (opcional)</label>
                    <input type="text" id="subtitle" class="form-control" placeholder="Adicione um subtítulo para o seu artigo">
                </div>
                
                <!-- Container do editor -->
                <div id="div-editor" class="editor-content"></div>
                <div class="media-buttons">
                    <button class="media-btn" id="add-image">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                        Adicionar Imagem
                    </button>
                    <button class="media-btn" id="add-video">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        Adicionar Vídeo
                    </button>
                    <button class="media-btn" id="add-code">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                        Inserir Código
                    </button>
                </div>
                
                <!-- Editor Quill -->
                
                <div class="editor-options">
                    <div class="word-count">
                        <span id="word-count">0</span> palavras | <span id="char-count">0</span> caracteres
                    </div>
                </div>
                
                <div class="editor-help">
                    <h4>Dicas para um bom artigo:</h4>
                    <ul>
                        <li>Utilize títulos e subtítulos para organizar seu conteúdo</li>
                        <li>Inclua pelo menos uma imagem relevante ao tema</li>
                        <li>Mantenha parágrafos curtos para facilitar a leitura</li>
                        <li>Revise seu texto antes de publicar</li>
                        <li>Ideal ter entre 800 e 1500 palavras para SEO</li>
                    </ul>
                </div>
                
                <!--<div class="form-actions">
                    <button type="button" class="btn btn-secondary">Voltar: Informações</button>
                    <button type="button" class="btn btn-primary" id="btn-tab-next">Próximo: Imagens & SEO</button>
                </div>-->
            </div>`

export function destroyEditor() {
    if (editor) {
        try {
            editor.destroy();
        } catch (error) {
            console.error('Erro ao destruir editor:', error);
        }
        editor = null;
        editorInitialized = false;
    }
}

// Função para inicializar o editor
export function initEditor() {
    // Primeiro destruímos qualquer instância existente
    destroyEditor();

    try {
        const editorContainer = document.querySelector("#div-editor");
        if (!editorContainer) {
            console.error('Container do editor não encontrado');
            return;
        }

        editor = new RichTextEditor("#div-editor", {
            height: "400px",
            width: "100%",
            toolbar: "full",
            change: updateCounts // Agora updateCounts está acessível
        });
        
        editorInitialized = true;
        console.log('Editor inicializado com sucesso');
        
        // Atualiza contadores iniciais
        updateCounts();
    } catch (error) {
        console.error('Erro ao inicializar editor:', error);
    }
}

// Remove o setInterval redundante já que a inicialização é feita via initEditor
window.addEventListener('hashchange', () => {
    destroyEditor();
});

function updateCounts() {
    if (!editor) return;
    
    try {
        const text = editor.getText(); // pega texto sem HTML
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCount = words.length;
        const charCount = text.replace(/\s/g, "").length;

        document.getElementById("word-count").textContent = wordCount;
        document.getElementById("char-count").textContent = charCount;
    } catch (error) {
        console.error('Erro ao atualizar contadores:', error);
    }
}

// Função para obter dados do conteúdo
export function getConteudoData() {
    try {
        if (!editor) {
            console.error("Editor não está inicializado");
            return null;
        }

        // Obtém o subtítulo
        const subtitulo = document.querySelector("#subtitle")?.value.trim() || "";

        // Obtém o conteúdo do editor
        const conteudoHTML = editor.getHTML();
        const textoLimpo = conteudoHTML.replace(/<[^>]*>/g, ' ')
            .replace(/&nbsp;/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        // Obtém métricas do conteúdo
        const palavras = textoLimpo.split(' ').filter(word => word.length > 0);
        const numPalavras = palavras.length;
        const numCaracteres = textoLimpo.length;

        return {
            subtitulo,
            conteudo: conteudoHTML,
            metadata: {
                palavras: numPalavras,
                caracteres: numCaracteres
            }
        };

    } catch (error) {
        console.error("Erro ao obter dados do conteúdo:", error);
        return null;
    }
}

// Função para validar o conteúdo
export function validateConteudo() {
    try {
        if (!editor) {
            console.error("Editor não está inicializado");
            return false;
        }

        const conteudoData = getConteudoData();
        if (!conteudoData) return false;

        const { conteudo, subtitulo, metadata } = conteudoData;

        // Validações
        if (conteudo === '' || conteudo === '<p></p>' || conteudo === '<p><br></p>') {
            alert("O conteúdo não pode estar vazio");
            return false;
        }

        if (metadata.palavras < 100) {
            alert("O artigo deve ter pelo menos 100 palavras");
            return false;
        }

        if (subtitulo && subtitulo.length > 150) {
            alert("O subtítulo não pode ter mais de 150 caracteres");
            return false;
        }

        return true;

    } catch (error) {
        console.error("Erro ao validar conteúdo:", error);
        return false;
    }
}