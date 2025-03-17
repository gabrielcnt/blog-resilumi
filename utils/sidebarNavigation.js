export const setActiveSection = (sectionId) => {
    // remove a classe active de todos os itens
    const sidebarItens = document.querySelectorAll('.nav-item')
    sidebarItens.forEach(item => {
        item.classList.remove('active')
    })

    const selectItem = document.querySelector(`#${sectionId}`)
    if (selectItem) {
        selectItem.classList.add('active')
    }
}

// Adiciona o evento de mudança de hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash
    switch(hash)
    {
        case '':
            setActiveSection('dashboard-section')
            break
        case '#/categorias':
            setActiveSection('categories-section')
            break
        case '#/comentarios':
            setActiveSection('comments-section')
            break
        case '#/configuracoes':
            setActiveSection('settings-section')
            break
        default:
            setActiveSection('dashboard-section')
    }
})

// Define seção ativa inicial

window.addEventListener('load', () => {
    const hash = window.location.hash || ''
    switch(hash)
    {
        case '':
            setActiveSection('dashboard-section')
            break
        case '#/categorias':
            setActiveSection('categories-section')
            break
        case '#/comentarios':
            setActiveSection('comments-section')
            break
        case '#/configuracoes':
            setActiveSection('settings-section')
            break
        default:
            setActiveSection('dashboard-section')
    }
})
