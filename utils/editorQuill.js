
export const initQuillEditor = (container) => {
    // Verificações iniciais
    if (!container) {
        console.error('Container não foi fornecido');
        return null;
    }

    const editorElement = container.querySelector('#quill-editor');
    if (!editorElement) {
        console.error('Elemento #quill-editor não encontrado');
        return null;
    }

    // Toolbar customizada
    const toolbarOptions = {
        container: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'color': [] }, { 'background': [] }],
            ['blockquote', 'code-block'],
            ['link', 'image'],
            ['clean']
        ],
        handlers: {
            underline: function(value) {
                this.quill.format('underline', !this.quill.getFormat().underline);
            },
            strike: function(value) {
                this.quill.format('strike', !this.quill.getFormat().strike);
            }
        }
    };

    // Configuração do Quill com handlers customizados
    const quill = new Quill(editorElement, {
        modules: {
            toolbar: toolbarOptions
        },
        theme: 'snow',
        placeholder: 'Comece a escrever seu artigo aqui...'
    });

    // Adiciona atalhos de teclado
    quill.keyboard.addBinding({ key: 'U', shortKey: true }, function(range) {
        this.quill.format('underline', !this.quill.getFormat().underline);
    });

    quill.keyboard.addBinding({ key: 'S', shortKey: true, shiftKey: true }, function(range) {
        this.quill.format('strike', !this.quill.getFormat().strike);
    });


    // Contador de palavras
    quill.on('text-change', () => {
        const text = quill.getText();
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
        const charCount = text.length - 1;
        
        const wordCountElement = container.querySelector('#word-count');
        const charCountElement = container.querySelector('#char-count');
        
        if (wordCountElement) wordCountElement.textContent = wordCount;
        if (charCountElement) charCountElement.textContent = charCount;
    });

    // Botões de mídia
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