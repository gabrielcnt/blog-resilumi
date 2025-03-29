export const initQuillEditor = (container) => {
    // Verificar se o container existe
    if (!container) {
        console.error('Container não foi fornecido');
        return null;
    }

    // Verificar se o elemento do editor existe dentro do container
    const editorElement = container.querySelector('#quill-editor');
    if (!editorElement) {
        console.error('Elemento #quill-editor não encontrado dentro do container');
        return null;
    }

    // Inicialização do Editor Quill
    const quill = new Quill(editorElement, {
        modules: {
            toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'color': [] }, { 'background': [] }],
                ['blockquote', 'code-block'],
                ['link', 'image'],
                ['clean']
            ]
        },
        placeholder: 'Comece a escrever seu artigo aqui...',
        theme: 'snow'
    });
    
    // Contador de palavras e caracteres
    quill.on('text-change', function() {
        const text = quill.getText();
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const charCount = text.length - 1;
        
        const wordCountElement = container.querySelector('#word-count');
        const charCountElement = container.querySelector('#char-count');
        
        if (wordCountElement) wordCountElement.textContent = wordCount;
        if (charCountElement) charCountElement.textContent = charCount;
    });
    
    // Adiciona eventos aos botões de mídia
    const addImageBtn = container.querySelector('#add-image');
    if (addImageBtn) {
        addImageBtn.addEventListener('click', () => {
            const url = prompt('Insira o URL da imagem:');
            if (url) {
                const range = quill.getSelection(true);
                quill.insertEmbed(range.index, 'image', url);
            }
        });
    }
    
    const addVideoBtn = container.querySelector('#add-video');
    if (addVideoBtn) {
        addVideoBtn.addEventListener('click', () => {
            const url = prompt('Insira o URL do vídeo:');
            if (url) {
                const range = quill.getSelection(true);
                quill.insertEmbed(range.index, 'video', url);
            }
        });
    }
    
    const addCodeBtn = container.querySelector('#add-code');
    if (addCodeBtn) {
        addCodeBtn.addEventListener('click', () => {
            const code = prompt('Insira seu código:');
            if (code) {
                const range = quill.getSelection(true);
                quill.format('code-block', true);
                quill.insertText(range.index, code);
            }
        });
    }
    
    return quill;
};