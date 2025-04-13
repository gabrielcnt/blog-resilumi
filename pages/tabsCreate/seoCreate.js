export const seoCreate = `<div id="seo-container" class="form-container">
            <h3 class="form-title">Imagens e Otimização para Buscadores</h3>
            
            <!-- Seção de Galeria de Imagens -->
        <!-- <div class="form-group">
                <label>Galeria de Imagens</label>
                <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Adicione imagens adicionais para o corpo do artigo.</p>
                
                <div class="thumbnail-container">
                    <div class="thumbnail-item">
                        <img src="https://placehold.co/120" alt="Thumbnail 1">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="thumbnail-item">
                        <img src="https://placehold.co/120" alt="Thumbnail 2">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="thumbnail-item">
                        <img src="https://placehold.co/120" alt="Thumbnail 3">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="add-thumbnail">
                        <div class="plus-icon">+</div>
                        <div class="text">Adicionar</div>
                    </div>
                </div>
            </div> -->
            
            <!-- Seção de SEO -->
            <div class="form-group">
                <!-- <label>Análise SEO</label>
                <div class="seo-score">
                    <div class="seo-header">
                        <div class="seo-title">Pontuação SEO</div>
                        <div class="score-indicator">
                            <div class="score-dot score-good"></div>
                            <span>Bom (75/100)</span>
                        </div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill"></div>
                    </div>
                    <ul class="seo-checklist">
                        <li class="checklist-item">
                            <div class="checklist-icon success">✓</div>
                            <div class="checklist-content">
                                <div class="checklist-title">Título SEO</div>
                                <div class="checklist-description">Seu título SEO tem um bom comprimento (55 caracteres)</div>
                            </div>
                        </li>
                        <li class="checklist-item">
                            <div class="checklist-icon success">✓</div>
                            <div class="checklist-content">
                                <div class="checklist-title">Meta Descrição</div>
                                <div class="checklist-description">Sua meta descrição tem um bom comprimento (143 caracteres)</div>
                            </div>
                        </li>
                        <li class="checklist-item">
                            <div class="checklist-icon warning">!</div>
                            <div class="checklist-content">
                                <div class="checklist-title">Palavra-chave no Título</div>
                                <div class="checklist-description">Sua palavra-chave principal não aparece no início do título</div>
                            </div>
                        </li>
                        <li class="checklist-item">
                            <div class="checklist-icon error">×</div>
                            <div class="checklist-content">
                                <div class="checklist-title">URL Amigável</div>
                                <div class="checklist-description">Sua URL ainda não foi definida</div>
                            </div>
                        </li>
                    </ul>
                </div> -->
            </div>
            
            <!-- Configurações SEO -->
            <div class="form-group">
                <label for="seo-title">Título SEO</label>
                <input type="text" id="seo-title" class="form-control" placeholder="Digite o título SEO (55-60 caracteres)" value="Como a Inteligência Artificial está moldando o futuro">
                <div style="display: flex; justify-content: flex-end; margin-top: 5px;">
                    <span id="contTitle" style="font-size: 12px; color: #666;">55 caracteres (recomendado: 60)</span>
                </div>
            </div>
            
            <div class="form-group">
                <label for="seo-description">Meta Descrição</label>
                <textarea id="seo-description" class="form-control" placeholder="Digite a meta descrição (140-160 caracteres)">Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas. Descubra as implicações éticas e o futuro.</textarea>
                <div style="display: flex; justify-content: flex-end; margin-top: 5px;">
                    <span id="contDescription" style="font-size: 12px; color: #666;">143 caracteres <span>(recomendado: 160)</span></span>
                </div>
            </div>
            
            <div class="form-group">
                <label for="seo-url">URL Amigável</label>
                <div style="display: flex; align-items: center; gap: 0;">
                    <div style="padding: 12px; background-color: #f5f5f5; border: 1px solid #ddd; border-right: none; border-radius: 4px 0 0 4px; color: #666;">www.seublog.com/</div>
                    <input type="text" id="seo-url" class="form-control" style="border-radius: 0 4px 4px 0;" placeholder="url-amigavel-do-artigo" value="inteligencia-artificial-futuro">
                </div>
            </div>
            
            <div class="form-group">
                <label for="focus-keyword">Palavra-chave Principal</label>
                <input type="text" id="focus-keyword" class="form-control" placeholder="Ex: inteligência artificial" value="inteligência artificial">
            </div>
            
            <div class="form-group">
                <label>Tags do Artigo</label>
                <div class="tag-input-container">
                    <div class="tag">
                        <span>Inteligência Artificial</span>
                        <span class="tag-remove">×</span>
                    </div>
                    <div class="tag">
                        <span>Tecnologia</span>
                        <span class="tag-remove">×</span>
                    </div>
                    <div class="tag">
                        <span>Futuro</span>
                        <span class="tag-remove">×</span>
                    </div>
                    <input type="text" class="tag-input" placeholder="Digite e pressione Enter para adicionar">
                </div>
            </div>
            
            <!-- Visualização -->
            <div class="form-group">
                <label>Visualização nos Resultados de Busca</label>
                <div class="preview-container">
                    <div class="preview-title">Visualização no Google</div>
                    <div class="search-preview">
                        <div class="search-title">Como a Inteligência Artificial está moldando o futuro</div>
                        <div class="search-url">www.seublog.com › inteligencia-artificial-futuro</div>
                        <div class="search-description">Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas. Descubra as implicações éticas e o futuro.</div>
                    </div>
                </div>
            </div>
            
            <div class="form-group">
                <label>Visualização em Redes Sociais</label>
                <div class="preview-container">
                    <div class="preview-title">Visualização no Facebook/Twitter</div>
                    <div class="social-preview">
                        <div class="social-image">
                            <img src="https://placehold.co/500x260" alt="Social preview">
                        </div>
                        <div class="social-content">
                            <div class="social-url">seublog.com</div>
                            <div class="social-title">Como a Inteligência Artificial está moldando o futuro</div>
                            <div class="social-description">Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas.</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Imagem em destaque para redes sociais -->
            <div class="form-group">
                <label>Imagem em Destaque para Redes Sociais</label>
                <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Selecione uma imagem que será exibida ao compartilhar o artigo nas redes sociais (Dimensão recomendada: 1200 x 630 pixels).</p>
                
                <div class="image-upload" id="uploadBoxSeo">
                    <input type="file" id="featured-image" accept="image/*" class="image-upload-input">
                    <div style="font-size: 32px; color: var(--light-purple); margin-bottom: 10px;">⬆️</div>
                    <p>Arraste e solte uma imagem aqui ou clique para selecionar</p>
                    <p style="font-size: 12px; color: #666; margin-top: 10px;">Formatos aceitos: JPG, PNG e GIF. Tamanho máximo: 5MB.</p>
                </div>
            </div>
            
            <!-- Metatags adicionais -->
            <div class="form-group">
                <label>Metatags Adicionais</label>
                <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Adicione metatags personalizadas para melhorar a indexação do seu artigo.</p>
                
                <div id="metatags-container" style="margin-top: 15px;">
                      
                    <button id="add-metatag" style="display: flex; align-items: center; gap: 5px; background: none; border: 1px dashed #ddd; padding: 8px 15px; border-radius: 4px; cursor: pointer; color: var(--purple);">
                        <span>+</span> Adicionar nova metatag
                    </button>
                </div>
            </div>

            <!-- Ações do formulário -->
            <div class="form-actions">
                <button class="btn btn-secondary">Voltar: Conteúdo</button>
                <button class="btn btn-primary">Próximo: Configurações</button>
            </div>
        </div>`


        // Informações de SEO:

        // Título SEO (seo-title)
        // Meta descrição (seo-description)
        // URL amigável (seo-url)
        // Palavra-chave principal (focus-keyword)
        
        
        // Tags do artigo:
        
        // Lista de tags associadas ao artigo
        
        
        // Metatags adicionais:
        
        // Pares de nome/valor das metatags personalizadas (como author, robots, etc.)
        
        
        // Imagem para redes sociais:
        
        // Referência ao arquivo de imagem selecionado para compartilhamento em redes sociais

