export const backToList = (container) => {

    const btnBack = container.querySelector('#btn-back')
    btnBack.addEventListener('click', () => {
        window.location.hash = ""
    })
}

export const btnEdit = (container) => {
    const editButtons = container.querySelectorAll('.btn-edit')
    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.hash = "#/editarArtigo"
        })
    })
}

export const btnView = (container) => {
    const viewButtons = container.querySelectorAll('.btn-view')
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.location.hash = "#/verArtigo"
        })
    })
}