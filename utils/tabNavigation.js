export const setActiveTab = (tabId) => {
    // Remove active de todas as tabs
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })

    // Esconde todos os containers
    const containers = document.querySelectorAll('.form-container')
    containers.forEach(container => {
        container.style.display = 'none'
    })

    // Ativa a tab selecionada e mostra seu conteúdo
    const selectedTab = document.getElementById(tabId)
    if (selectedTab) {
        selectedTab.classList.add('active')
        const containerId = selectedTab.getAttribute('data-container')
        const container = document.getElementById(containerId)
        if (container) {
            container.style.display = 'block'
        }
    }
}

// Inicializa a navegação entre as tabs
export const initTabNavigation = (container) => {
    const tabs = container.querySelectorAll('.tab')
    
    // Esconde todos os containers inicialmente
    const containers = document.querySelectorAll('.form-container')
    containers.forEach(container => {
        container.style.display = 'none'
    })
    
    // Mostra o primeiro container
    const firstContainer = document.querySelector('.form-container')
    if (firstContainer) {
        firstContainer.style.display = 'block'
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault()
            const tabId = tab.id
            setActiveTab(tabId)
        })
    })

    // Ativa primeira tab por padrão
    setActiveTab('tab-info')
}