// Função para atualizar os contadores de caracteres
function updateCharacterCounters() {
    const titleInput = document.querySelector("#seo-title");
    const descriptionInput = document.querySelector("#seo-description");
    
    const titleCounter = document.querySelector("#contTitle");
    const descriptionCounter = document.querySelector("#contDescription");
    
    if (titleInput && titleCounter) {
        titleInput.addEventListener("input", function() {
            const currentLength = this.value.length;
            const maxRecommended = 60;
            
            titleCounter.textContent = `${currentLength} caracteres (recomendado: ${maxRecommended})`;
            
            // Mudar a cor do contador se ultrapassar o limite recomendado
            if (currentLength > maxRecommended) {
                titleCounter.style.color = "#e74c3c"; // Vermelho para indicar que excedeu
            } else {
                titleCounter.style.color = "#666"; // Cor padrão
            }
        });
        
        // Disparar o evento para atualizar o contador inicialmente
        titleInput.dispatchEvent(new Event('input'));
    }
    
    if (descriptionInput && descriptionCounter) {
        descriptionInput.addEventListener("input", function() {
            const currentLength = this.value.length;
            const maxRecommended = 160;
            
            descriptionCounter.innerHTML = `${currentLength} caracteres <span>(recomendado: ${maxRecommended})</span>`;
            
            // Mudar a cor do contador se ultrapassar o limite recomendado
            if (currentLength > maxRecommended) {
                descriptionCounter.style.color = "#e74c3c"; // Vermelho para indicar que excedeu
            } else {
                descriptionCounter.style.color = "#666"; // Cor padrão
            }
        });
        
        // Disparar o evento para atualizar o contador inicialmente
        descriptionInput.dispatchEvent(new Event('input'));
    }
}

