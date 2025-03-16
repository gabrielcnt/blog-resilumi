import { backToList } from "../../utils/navigation.js"
import { btnEdit } from "../../utils/navigation.js"

export default () => {
    const container = document.createElement('div')

    const template = `
    <div class="article-container">
        <div class="dashboard-header">
            <div class="header-content">
                <h2 class="page-title">Visualizar Artigo</h2>
                <div class="header-actions">
                    <div class="action-button btn-edit" style="background-color: var(--light-purple);">
                        Editar Artigo
                    </div>
                    <div id="btn-back" class="action-button" style="background-color: #666;">
                        Voltar para Lista
                </div>
            </div>
        </div>
    </div>
    <div class="article-view-container">
    <div class="article-content">
        <p class="article-excerpt">
            Uma análise profunda sobre o impacto da IA no mercado de trabalho, na educação e no cotidiano das pessoas.
        </p>
        
        <div class="article-body">
            <h2>Introdução</h2>
            <p>A Inteligência Artificial está transformando rapidamente o modo como vivemos e trabalhamos. Neste artigo, exploraremos as principais mudanças e tendências que estão moldando nosso futuro.</p>
            
            <h2>Impacto no Mercado de Trabalho</h2>
            <p>Com o avanço da automação e dos sistemas inteligentes, diversos setores estão passando por transformações significativas. Algumas profissões estão sendo reinventadas, enquanto novas oportunidades surgem.</p>
            
            <h3>Principais Setores Afetados:</h3>
            <ul>
                <li>Indústria e Manufatura</li>
                <li>Serviços Financeiros</li>
                <li>Saúde</li>
                <li>Educação</li>
            </ul>
            
            <h2>O Papel da IA na Educação</h2>
            <p>Sistemas de aprendizado adaptativo e personalizado estão revolucionando a forma como as pessoas aprendem. Plataformas inteligentes podem identificar as necessidades individuais e ajustar o conteúdo adequadamente.</p>
            
            <blockquote>
                "A Inteligência Artificial não está substituindo professores, mas sim fornecendo ferramentas para tornar o ensino mais efetivo e personalizado."
            </blockquote>
            
            <h2>Desafios e Considerações Éticas</h2>
            <p>À medida que a IA se torna mais presente em nossas vidas, surgem importantes questões éticas e desafios que precisam ser abordados pela sociedade.</p>
        </div>
        
        <div class="article-footer">
            <div class="article-stats">
                <div class="stat-item">
                    <span>Visualizações:</span>
                    <strong>1.234</strong>
                </div>
                <div class="stat-item">
                    <span>Comentários:</span>
                    <strong>23</strong>
                </div>
                <div class="stat-item">
                    <span>Compartilhamentos:</span>
                    <strong>45</strong>
                </div>
            </div>
            
            <div class="article-actions">
                <button class="btn btn-secondary">
                    <span>Compartilhar</span>
                </button>
                <button class="btn btn-primary">
                    <span>Deixar Comentário</span>
                </button>
            </div>
        </div>
    </div>
</div>
    `
    container.innerHTML = template

    backToList(container)
    btnEdit(container)
    return container
}