
export const infoBasicaCreate = `<div id="info-container" class="form-container">
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
                <button class="btn btn-primary">Próximo: Conteúdo</button>
            </div>
        </div>`

