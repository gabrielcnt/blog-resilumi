export const openModal = (container) => {
    const modalDelete = container.querySelector('#modalDelete')
    const deleteButtons = container.querySelectorAll('.btn-delete')
    const closeModal = container.querySelector('.modal-close')
    const cancelBtn = container.querySelector('.btn-secondary')
    const simExcluir = container.querySelector('#excluir')
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalDelete.style.display = 'flex'
        })
    })
    
    closeModal.addEventListener('click', () => {
        modalDelete.style.display = 'none'
    })
    
    cancelBtn.addEventListener('click', () => {
        modalDelete.style.display = 'none'
    })

    simExcluir.addEventListener('click', () => {
        modalDelete.style.display = 'none'

        //Criação do CRUD
    })
}