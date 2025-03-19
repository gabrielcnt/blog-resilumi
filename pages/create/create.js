import { backToList } from "../../utils/navigation.js"
import {setActiveTab} from "../../utils/tabNavigation.js"
import {initQuillEditor} from "../../utils/editorQuill.js"

export default () => {
    const container = document.createElement('div')

    const template = `
        
        <div class="dashboard-header">
            <h2 class="page-title">Criar Novo Artigo</h2>
            <div id= "btn-back" class="action-button" style="background-color: #666; user-select: none;">
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
            
            <div id="info-container" class="form-container active">
                <h3 class="form-title">Detalhes do Artigo</h3>
                
                <div class="form-group">
                    <label for="title">Título do Artigo*</label>
                    <input type="text" id="title" class="form-control" placeholder="Digite o título do artigo">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="category">Categoria*</label>
                        <select id="category" class="form-control">
                            <option value="">Selecione uma categoria</option>
                            <option value="tech">Tecnologia</option>
                            <option value="health">Saúde</option>
                            <option value="business">Negócios</option>
                            <option value="culture">Cultura</option>
                            <option value="science">Ciência</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="author">Autor*</label>
                        <select id="author" class="form-control">
                            <option value="">Selecione o autor</option>
                            <option value="1">João Silva</option>
                            <option value="2">Maria Oliveira</option>
                            <option value="3">Carlos Mendes</option>
                            <option value="4">Ana Santos</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="excerpt">Resumo (máx. 160 caracteres)</label>
                    <textarea id="excerpt" class="form-control" placeholder="Digite um breve resumo do artigo"></textarea>
                </div>
                
                <div class="form-group">
                    <label>Imagem Destacada</label>
                    <div class="image-upload">
                        <div class="image-upload-icon">+</div>
                        <p>Clique para fazer upload ou arraste a imagem aqui</p>
                        <p style="font-size: 12px; margin-top: 5px; color: #888;">Dimensões recomendadas: 1200 x 630px</p>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="publish-date">Data de Publicação</label>
                        <input type="date" id="publish-date" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label for="reading-time">Tempo de Leitura (min)</label>
                        <input type="number" id="reading-time" class="form-control" min="1" value="5">
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Status de Publicação</label>
                    <div class="status-toggle">
                        <span class="toggle-label">Rascunho</span>
                        <label class="toggle-switch">
                            <input type="checkbox">
                            <span class="toggle-slider"></span>
                        </label>
                        <span class="toggle-label">Publicado</span>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button class="btn btn-secondary">Cancelar</button>
                    <button class="btn btn-primary">Salvar Artigo</button>
                </div>
            </div>
        </div>


         <div id="editor-container" class="form-container">
                <h3 class="form-title">Editor de Conteúdo</h3>
                
                <div class="form-group">
                    <label for="subtitle">Subtítulo (opcional)</label>
                    <input type="text" id="subtitle" class="form-control" placeholder="Adicione um subtítulo para o seu artigo">
                </div>
                
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
                <div id="quill-editor-container"></div>
                
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
                
                <div class="form-actions">
                    <button class="btn btn-secondary">Salvar como Rascunho</button>
                    <button class="btn btn-primary" id="btn-tab-next">Próximo: Imagens & SEO</button>
                </div>
            </div>
        </div>


        <div id="tab-seo" class="seo-container">
            <h3 class="form-title">Imagens e Otimização para Buscadores</h3>
            
            <!-- Seção de Galeria de Imagens -->
            <div class="form-group">
                <label>Galeria de Imagens</label>
                <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Adicione imagens adicionais para o corpo do artigo.</p>
                
                <div class="thumbnail-container">
                    <div class="thumbnail-item">
                        <img src="/api/placeholder/120/120" alt="Thumbnail 1">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="thumbnail-item">
                        <img src="/api/placeholder/120/120" alt="Thumbnail 2">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="thumbnail-item">
                        <img src="/api/placeholder/120/120" alt="Thumbnail 3">
                        <div class="remove-btn">×</div>
                    </div>
                    <div class="add-thumbnail">
                        <div class="plus-icon">+</div>
                        <div class="text">Adicionar</div>
                    </div>
                </div>
            </div>
            
            <!-- Seção de SEO -->
            <div class="form-group">
                <label>Análise SEO</label>
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
                </div>
            </div>
            
            <!-- Configurações SEO -->
            <div class="form-group">
                <label for="seo-title">Título SEO</label>
                <input type="text" id="seo-title" class="form-control" placeholder="Digite o título SEO (55-60 caracteres)" value="Como a Inteligência Artificial está moldando o futuro">
                <div style="display: flex; justify-content: flex-end; margin-top: 5px;">
                    <span style="font-size: 12px; color: #666;">55 caracteres</span>
                </div>
            </div>
            
            <div class="form-group">
                <label for="seo-description">Meta Descrição</label>
                <textarea id="seo-description" class="form-control" placeholder="Digite a meta descrição (140-160 caracteres)">Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas. Descubra as implicações éticas e o futuro.</textarea>
                <div style="display: flex; justify-content: flex-end; margin-top: 5px;">
                    <span style="font-size: 12px; color: #666;">143 caracteres</span>
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
                            <img src="/api/placeholder/500/260" alt="Social preview">
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
                
                <div style="border: 2px dashed #ddd; padding: 30px; text-align: center; border-radius: 4px; cursor: pointer; transition: border-color 0.3s; margin-top: 10px;">
                    <div style="font-size: 32px; color: var(--light-purple); margin-bottom: 10px;">⬆️</div>
                    <p>Arraste e solte uma imagem aqui ou clique para selecionar</p>
                    <p style="font-size: 12px; color: #666; margin-top: 10px;">Formatos aceitos: JPG, PNG e GIF. Tamanho máximo: 5MB.</p>
                </div>
            </div>
            
            <!-- Metatags adicionais -->
            <div class="form-group">
                <label>Metatags Adicionais</label>
                <p style="font-size: 13px; color: #666; margin-bottom: 10px;">Adicione metatags personalizadas para melhorar a indexação do seu artigo.</p>
                
                <div style="margin-top: 15px;">
                    <div style="display: flex; margin-bottom: 10px; gap: 10px;">
                        <input type="text" class="form-control" placeholder="Nome da metatag" value="author">
                        <input type="text" class="form-control" placeholder="Conteúdo da metatag" value="Seu Nome">
                        <button style="background-color: #f44336; color: white; border: none; width: 40px; border-radius: 4px; cursor: pointer;">×</button>
                    </div>
                    <div style="display: flex; margin-bottom: 10px; gap: 10px;">
                        <input type="text" class="form-control" placeholder="Nome da metatag" value="robots">
                        <input type="text" class="form-control" placeholder="Conteúdo da metatag" value="index, follow">
                        <button style="background-color: #f44336; color: white; border: none; width: 40px; border-radius: 4px; cursor: pointer;">×</button>
                    </div>
                    <button style="display: flex; align-items: center; gap: 5px; background: none; border: 1px dashed #ddd; padding: 8px 15px; border-radius: 4px; cursor: pointer; color: var(--purple);">
                        <span>+</span> Adicionar nova metatag
                    </button>
                </div>
            </div>

            <!-- Ações do formulário -->
            <div class="form-actions">
                <button class="btn btn-secondary">Cancelar</button>
                <button class="btn btn-primary">Salvar Alterações</button>
            </div>
        </div>
    `
    container.innerHTML = template
    
    backToList(container)
    
    // Adiciona navegação das tabs
    const tabs = container.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {

            tabs.forEach(t => t.classList.remove('active'))
            tab.classList.add('active')
            
            // Esconde todos os containers
            const containers = container.querySelectorAll('.form-container')
            containers.forEach(c => c.classList.remove('active'))
            
            // Mostra o container selecionado
            const containerId = tab.getAttribute('data-container')
            const selectedContainer = container.querySelector(`#${containerId}`)
            if (selectedContainer) {
                selectedContainer.classList.add('active')
            }
        })
    })

    // Adiciona evento para o botão próximo
    const btnNext = container.querySelector('#btn-tab-next')
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const seoTab = container.querySelector('#tab-seo')
            if (seoTab) {
                seoTab.click()
            }
        })
    }

    return container    
}