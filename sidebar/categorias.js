import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"

import {db} from "../services/firebase/config.js"

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
        <div class="toggle-group">
            <label class="toggle-label">
                <div class="toggle-switch">
                    <input type="checkbox" class="toggle-input" id="status-toggle" checked>
                    <span class="toggle-slider"></span>
                </div>
                <span class="toggle-text">Status: Ativo</span>
            </label>
        </div>
    </div>
    <div class="form-group">
        <div class="toggle-group">
            <label class="toggle-label">
                <div class="toggle-switch">
                    <input type="checkbox" class="toggle-input" id="featured-toggle">
                    <span class="toggle-slider"></span>
                </div>
                <span class="toggle-text">Destaque: Não</span>
            </label>
        </div>
    </div>
</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary">Cancelar</button>
                        <button class="btn btn-primary">Salvar</button>
                    </div>
                </div>
            </div>
            
            <!-- Modal de confirmação de exclusão -->
        <div id="modalDelete" class="modal-backdrop" style="display: none;">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Confirmar Exclusão</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Tem certeza que deseja excluir esta categoria?</p>
                    <p>Esta ação não pode ser desfeita.</p>
                    <p class="category-name-to-delete"></p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary">Cancelar</button>
                    <button id="excluir" class="btn btn-delete">Sim, Excluir</button>
                </div>
            </div>
        </div>`
    

    container.innerHTML = template

    const elements = {
        newCategoryBtn: container.querySelector('.action-button'),
        modalBackdrop: container.querySelector('.modal-backdrop'),
        modalCloseBtn: container.querySelector('.modal-close'),
        modalCancelBtn: container.querySelector('.btn-secondary'),
        modalSaveBtn: container.querySelector('.btn-primary'),
        modalTitle: container.querySelector('.modal-title'),
        categoryNameInput: container.querySelector('#category-name'),
        categoryDescInput: container.querySelector('#category-description'),
        toggleInputs: container.querySelectorAll('.toggle-switch input'),  // Adicionada a vírgula
        modalDelete: container.querySelector('#modalDelete'),
        modalDeleteClose: container.querySelector('#modalDelete .modal-close'),
        modalDeleteCancel: container.querySelector('#modalDelete .btn-secondary'),
        modalDeleteConfirm: container.querySelector('#modalDelete #excluir'),
        categoryNameToDelete: container.querySelector('.category-name-to-delete')
    }

    // 3. Funções do Firebase
    const saveCategory = async (categoryData, id = null) => {
        try {
            if (id) {
                const docRef = doc(db, "categories", id)
                await updateDoc(docRef, categoryData)
            } else {
                await addDoc(collection(db, "categories"), categoryData)
            }
            await loadCategories() // Recarrega a tabela
        } catch (error) {
            console.error("Erro ao salvar categoria:", error)
            alert("Erro ao salvar categoria")
        }
    }

    const deleteCategory = async (id) => {
        try {
            await deleteDoc(doc(db, "categories", id))
            await loadCategories() // Recarrega a tabela
        } catch (error) {
            console.error("Erro ao deletar categoria:", error)
            alert("Erro ao deletar categoria")
        }
    }

    const loadCategories = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"))
            
            // Mapeia os documentos para um array de categorias
            const categories = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
    
            // Contar o total de categorias
            const totalCategories = categories.length;
    
            // Atualiza o número de categorias na div
            document.querySelector('.stat-value').textContent = totalCategories;
    
            // Chama a função para atualizar a tabela (se necessário)
            updateTable(categories);
        } catch (error) {
            console.error("Erro ao carregar categorias:", error);
            alert("Erro ao carregar categorias");
        }
    }

    // 4. Funções auxiliares
    const updateTable = (categories) => {
        const tbody = container.querySelector('tbody')
        tbody.innerHTML = categories.map(category => `
            <tr>
                <td>${category.name}</td>
                <td>${category.description}</td>
                <td>${category.totalArticles || 0}</td>
                <td><span class="status-badge status-${category.status.toLowerCase()}">${category.status}</span></td>
                <td>${category.featured ? 'Sim' : 'Não'}</td>
                <td class="actions">
                    <button class="btn btn-edit" data-id="${category.id}">Editar</button>
                    <button class="btn btn-delete" data-id="${category.id}">Excluir</button>
                </td>
            </tr>
        `).join('')
    }

    const updateToggleLabels = () => {
        elements.toggleInputs.forEach(input => {
            const toggleText = input.closest('.toggle-label').querySelector('.toggle-text')
            if (input.id === 'status-toggle') {
                toggleText.textContent = `Status: ${input.checked ? 'Ativo' : 'Inativo'}`
            } else if (input.id === 'featured-toggle') {
                toggleText.textContent = `Destaque: ${input.checked ? 'Sim' : 'Não'}`
            }
        })
    }

    // 5. Funções dos modais
    const closeModal = () => {
        elements.modalBackdrop.style.display = 'none'
        resetModalToCreate()
    }

    const closeDeleteModal = () => {
        elements.modalDelete.style.display = 'none'
    }

    const resetModalToCreate = () => {
        elements.modalTitle.textContent = 'Nova Categoria'
        elements.categoryNameInput.value = ''
        elements.categoryDescInput.value = ''
        elements.toggleInputs[0].checked = true
        elements.toggleInputs[1].checked = false
        updateToggleLabels()
        delete elements.modalSaveBtn.dataset.categoryId
    }

    const fillEditModal = (category) => {
        elements.categoryNameInput.value = category.name
        elements.categoryDescInput.value = category.description
        elements.toggleInputs[0].checked = category.status === 'Ativo'
        elements.toggleInputs[1].checked = category.featured
        elements.modalTitle.textContent = 'Editar Categoria'
        elements.modalSaveBtn.dataset.categoryId = category.id
        updateToggleLabels()
    }

    // 6. Event Listeners
    elements.newCategoryBtn.addEventListener('click', () => {
        resetModalToCreate()
        elements.modalBackdrop.style.display = 'flex'
    })

    elements.modalCloseBtn.addEventListener('click', closeModal)
    elements.modalCancelBtn.addEventListener('click', closeModal)
    elements.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.modalBackdrop) closeModal()
    })

    // Adicionando os ouvintes de eventos para o botão de "Excluir" nas categorias
    const deleteBtns = container.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoryId = e.target.getAttribute('data-id');
            const categoryName = e.target.closest('tr').querySelector('td').textContent; // Obtendo o nome da categoria
            elements.categoryNameToDelete.textContent = categoryName; // Colocando o nome no modal
            elements.modalDelete.style.display = 'flex';
            elements.modalDeleteConfirm.addEventListener('click', async () => {
                await deleteCategory(categoryId);
                closeDeleteModal(); // Fecha o modal de confirmação após exclusão
            });
        });
    });

    elements.modalDeleteClose.addEventListener('click', closeDeleteModal)
    elements.modalDeleteCancel.addEventListener('click', closeDeleteModal)
    
    elements.toggleInputs.forEach(input => {
        input.addEventListener('change', updateToggleLabels)
    })

    elements.modalSaveBtn.addEventListener('click', async () => {
        const categoryData = {
            name: elements.categoryNameInput.value.trim(),
            description: elements.categoryDescInput.value.trim(),
            status: elements.toggleInputs[0].checked ? 'Ativo' : 'Inativo',
            featured: elements.toggleInputs[1].checked
        }

        if (!categoryData.name) {
            alert('O nome da categoria é obrigatório')
            return
        }

        const isEditing = elements.modalSaveBtn.dataset.categoryId
        await saveCategory(categoryData, isEditing)
        closeModal();  // Fechando o modal após salvar a categoria
    })

    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const row = e.target.closest('tr')
            const categoryName = row.cells[0].textContent
            const categoryId = e.target.dataset.id
            elements.categoryNameToDelete.textContent = categoryName
            elements.modalDeleteConfirm.dataset.categoryId = categoryId
            elements.modalDelete.style.display = 'flex'
        }

        if (e.target.classList.contains('btn-edit')) {
            const row = e.target.closest('tr')
            const category = {
                id: e.target.dataset.id,
                name: row.cells[0].textContent,
                description: row.cells[1].textContent,
                status: row.cells[3].querySelector('.status-badge').textContent,
                featured: row.cells[4].textContent === 'Sim'
            }
            fillEditModal(category)
            elements.modalBackdrop.style.display = 'flex'
        }
    })

    elements.modalDeleteConfirm.addEventListener('click', async () => {
        const categoryId = elements.modalDeleteConfirm.dataset.categoryId
        await deleteCategory(categoryId)
        closeDeleteModal()
    })

    // 7. Carrega as categorias ao iniciar
    loadCategories()

    return container
}