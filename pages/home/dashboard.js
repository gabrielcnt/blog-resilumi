import {openModal} from "../../utils/modal/modal.js"
import { btnEdit, btnView } from "../../utils/navigation.js"
import {setActiveSection} from "../../utils/sidebarNavigation.js"
import { articleService } from "../../services/articleService.js";


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
                            <th>Visualizações</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                            
                        </tr>
                        <tr>
                           
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

            <!-- MODAL DE CONFIRMAÇÃO DE EXCLUSÃO -->
    <div id="modalDelete" class="modal-backdrop" style="display: none;">
        <div class="modal">
            <div class="modal-header">
                <h3 class="modal-title">Confirmar Exclusão</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Tem certeza que deseja excluir este artigo ?</p>
                <p>Esta ação não pode ser desfeita.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary">Cancelar</button>
                <button id="excluir" class="btn btn-delete">Sim, Excluir</button>
            </div>
        </div>
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
    openModal(container)
    setActiveSection('dashboard-section')

    // Chama a função para carregar os artigos
    readArticles(container);

    return container

    async function readArticles(container) {
        try {
            const articles = await articleService.getAll(); // Busca todos os artigos
            const tbody = container.querySelector("tbody");
            tbody.innerHTML = ""; // Limpa o conteúdo atual da tabela
    
            articles.forEach((article) => {
                const row = `
                    <tr>
                        <td>${article.title || "Sem título"}</td>
                        <td>${article.category || "Sem categoria"}</td>
                        <td>${article.author || "Desconhecido"}</td>
                        <td>${new Date(article.createdAt.toDate()).toLocaleDateString() || "Sem data"}</td>
                        <td><span class="status-badge status-${article.status || "draft"}">${article.status || "Rascunho"}</span></td>
                        <td>${article.views || 0}</td>
                        <td class="actions">
                            <button class="btn btn-view" data-id="${article.id}">Ver</button>
                            <button class="btn btn-edit" data-id="${article.id}">Editar</button>
                            <button class="btn btn-delete" data-id="${article.id}">Excluir</button>
                        </td>
                    </tr>
                `;
                tbody.innerHTML += row;
            });
    
            console.log("Artigos carregados com sucesso!");
    
        } catch (error) {
            console.error("Erro ao carregar artigos:", error);
        }
        // Adicione os eventos de clique para os botões de editar
        const editButtons = container.querySelectorAll(".btn-edit");
        editButtons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const articleId = event.target.getAttribute("data-id");
                window.location.hash = `#/editarArtigo/${articleId}`; // Redireciona para a página de update
            });
        });
    }
}