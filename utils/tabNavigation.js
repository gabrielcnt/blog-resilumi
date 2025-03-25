// Função para ativar a aba correta
export const setActiveTab = (tabId) => {
    // Remove todas as classes "active"
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'))
    document.querySelectorAll('.form-container').forEach(container => container.classList.remove('active'))

    // Ativa a aba e o container corretos
    const selectedTab = document.getElementById(tabId)
    if (selectedTab) {
        selectedTab.classList.add('active')
        const containerId = selectedTab.getAttribute('data-container')
        const container = document.getElementById(containerId)
        if (container) container.classList.add('active')
    }
}

// Inicializa a navegação entre as abas
export const initTabNavigation = (container) => {
    const tabs = container.querySelectorAll('.tab')

    // Adiciona evento de clique nas abas
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault()
            const tabId = tab.id
            setActiveTab(tabId)

            // Atualiza o hash na URL conforme a operação (criar ou editar)
            const currentHash = window.location.hash
            let newHash
            if (currentHash.includes('criarArtigo')) {
                newHash = `#/criarArtigo/${tabId.replace('tab-', '')}`
            } else if (currentHash.includes('editarArtigo')) {
                newHash = `#/editarArtigo/${tabId.replace('tab-', '')}`
            }
            history.pushState(null, '', newHash)
        })
    })
}

// Controla a navegação com os botões do navegador (voltar/avançar)
window.addEventListener('popstate', () => {
    const hash = window.location.hash
    const segments = hash.split('/')
    const lastSegment = segments[segments.length - 1]

    if (hash.includes('criarArtigo/') || hash.includes('editarArtigo/')) {
        setActiveTab(`tab-${lastSegment}`)
    }
})

// Carrega a aba correta ao carregar a página
window.addEventListener('load', () => {
    const hash = window.location.hash
    let tabName = 'info' // Aba padrão

    // Identifica a operação (criação ou edição) e a aba atual
    if (hash.includes('criarArtigo') || hash.includes('editarArtigo')) {
        const segments = hash.split('/')
        const operation = segments[1] // criarArtigo ou editarArtigo

        // Se não tiver aba definida, redireciona para "info"
        if (segments.length < 3) {
            history.replaceState(null, '', `#/${operation}/info`)
        } else {
            tabName = segments[segments.length - 1]
        }

        // Recarrega o componente correto
        const main = document.getElementById('root')
        main.innerHTML = ''

        if (operation === 'criarArtigo') {
            import('../pages/create/create.js').then(module => {
                main.appendChild(module.default())
                setActiveTab(`tab-${tabName}`)
            })
        } else if (operation === 'editarArtigo') {
            import('../pages/update/update.js').then(module => {
                main.appendChild(module.default())
                setActiveTab(`tab-${tabName}`)
            })
        }
    }
})