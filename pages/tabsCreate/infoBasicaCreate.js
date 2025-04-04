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
            <button class="btn btn-secondary" onclick="cancelForm()">Cancelar</button>
            <button class="btn btn-primary" onclick="saveInfoBasica()">Próximo: Conteúdo</button>
        </div>
    </div>`

    document.addEventListener('DOMContentLoaded', () => {
        const inputImage = document.getElementById('featured-image');
    
        if (inputImage) {
            inputImage.addEventListener('change', event => {
                console.log('Imagem selecionada');
            });
        } else {
            console.warn('Input de imagem não encontrado');
        }
    });
    
    
    // Captura a imagem quando um arquivo for selecionado
    document.addEventListener('change', (event) => {
        if (event.target.id === 'fileInput') {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const uploadBox = document.getElementById('uploadBox');
                    uploadBox.innerHTML = `<img src="${e.target.result}" alt="Imagem Selecionada">`;
                };
                reader.readAsDataURL(file);
            }
        }
    });
    

    export function getInfoBasicaData() {
        const title = document.querySelector('#title')?.value.trim()
        const category = document.querySelector('#category')?.value
        const author = document.querySelector('#author')?.value.trim()
        const descricao = document.querySelector('#excerpt')?.value.trim()
        const data = document.querySelector('#publish-date')?.value
        const tempoLeitura = document.querySelector('#reading-time')?.value

    }