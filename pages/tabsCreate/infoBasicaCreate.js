import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import {db} from "../../services/firebase/config.js"


export const infoBasicaCreate = (articleData = {}) => `
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
            <p id="TrocarImagemInfo" style="cursor: pointer; color: var(--purple);">Trocar imagem</p>
        </div>
        
        <div class="form-row">
            <div class="form-group">
                <label for="publish-date">Data de Publicação</label>
                <input type="date" id="publish-date" class="form-control">
            </div>
            
            <div class="form-group">
                <label for="reading-time">Tempo de Leitura (min)</label>
                <input type="number" id="reading-time" class="form-control" min="1" value="0">
            </div>
        </div>
        
        <!--<div class="form-actions">
            <button class="btn btn-secondary">Cancelar</button>
            <button class="btn btn-primary">Próximo: Conteúdo</button>
        </div>-->
    </div>`

// Função para carregar categorias do Firebase
export async function loadCategorias(selectedCategoryId = "") {
    try {
        // Busca as categorias no Firestore
        const querySnapshot = await getDocs(collection(db, "categories"));
        const selectElement = document.getElementById('category');
        
        if (selectElement) {
            // Limpa opções existentes, mantendo apenas o placeholder
            selectElement.innerHTML = '<option value="">Selecione uma categoria</option>';
            
            // Adiciona as categorias e marca a selecionada
            querySnapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() })) // Mapeia os documentos para objetos
                .filter(category => category.status === 'Ativo') // Filtra apenas categorias ativas
                .sort((a, b) => a.name.localeCompare(b.name)) // Ordena alfabeticamente
                .forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.id; // Usa o ID como value
                    option.textContent = category.name; // Exibe o nome da categoria
                    
                    // Marca a categoria previamente escolhida como selecionada
                    if (category.id === selectedCategoryId) {
                        option.selected = true;
                    }
                    
                    selectElement.appendChild(option);
                });
        }
    } catch (error) {
        console.error("Erro ao carregar categorias:", error);
        alert("Erro ao carregar categorias. Por favor, recarregue a página.");
    }
}

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

     // Botão para trocar a imagem
     const botaoTrocar = document.getElementById('TrocarImagemInfo');
     if (botaoTrocar && featuredImageInput) {
     botaoTrocar.addEventListener('click', () => {
         featuredImageInput.click(); // Abre o seletor de arquivos
     });
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
    try {
        // Atualiza os seletores para corresponder aos IDs corretos do HTML
        const title = document.getElementById('title')?.value.trim();
        const category = document.getElementById('category')?.value;
        const author = document.getElementById('author')?.value;
        const descricao = document.getElementById('excerpt')?.value.trim(); // Corrigido de 'description' para 'excerpt'
        const thumbnailInput = document.getElementById('featured-image'); // Corrigido de 'thumbnail' para 'featured-image'
        const readingTime = document.getElementById('reading-time')?.value || '1';
        const publishDate = document.getElementById('publish-date')?.value; // Adicionado para capturar a data de publicação

        // Remove validação manual do tempo de leitura já que será calculado automaticamente
        if (!title) {
            throw new Error('O título é obrigatório');
        }
        if (!category) {
            throw new Error('Selecione uma categoria');
        }
        if (!author) {
            throw new Error('O autor é obrigatório');
        }
        if (!descricao) {
            throw new Error('O resumo é obrigatório');
        }

        // Objeto com os dados básicos
        const infoBasica = {
            title,
            category,
            author,
            descricao,
            publishDate: publishDate || new Date().toISOString(), // Usa a data atual se não for fornecida
            readingTime: parseInt(readingTime),
            data: new Date().toISOString(),
            thumbnail: null
        };

        // Verifica se tem arquivo de imagem destacada
        if (thumbnailInput && thumbnailInput.files && thumbnailInput.files[0]) {
            infoBasica.thumbnail = {
                name: thumbnailInput.files[0].name,
                type: thumbnailInput.files[0].type,
                size: thumbnailInput.files[0].size
            };
        }

        console.log('Dados básicos coletados:', infoBasica);
        return infoBasica;

    } catch (error) {
        console.error('Erro ao coletar dados básicos:', error);
        throw new Error(error.message); // Retorna a mensagem específica do erro
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


