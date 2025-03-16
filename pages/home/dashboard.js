import { btnEdit, btnView } from "../../utils/navigation.js"
export default () => {
    const container = document.createElement('div')


    const template = `
            <div class="dashboard-header">
                <h2 class="page-title">Lista de Artigos</h2>
                        <button class="action-button" id="btnCreateArticle">
                            <span>Novo Artigo</span>
                        </button>
            </div>
            
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-title">Total de Artigos</div>
                    <div class="stat-value">48</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">Publicados</div>
                    <div class="stat-value">36</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">Rascunhos</div>
                    <div class="stat-value">8</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">Agendados</div>
                    <div class="stat-value">4</div>
                </div>
            </div>
            
            <div class="search-filter">
                <input type="text" placeholder="Buscar artigos...">
                <select>
                    <option value="">Todos os status</option>
                    <option value="published">Publicado</option>
                    <option value="draft">Rascunho</option>
                    <option value="scheduled">Agendado</option>
                </select>
                <select>
                    <option value="">Todas as categorias</option>
                    <option value="tech">Tecnologia</option>
                    <option value="health">Saúde</option>
                    <option value="business">Negócios</option>
                    <option value="culture">Cultura</option>
                    <option value="science">Ciência</option>
                </select>
            </div>
            
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Categoria</th>
                            <th>Autor</th>
                            <th>Data</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Como a Inteligência Artificial está moldando o futuro</td>
                            <td>Tecnologia</td>
                            <td>João Silva</td>
                            <td>12/03/2025</td>
                            <td><span class="status-badge status-published">Publicado</span></td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Novos avanços no tratamento do Alzheimer</td>
                            <td>Saúde</td>
                            <td>Maria Oliveira</td>
                            <td>10/03/2025</td>
                            <td><span class="status-badge status-published">Publicado</span></td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Estratégias para crescimento sustentável em 2025</td>
                            <td>Negócios</td>
                            <td>Carlos Mendes</td>
                            <td>08/03/2025</td>
                            <td><span class="status-badge status-draft">Rascunho</span></td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>O renascimento da literatura regional no mundo digital</td>
                            <td>Cultura</td>
                            <td>Ana Santos</td>
                            <td>05/03/2025</td>
                            <td><span class="status-badge status-published">Publicado</span></td>
                            <td class="actions">
                                <button class="btn btn-view">Ver</button>
                                <button class="btn btn-edit">Editar</button>
                                <button class="btn btn-delete">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Nova descoberta sobre energia renovável</td>
                            <td>Ciência</td>
                            <td>Rafael Costa</td>
                            <td>03/03/2025</td>
                            <td><span class="status-badge status-scheduled">Agendado</span></td>
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
                <div class="pagination-item">◀</div>
                <div class="pagination-item active">1</div>
                <div class="pagination-item">2</div>
                <div class="pagination-item">3</div>
                <div class="pagination-item">4</div>
                <div class="pagination-item">▶</div>
            </div>
        `
    container.innerHTML = template

    //adicionar o evento após renderizar o template
    const btnCreateArticle = container.querySelector('#btnCreateArticle')
    btnCreateArticle.addEventListener('click', () => {
        window.location.hash = "#/criarArtigo"
    })
    btnView(container)
    btnEdit(container)
    return container
        
}