export const seoCreate = `<div id="seo-container" class="form-container">
            <h3 class="form-title">Imagens e Otimização para Buscadores</h3>
            
            <!-- Seção de Galeria de Imagens -->
            <div class="form-group">
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
        </div>`