export const setActiveTab = (tabId) => {
    // remove a classe active de todas as tabs

    const tab = document.querySelectorAll('.tab')
    tab.forEach(tab => {
        tab.classList.remove('active')
    })

    //Remove a classe active de todos os containers

    const containers = document.querySelectorAll('.form-container')
    containers.forEach(container => {
        container.classList.remove('active')
    })

    //adiciona active na tab selecionada
    const selectTab = document.querySelector(`#${tabId}`)
    if (selectTab) {
        selectTab.classList.add('active')
        //encontra e ativa o container correspondente
        const containerId = selectTab.getAttribute('data-container')
        const container = document.querySelector(`#${containerId}`)
        if(container) {
            container.classList.add('active')
        }
    }
}

// Adiciona evento de mudança de hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash
    switch(hash) {
        case '#/conteudo/info':
            setActiveTab('tab-info')
            break
        case '#/conteudo/editor':
            setActiveTab('tab-editor')
            break
        case '#/conteudo/seo':
            setActiveTab('tab-seo')
            break
        case '#/conteudo/config':
            setActiveTab('tab-config')
            break
        default:
            setActiveTab('tab-info')
    }
})

// Define tab ativa inicial
window.addEventListener('load', () => {
    const hash = window.location.hash || ''
    switch(hash) {
        case '#/conteudo/info':
            setActiveTab('tab-info')
            break
        case '#/conteudo/editor':
            setActiveTab('tab-editor')
            break
        case '#/conteudo/seo':
            setActiveTab('tab-seo')
            break
        case '#/conteudo/config':
            setActiveTab('tab-config')
            break
        default:
            setActiveTab('tab-info')
    }
})