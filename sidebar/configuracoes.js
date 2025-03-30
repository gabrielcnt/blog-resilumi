export default () => {
    const container = document.createElement('div')
    container.innerHTML = `
          <div class="dashboard-header">
            <h2 class="page-title">Configurações da Página Inicial</h2>
        </div>

        <div class="settings-container">
            <section class="settings-section">
                <h3>Layout e Estrutura</h3>
                
                <div class="form-group">
                    <label>Estilo do Grid de Artigos</label>
                    <select class="form-control">
                        <option value="grid-3">Grid 3 Colunas</option>
                        <option value="grid-2">Grid 2 Colunas</option>
                        <option value="list">Lista Vertical</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Artigos por Página</label>
                    <input type="number" class="form-control" value="9" min="3" max="12">
                    <small class="help-text">Recomendado: 9 artigos para grid de 3 colunas</small>
                </div>
            </section>

            <section class="settings-section">
                <h3>Elementos da Página</h3>
                
                <div class="toggle-group">
                    <label class="toggle-label">
                        <div class="toggle-switch">
                            <input type="checkbox" class="toggle-input" checked>
                            <span class="toggle-slider"></span>
                        </div>
                        <span class="toggle-text">Mostrar Banner Principal</span>
                    </label>

                    <label class="toggle-label">
                        <div class="toggle-switch">
                            <input type="checkbox" class="toggle-input" checked>
                            <span class="toggle-slider"></span>
                        </div>
                        <span class="toggle-text">Mostrar Barra de Categorias</span>
                    </label>

                    <label class="toggle-label">
                        <div class="toggle-switch">
                            <input type="checkbox" class="toggle-input" checked>
                            <span class="toggle-slider"></span>
                        </div>
                        <span class="toggle-text">Mostrar Newsletter</span>
                    </label>
                </div>
            </section>

            <section class="settings-section">
                <h3>Ordenação dos Artigos</h3>
                
                <div class="form-group">
                    <label>Ordem de Exibição</label>
                    <select class="form-control">
                        <option value="recent">Mais Recentes Primeiro</option>
                        <option value="popular">Mais Populares</option>
                        <option value="featured">Artigos Destacados</option>
                    </select>
                </div>
            </section>

            <div class="form-actions">
                <button type="button" class="btn btn-primary">Salvar Alterações</button>
            </div>
        </div>
    `
    return container
}