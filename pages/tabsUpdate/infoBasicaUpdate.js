
export const infoBasicaUpdate = `<div id="info-container" class="form-container">
                <h3 class="form-title">Detalhes do Artigo</h3>
                
                <div class="form-group">
                    <label for="edit-title">Título do Artigo*</label>
                    <input type="text" id="edit-title" class="form-control" value="Como a Inteligência Artificial está moldando o futuro">
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="edit-category">Categoria*</label>
                        <select id="edit-category" class="form-control">
                            <option value="tech" selected>Tecnologia</option>
                            <option value="health">Saúde</option>
                            <option value="business">Negócios</option>
                            <option value="culture">Cultura</option>
                            <option value="science">Ciência</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-author">Autor*</label>
                        <select id="edit-author" class="form-control">
                            <option value="1" selected>João Silva</option>
                            <option value="2">Maria Oliveira</option>
                            <option value="3">Carlos Mendes</option>
                            <option value="4">Ana Santos</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="edit-excerpt">Resumo (máx. 160 caracteres)</label>
                    <textarea id="edit-excerpt" class="form-control">Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas.</textarea>
                </div>
                
                <div class="form-group">
                    <label>Imagem Destacada</label>
                    <div class="image-preview">
                        <img src="/api/placeholder/800/400" alt="Imagem do artigo">
                    </div>
                    <div class="image-upload">
                        <div class="image-upload-icon">+</div>
                        <p>Clique para substituir ou arraste a nova imagem aqui</p>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="edit-publish-date">Data de Publicação</label>
                        <input type="date" id="edit-publish-date" class="form-control" value="2025-03-12">
                    </div>
                    
                    <div class="form-group">
                        <label for="edit-reading-time">Tempo de Leitura (min)</label>
                        <input type="number" id="edit-reading-time" class="form-control" min="1" value="5">
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Status de Publicação</label>
                    <div class="status-toggle">
                        <span class="toggle-label">Rascunho</span>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-slider"></span>
                        </label>
                        <span class="toggle-label">Publicado</span>
                    </div>
                </div>
                
                <div class="form-actions">
                    <button class="btn btn-secondary">Cancelar</button>
                    <button class="btn btn-primary">Atualizar Artigo</button>
                </div>
            </div>`