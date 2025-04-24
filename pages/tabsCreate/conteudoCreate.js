

let editor = null
let editorInitialized = false;

export const editorCreate = (articleData = {}) => `<div id="editor-container" class="form-container">
                <h3 class="form-title">Editor de Conteúdo</h3>
                
                <div class="form-group">
                    <label for="subtitle">Subtítulo (opcional)</label>
                    <input type="text" id="subtitle" class="form-control" placeholder="Adicione um subtítulo para o seu artigo">
                </div>
                
                <!-- Container do editor -->
                <div id="div-editor" class="editor-content"></div>
                
                
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
            editor.destroy(); // Note: RichTextEditor usa 'destory' em vez de 'destroy'
            document.querySelector("#div-editor").innerHTML = ''; // Limpa o container
        } catch (error) {
            console.error('Erro ao destruir editor:', error);
        }
        editor = null;
        editorInitialized = false;
    }
}

function updateCounts() {
    if (!editor) {
        console.error("Editor não está inicializado");
        return;
    }

    try {
        // Obtém o conteúdo HTML do editor
        const conteudoHTML = editor.getHTML();

        // Remove as tags HTML e caracteres especiais
        const textoLimpo = conteudoHTML
            .replace(/<[^>]*>/g, ' ')  // Remove tags HTML
            .replace(/&nbsp;/g, ' ')   // Remove &nbsp;
            .replace(/\s+/g, ' ')      // Remove espaços extras
            .trim();                   // Remove espaços no início/fim

        // Conta palavras e caracteres
        const palavras = textoLimpo.split(' ').filter(word => word.length > 0);
        const numPalavras = palavras.length;
        const numCaracteres = textoLimpo.length;

        // Atualiza os contadores na interface
        const wordCountElement = document.getElementById("word-count");
        const charCountElement = document.getElementById("char-count");

        if (wordCountElement) wordCountElement.textContent = numPalavras;
        if (charCountElement) charCountElement.textContent = numCaracteres;

        // Calcula o tempo de leitura (200 palavras por minuto)
        const tempoLeitura = Math.max(1, Math.ceil(numPalavras / 200));
        const readingTimeInput = document.getElementById("reading-time");

        if (readingTimeInput) {
            readingTimeInput.value = tempoLeitura;
        }

        console.log('Contagem atualizada:', {
            palavras: numPalavras,
            caracteres: numCaracteres,
            tempoLeitura: tempoLeitura
        });

    } catch (error) {
        console.error("Erro ao atualizar contadores:", error);
    }
}

export function initEditor() {
    if (editorInitialized) return; // Evita inicialização dupla

    try {
        const editorContainer = document.querySelector("#div-editor");
        if (!editorContainer) {
            throw new Error('Container do editor não encontrado');
        }

        editor = new RichTextEditor("#div-editor", {
            height: "400px",
            width: "100%",
            toolbar: "full",
            contentCssUrl: "../utils/richtexteditor/runtime/richtexteditor_content.css",
            skin: "gray",

        });
        
        editor.attachEvent("change", () => {
            setTimeout(updateCounts, 300); // Pequeno delay para capturar alterações completas
        });
        updateCounts();

        editorInitialized = true;
        console.log('Editor inicializado com sucesso');
        updateCounts(); // Atualiza os contadores na inicialização
    } catch (error) {
        console.error('Erro ao inicializar editor:', error);
    }
}

// Remove o setInterval redundante já que a inicialização é feita via initEditor
window.addEventListener('hashchange', () => {
    destroyEditor();
});

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
