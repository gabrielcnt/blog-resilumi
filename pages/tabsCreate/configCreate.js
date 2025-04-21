import { validateInfoBasica, getInfoBasicaData } from "./infoBasicaCreate.js"
import { validateSeoData, getSeoData} from "./seoCreate.js"
import { validateConteudo, getConteudoData } from "./conteudoCreate.js"

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
        <!--<button type="button" class="btn btn-secondary">Voltar: SEO</button>-->
        <button type="button" class="btn btn-primary" id="btn-publish">Publicar Artigo</button>
    </div>
</div>`

export function getConfigData() {
    return {
        status: document.querySelector('input[name="status"]:checked').value,
        scheduledDate: document.querySelector('input[name="status"]:checked').value === 'scheduled' 
            ? new Date(document.getElementById('schedule-date').value).toISOString() 
            : null,
        featured: document.getElementById('featured').checked,
        newsletter: document.getElementById('newsletter').checked
    };
}

function attachPublishEvent() {
    const publishButton = document.getElementById('btn-publish');

    if (publishButton) {
        publishButton.replaceWith(publishButton.cloneNode(true));
        const newPublishButton = document.getElementById('btn-publish');

        newPublishButton.addEventListener('click', async function () {
            try {
                // Validações
                if (!validateInfoBasica()) {
                    alert("Preencha todos os campos obrigatórios na aba Informações Básicas");
                    return;
                }

                // Valida conteúdo
                const conteudoData = getConteudoData();
                if (!conteudoData || !validateConteudo()) {
                    alert("Verifique o conteúdo do artigo");
                    return;
                }

                if (!validateSeoData()) {
                    alert("Preencha todos os campos SEO obrigatórios");
                    return;
                }

                // Monta objeto final do artigo
                const articleData = {
                    info: getInfoBasicaData(),
                    conteudo: conteudoData,
                    seo: getSeoData(),
                    config: getConfigData(),
                    metadata: {
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                };

                console.log("Dados do artigo:", articleData);

                // Dispara evento com os dados
                const event = new CustomEvent('articleDataReady', { 
                    detail: articleData 
                });
                document.dispatchEvent(event);

            } catch (error) {
                console.error("Erro ao coletar dados do artigo:", error);
                alert("Erro ao preparar dados do artigo: " + error.message);
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