// Função para gerenciar as tags do artigo
function setupTagsManagement() {
    const tagContainer = document.querySelector(".tag-input-container");
    const tagInput = document.querySelector(".tag-input");
    
    if (!tagContainer || !tagInput) return;
    
    // Função para criar uma nova tag
    function createTag(tagText) {
        // Verificar se a tag já existe
        const existingTags = Array.from(tagContainer.querySelectorAll('.tag span:first-child'))
            .map(span => span.textContent.toLowerCase());
        
        if (existingTags.includes(tagText.toLowerCase())) return;
        
        // Criar o elemento da tag
        const tag = document.createElement("div");
        tag.className = "tag";
        
        // Adicionar o texto da tag
        const tagContent = document.createElement("span");
        tagContent.textContent = tagText;
        tag.appendChild(tagContent);
        
        // Adicionar o botão de remover
        const removeBtn = document.createElement("span");
        removeBtn.className = "tag-remove";
        removeBtn.textContent = "×";
        removeBtn.addEventListener("click", function() {
            tag.remove();
        });
        tag.appendChild(removeBtn);
        
        // Inserir a tag antes do input
        tagContainer.insertBefore(tag, tagInput);
    }
    
    // Evento para adicionar uma tag quando pressionar Enter
    tagInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter" && this.value.trim() !== "") {
            e.preventDefault(); // Prevenir o comportamento padrão do Enter
            createTag(this.value.trim());
            this.value = ""; // Limpar o input após adicionar
        }
    });
    
    // Configurar os botões de remover nas tags existentes
    const existingRemoveBtns = tagContainer.querySelectorAll(".tag-remove");
    existingRemoveBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            this.parentElement.remove();
        });
    });
}

function initializeMetatagEvents() {
    const container = document.getElementById("metatags-container");
    const addButton = document.getElementById("add-metatag");

    if (!container || !addButton) return;

    function createTagElement(name = "", content = "") {
        const tagWrapper = document.createElement("div");
        tagWrapper.style.display = "flex";
        tagWrapper.style.marginBottom = "10px";
        tagWrapper.style.gap = "10px";

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.className = "form-control";
        nameInput.placeholder = "Nome da metatag";
        nameInput.value = name;

        const contentInput = document.createElement("input");
        contentInput.type = "text";
        contentInput.className = "form-control";
        contentInput.placeholder = "Conteúdo da metatag";
        contentInput.value = content;

        const removeButton = document.createElement("button");
        removeButton.textContent = "×";
        removeButton.style.backgroundColor = "#f44336";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.width = "40px";
        removeButton.style.borderRadius = "4px";
        removeButton.style.cursor = "pointer";

        removeButton.addEventListener("click", function () {
            tagWrapper.remove();
        });

        tagWrapper.appendChild(nameInput);
        tagWrapper.appendChild(contentInput);
        tagWrapper.appendChild(removeButton);
        container.insertBefore(tagWrapper, addButton);
    }

    function addMetaTagHandler() {
        createTagElement();
    }

    // Adiciona o evento uma única vez
    if (!addButton.dataset.listener) {
        addButton.addEventListener("click", addMetaTagHandler);
        addButton.dataset.listener = "true";
    }
}

