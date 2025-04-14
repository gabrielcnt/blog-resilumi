import { validateInfoBasica } from "./infoBasicaCreate.js"
import { validateConteudo } from "./conteudoCreate.js"

export const configCreate = `<div id="config-container" class="form-container">
    <h3 class="form-title">Configurações do Artigo</h3>

    <div class="form-group">
        <label>Status de Publicação</label>
        <div class="radio-group">
            <label class="radio-label">
                <input type="radio" name="status" value="published" checked>
                <span class="radio-text">Publicado</span>
            </label>
            <label class="radio-label">
                <input type="radio" name="status" value="draft">
                <span class="radio-text">Rascunho</span>
            </label>
            <label class="radio-label">
                <input type="radio" name="status" value="scheduled">
                <span class="radio-text">Agendar</span>
            </label>
        </div>
    </div>

    <div class="form-group schedule-group" style="display: none;">
        <label for="schedule-date">Data de Publicação</label>
        <input type="datetime-local" id="schedule-date" class="form-control">
    </div>

    <div class="form-group">
        <label>Visibilidade</label>
        <div class="toggle-group">
            <label class="toggle-label">
                <input type="checkbox" id="featured" class="toggle-input">
                <span class="toggle-slider"></span>
                <span class="toggle-text">Destaque na Página Inicial</span>
            </label>
            <label class="toggle-label">
                <input type="checkbox" id="newsletter" class="toggle-input">
                <span class="toggle-slider"></span>
                <span class="toggle-text">Incluir na Newsletter</span>
            </label>
        </div>
    </div>

    <div class="form-actions">
        <button type="button" class="btn btn-secondary">Voltar: SEO</button>
        <button type="button" class="btn btn-primary" id="btn-publish">Publicar Artigo</button>
    </div>
</div>`

function attachPublishEvent() {
    const publishButton = document.getElementById('btn-publish');

    if (publishButton) {
        publishButton.replaceWith(publishButton.cloneNode(true)); // Remove eventos duplicados
        const newPublishButton = document.getElementById('btn-publish');

        newPublishButton.addEventListener('click', function () {
            if (typeof validateInfoBasica === 'function' && typeof validateConteudo === 'function') {
                if (!validateInfoBasica() || !validateConteudo()) {
                    alert("Preencha todos os campos obrigatórios antes de publicar.");
                    return;
                }
            } else {
                console.error("Erro: Função de validação não está definida.");
            }
        });
    }
}

// Executa o evento quando a DOM estiver carregada
document.addEventListener("DOMContentLoaded", attachPublishEvent);

// Observer para carregar eventos dinamicamente apenas se necessário
const observer = new MutationObserver(() => {
    observer.disconnect(); // Evita execução contínua desnecessária
    attachPublishEvent();
});
observer.observe(document.body, { childList: true, subtree: true });