export const infoBasicaCreate = `
    <div id="info-container" class="form-container">
        <h3 class="form-title">Detalhes do Artigo</h3>
        
        <div class="form-group">
            <label for="title">Título do Artigo*</label>
            <input type="text" id="title" class="form-control" placeholder="Digite o título do artigo">
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label for="category">Categoria*</label>
                <select id="category" class="form-control">
                    <option value="">Selecione uma categoria</option>
                    <option value="tech">Tecnologia</option>
                    <option value="health">Saúde</option>
                    <option value="business">Negócios</option>
                    <option value="culture">Cultura</option>
                    <option value="science">Ciência</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="author">Autor*</label>
                <input type="text" id="author" class="form-control" placeholder="Digite o nome do autor">
            </div>
        </div>
        
        <div class="form-group">
            <label for="excerpt">Resumo (máx. 160 caracteres)</label>
            <textarea id="excerpt" class="form-control" placeholder="Digite um breve resumo do artigo"></textarea>
        </div>
        
        <div class="form-group">
            <label>Imagem Destacada</label>
            <div class="image-upload" id="uploadBox">
                <div class="image-upload-icon">+</div>
                <input type="file" id="featured-image" accept="image/*" class="image-upload-input">
                <p>Clique para fazer upload ou arraste a imagem aqui</p>
                <p style="font-size: 12px; margin-top: 5px; color: #888;">Dimensões recomendadas: 1200 x 630px</p>
            </div>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label for="publish-date">Data de Publicação</label>
                <input type="date" id="publish-date" class="form-control">
            </div>
            
            <div class="form-group">
                <label for="reading-time">Tempo de Leitura (min)</label>
                <input type="number" id="reading-time" class="form-control" min="1" value="5">
            </div>
        </div>
        
        <div class="form-actions">
            <button class="btn btn-secondary">Cancelar</button>
            <button class="btn btn-primary">Próximo: Conteúdo</button>
        </div>
    </div>`



/**
 * Aguarda o carregamento do DOM antes de configurar os event listeners
 */
document.addEventListener("DOMContentLoaded", () => {
    // Aumentei o tempo de espera para garantir que todos os elementos estejam carregados
    setTimeout(() => {
      inicializarUploadsDeImagem();
    }, 300); // Aumentado para 300ms
  });
  
  /**
   * Inicializa os listeners para os campos de upload de imagem
   */
  function inicializarUploadsDeImagem() {
    // Tenta configurar listener para 'featured-image' se existir
    const featuredImageInput = document.getElementById('featured-image');
    if (featuredImageInput) {
      console.log("Elemento #featured-image encontrado e configurado.");
      featuredImageInput.addEventListener('change', exibirPreviewImagem);
    }
    
    // Tenta configurar listener para 'fileInput' se existir
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      console.log("Elemento #fileInput encontrado e configurado.");
      fileInput.addEventListener('change', exibirPreviewImagem);
    }
    
    // Se nenhum dos elementos for encontrado, configura um listener global
    if (!featuredImageInput && !fileInput) {
      console.log("Nenhum elemento de upload específico encontrado. Configurando delegação de eventos.");
      // Usa delegação de eventos para capturar qualquer input de arquivo
      document.addEventListener('change', (event) => {
        if (event.target.type === 'file') {
          exibirPreviewImagem(event);
        }
      });
    }
  }
  
  /**
   * Função unificada para exibir a prévia da imagem carregada
   * @param {Event} event - O evento de mudança do input
   */
  function exibirPreviewImagem(event) {
    const inputFile = event.target;
    console.log('Input de arquivo detectado:', inputFile.id || 'sem ID');
    
    if (inputFile.files && inputFile.files.length > 0) {
      const file = inputFile.files[0];
      console.log('Arquivo selecionado:', file.name);
      
      const reader = new FileReader();
      reader.onload = function(e) {
        // Busca o elemento 'uploadBox' para exibir a prévia
        let uploadBox = document.getElementById('uploadBox');
        
        // Se não encontrar 'uploadBox', tenta criar um próximo ao input
        if (!uploadBox) {
          console.log("Elemento #uploadBox não encontrado. Tentando criar próximo ao input.");
          uploadBox = document.createElement('div');
          uploadBox.id = 'uploadBox';
          uploadBox.className = 'upload-preview';
          inputFile.parentNode.insertBefore(uploadBox, inputFile.nextSibling);
        }
        
        uploadBox.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada" style="max-width:100%; height:auto;">`;
      };
      
      reader.readAsDataURL(file);
    }
  }

export function getInfoBasicaData() {
    const title = document.querySelector('#title')?.value.trim()
    const category = document.querySelector('#category')?.value
    const author = document.querySelector('#author')?.value.trim()
    const descricao = document.querySelector('#excerpt')?.value.trim()
    const data = document.querySelector('#publish-date')?.value
    const tempoLeitura = document.querySelector('#reading-time')?.value

    const inputFile = document.querySelector('#featured-image');
    const imagem = inputFile.files.length > 0 ? inputFile.files[0] : null;

    return {
        title,
        category,
        author,
        descricao,
        data,
        tempoLeitura,
        imagem  // Objeto File
    }
}

export function validateInfoBasica() {
    let isValid = true;

    function markInvalid(fieldId) {
        const field = document.getElementById(fieldId);
        const label = document.querySelector(`label[for="${fieldId}"]`);
        if (field) {
            field.classList.add('error-border');
        }
        if (label && !label.querySelector('.error-marker')) {
            label.innerHTML += ' <span class="error-marker" style="color: red;">*</span>';
        }
        isValid = false;
    }

    function clearInvalid(fieldId) {
        const field = document.getElementById(fieldId);
        const label = document.querySelector(`label[for="${fieldId}"]`);
        if (field) {
            field.classList.remove('error-border');
        }
        if (label) {
            label.innerHTML = label.innerHTML.replace(/<span class="error-marker"[^>]*>\*<\/span>/g, '');
        }
    }

    const title = document.getElementById('title')?.value.trim();
    const category = document.getElementById('category')?.value;
    const author = document.getElementById('author')?.value.trim();

    if (!title) markInvalid('title'); else clearInvalid('title');
    if (!category) markInvalid('category'); else clearInvalid('category');
    if (!author) markInvalid('author'); else clearInvalid('author');

    return isValid;
}

// Estilos para erro
const style = document.createElement('style');
style.innerHTML = `
    .error-border { border: 2px solid red !important; }
`;
document.head.appendChild(style);


