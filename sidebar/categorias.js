

export default () => {
    const container = document.createElement('div')

    const template = `<div class="dashboard-header">
                <h2 class="page-title">Gerenciar Categorias</h2>
                <button class="action-button">
                    <i class="fas fa-plus"></i> Nova Categoria
                </button>
            </div>

            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-title">Total de Categorias</div>
                    <div class="stat-value">8</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">Categoria Mais Popular</div>
                    <div class="stat-value">Saúde Mental</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">Categoria em Destaque</div>
                    <div class="stat-value">Superação</div>
                </div>
            </div>

            <div class="search-filter">
                <input type="text" placeholder="Buscar categorias...">
                <select>
                    <option value="">Ordenar por</option>
                    <option value="name-asc">Nome (A-Z)</option>
                    <option value="name-desc">Nome (Z-A)</option>
                    <option value="articles-desc">Mais artigos</option>
                    <option value="articles-asc">Menos artigos</option>
                </select>
            </div>

            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Total de Artigos</th>
                            <th>Status</th>
                            <th>Destaque</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Saúde Mental</td>
                            <td>Artigos sobre bem-estar psicológico e equilíbrio emocional</td>
                            <td>15</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Sim</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Superação</td>
                            <td>Histórias inspiradoras de pessoas que superaram desafios</td>
                            <td>12</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Sim</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Autoconhecimento</td>
                            <td>Ferramentas e técnicas para desenvolvimento pessoal</td>
                            <td>8</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mindfulness</td>
                            <td>Práticas de atenção plena e meditação para o dia a dia</td>
                            <td>5</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Resiliência</td>
                            <td>Como desenvolver capacidade de adaptação às adversidades</td>
                            <td>7</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Motivação</td>
                            <td>Dicas e estratégias para manter-se motivado</td>
                            <td>6</td>
                            <td><span class="status-badge status-published">Ativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Relacionamentos</td>
                            <td>Artigos sobre relações interpessoais saudáveis</td>
                            <td>4</td>
                            <td><span class="status-badge status-draft">Inativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Produtividade</td>
                            <td>Métodos para otimizar tempo e alcançar objetivos</td>
                            <td>3</td>
                            <td><span class="status-badge status-draft">Inativo</span></td>
                            <td>Não</td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                <a href="#" class="pagination-item">&laquo;</a>
                <a href="#" class="pagination-item active">1</a>
                <a href="#" class="pagination-item">2</a>
                <a href="#" class="pagination-item">3</a>
                <a href="#" class="pagination-item">&raquo;</a>
            </div>

            <!-- Modal para Nova Categoria ou Editar Categoria -->
            <div class="modal-backdrop" style="display: none;">
                <div class="modal">
                    <div class="modal-header">
                        <h3 class="modal-title">Nova Categoria</h3>
                        <button class="modal-close">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="category-name">Nome da Categoria</label>
                            <input type="text" id="category-name" class="form-control" placeholder="Ex: Saúde Mental">
                        </div>
                        <div class="form-group">
                            <label for="category-description">Descrição</label>
                            <textarea id="category-description" class="form-control" placeholder="Descreva brevemente o propósito desta categoria"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="status-toggle">
                                <span class="toggle-label">Status:</span>
                                <label class="toggle-switch">
                                    <input type="checkbox" checked>
                                    <span class="toggle-slider"></span>
                                </label>
                                <span>Ativo</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="status-toggle">
                                <span class="toggle-label">Destaque:</span>
                                <label class="toggle-switch">
                                    <input type="checkbox">
                                    <span class="toggle-slider"></span>
                                </label>
                                <span>Não</span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary">Cancelar</button>
                        <button class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>`

    container.innerHTML = template

    return container
}