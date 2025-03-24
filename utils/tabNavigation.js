export const setActiveTab = (tabId) => {
    // Remove todas as classes active primeiro
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    const containers = document.querySelectorAll('.form-container')
    containers.forEach(container => {
        container.classList.remove('active')
    })

    // Ativa a tab selecionada
    const selectedTab = document.querySelector(`#${tabId}`)
    if (selectedTab) {
        selectedTab.classList.add('active')
        const containerId = selectedTab.getAttribute('data-container')
        const container = document.querySelector(`#${containerId}`)
        if(container) {
            container.classList.add('active')
        }
    }
}


// Adiciona event listeners para as tabs
export const initTabNavigation = (container) => {
    
    const tabs = container.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault()
            const tabId = tab.id
            setActiveTab(tabId)
            
            const hash = `#/conteudo/${tabId.replace('tab-', '')}`
            history.pushState(null, '', hash)
        })
    })
}

// Adiciona evento de mudança de hash
window.addEventListener('popstate', () => {
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

// Definir a aba com base no hash ao carregar a página
window.addEventListener('load', () => {
    const path = window.location.pathname + window.location.hash
    if (path.includes('/create') || path.includes('/editarArtigo') || path.includes('/conteudo')) {
        const hash = window.location.hash
        if (hash.startsWith('#/conteudo/')) {
            const tabId = `tab-${hash.split('/')[2]}`
            setActiveTab(tabId)
        } else {
            setActiveTab('tab-info')
        }
    }
})

// Remove evento popstate antigo se existir
window.removeEventListener('popstate', null)