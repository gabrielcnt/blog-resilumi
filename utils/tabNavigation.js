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
    // Ativa a primeira tab após o DOM estar pronto
    setTimeout(() => {
        setActiveTab('tab-info')
    }, 0)

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

// Adiciona evento load para manter estado após refresh
window.addEventListener('load', () => {
    // Pega o caminho completo da URL
    const path = window.location.pathname + window.location.hash
    
    // Verifica se está na página de criação
    if (path.includes('/create') || path.includes('/conteudo')) {
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
        // Previne redirecionamento
        event.preventDefault()
    }
})

// Remove evento popstate antigo se existir
window.removeEventListener('popstate', null)