/**
 * Aguarda o carregamento do DOM antes de configurar os event listeners
 */
document.addEventListener("DOMContentLoaded", () => {
    // Aumentei o tempo de espera para garantir que todos os elementos estejam carregados
    setTimeout(() => {
      inicializarUploadsDeImagem();
    }, 300); // Aumentado para 300ms
  });
  
  /**
   * Inicializa os listeners para os campos de upload de imagem
   */
  function inicializarUploadsDeImagem() {
    // Tenta configurar listener para 'featured-image' se existir
    const featuredImageInput = document.getElementById('featured-image');
    if (featuredImageInput) {
      console.log("Elemento #featured-image encontrado e configurado.");
      featuredImageInput.addEventListener('change', exibirPreviewImagem);
    }
    
    // Tenta configurar listener para 'fileInput' se existir
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      console.log("Elemento #fileInput encontrado e configurado.");
      fileInput.addEventListener('change', exibirPreviewImagem);
    }
    
    // Se nenhum dos elementos for encontrado, configura um listener global
    if (!featuredImageInput && !fileInput) {
      console.log("Nenhum elemento de upload específico encontrado. Configurando delegação de eventos.");
      // Usa delegação de eventos para capturar qualquer input de arquivo
      document.addEventListener('change', (event) => {
        if (event.target.type === 'file') {
          exibirPreviewImagem(event);
        }
      });
    }
  }
  
  /**
   * Função unificada para exibir a prévia da imagem carregada
   * @param {Event} event - O evento de mudança do input
   */
  function exibirPreviewImagem(event) {
    const inputFile = event.target;
    console.log('Input de arquivo detectado:', inputFile.id || 'sem ID');
    
    if (inputFile.files && inputFile.files.length > 0) {
      const file = inputFile.files[0];
      console.log('Arquivo selecionado:', file.name);
      
      const reader = new FileReader();
      reader.onload = function(e) {
        // Busca o elemento 'uploadBox' para exibir a prévia
        let uploadBox = document.getElementById('uploadBoxSeo');
        
        // Se não encontrar 'uploadBox', tenta criar um próximo ao input
        if (!uploadBox) {
          console.log("Elemento #uploadBoxSeo não encontrado. Tentando criar próximo ao input.");
          uploadBox = document.createElement('div');
          uploadBox.id = 'uploadBoxSeo';
          uploadBox.className = 'upload-preview';
          inputFile.parentNode.insertBefore(uploadBox, inputFile.nextSibling);
        }
        
        uploadBox.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada" style="max-width:100%; height:auto;">`;
      };
      
      reader.readAsDataURL(file);
    }
  }

const observer = new MutationObserver(() => {
    const titleInput = document.querySelector("#seo-title");
    const descriptionInput = document.querySelector("#seo-description");
    const urlInput = document.querySelector("#seo-url");
    const tagContainer = document.querySelector(".tag-input-container");


    const searchTitle = document.querySelector(".search-title");
    const searchUrl = document.querySelector(".search-url");
    const searchDescription = document.querySelector(".search-description");

    const socialTitle = document.querySelector(".social-title");
    const socialDescription = document.querySelector(".social-description");
    const socialUrl = document.querySelector(".social-url");
    

    if (titleInput && descriptionInput && urlInput &&
        searchTitle && searchUrl && searchDescription &&
        socialTitle && socialDescription && socialUrl) {

        function updatePreview() {
            searchTitle.textContent = titleInput.value || "Título do artigo";
            searchDescription.textContent = descriptionInput.value || "Descrição do artigo";
            searchUrl.textContent = `www.seublog.com › ${urlInput.value || "url-do-artigo"}`;

            socialTitle.textContent = titleInput.value || "Título do artigo";
            socialDescription.textContent = descriptionInput.value || "Descrição do artigo";
            socialUrl.textContent = "seublog.com";
        }

        titleInput.addEventListener("input", updatePreview);
        descriptionInput.addEventListener("input", updatePreview);
        urlInput.addEventListener("input", updatePreview);

        updatePreview();

        // Adicionar a função para os contadores de caracteres
        updateCharacterCounters();

        // Inicializar o gerenciamento de tags
        setupTagsManagement();

        

        observer.disconnect(); // Para de observar após encontrar os elementos
    }
});

// Observar mudanças no corpo do documento
observer.observe(document.body, { childList: true, subtree: true });