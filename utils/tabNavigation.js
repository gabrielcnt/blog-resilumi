export const setActiveTab = (tabId) => {
    // Remove active de todas as tabs
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    // Ativa a tab selecionada
    const selectedTab = document.getElementById(tabId)
    if (selectedTab) {
        selectedTab.classList.add('active')
    }
}

// Função para carregar o componente correto
const loadComponent = (operation, tabName) => {
    const main = document.getElementById('root')
    main.innerHTML = ''

    // Carrega o componente baseado na operação e tab
    switch(operation) {
        case 'criarArtigo':
            switch(tabName) {
                case 'info':
                    import('../pages/create/tabs/infoBasica.js').then(module => {
                        main.appendChild(module.default())
                        setActiveTab('tab-info')
                    })
                    break
                case 'editor':
                    import('../pages/create/tabs/editor.js').then(module => {
                        main.appendChild(module.default())
                        setActiveTab('tab-editor')
                    })
                    break
                // ...outros casos
            }
            break
            
        case 'editarArtigo':
            switch(tabName) {
                case 'info':
                    import('../pages/update/tabs/infoBasica.js').then(module => {
                        main.appendChild(module.default())
                        setActiveTab('tab-info')
                    })
                    break
                // ...outros casos
            }
            break
    }
}

// Adiciona evento de mudança de hash
window.addEventListener('hashchange', () => {
    const hash = window.location.hash
    const segments = hash.split('/')
    const operation = segments[1]
    const tabName = segments[segments.length - 1]

    if (hash.includes('criarArtigo/') || hash.includes('editarArtigo/')) {
        loadComponent(operation, tabName)
    }
})

// Define tab ativa inicial
window.addEventListener('load', () => {
    const hash = window.location.hash
    const segments = hash.split('/')
    const operation = segments[1]
    let tabName = segments[2] || 'info'

    if (hash.includes('criarArtigo/') || hash.includes('editarArtigo/')) {
        loadComponent(operation, tabName)
    }
})

// Inicializa a navegação entre as tabs
export const initTabNavigation = (container) => {
    const tabs = container.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Agora os links cuidam da navegação
            const tabId = tab.id
            setActiveTab(tabId)
        })
    })
}