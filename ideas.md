# Estratégia de Design - Mariela Forestti Antiguário

## Referência
O site de referência é **tresors.com.br**, um marketplace de antiguidades premium que utiliza:
- Navegação clara com categorias de produtos
- Grid de produtos com imagens de alta qualidade
- Paleta de cores neutra e sofisticada
- Typography elegante e legível
- Layout responsivo e bem organizado

## Abordagem Escolhida: **Elegância Atemporal com Sofisticação Curatorial**

### Design Movement
Minimalismo sofisticado com influências do design de galerias de arte e antiquários de luxo. Inspirado em sites de curadoria premium como Trésors, mantendo a elegância sem poluição visual.

### Core Principles
1. **Curadoria Visual**: Cada elemento é cuidadosamente posicionado, como peças em uma galeria
2. **Sofisticação Discreta**: Detalhes refinados sem excesso; menos é mais
3. **Foco na Conversão**: Design centrado em guiar o usuário para o CTA do WhatsApp
4. **Responsividade Fluida**: Mobile-first, mas desktop igualmente elegante

### Color Philosophy
- **Cor Principal**: Verde Musgo (#2A5C3E) - evoca natureza, antiguidade e sofisticação
- **Cor Secundária**: Off-white (#F5F0E8) - couro envelhecido, papel antigo, elegância discreta
- **Destaque**: Dourado Envelhecido (#C9A96E) - riqueza, luxo, detalhes refinados
- **Fundo**: Creme Suave (#FAF8F4) - quente, acolhedor, premium

**Intenção Emocional**: Transmitir autenticidade, história e exclusividade. O visitante deve sentir que está entrando em um espaço curado e especial.

### Layout Paradigm
- **Hero Section**: Imagem de destaque com overlay de conteúdo (inspirado em Trésors)
- **Seções em Blocos**: Alternância entre fundo claro e ligeiramente texturizado
- **Grid de Produtos**: 3 colunas em desktop, 1 em mobile (como Trésors)
- **Sticky CTA**: Botão fixo no rodapé que aparece ao rolar

### Signature Elements
1. **Divisores Sutis**: Linhas finas em dourado ou verde para separar seções
2. **Cards com Sombra Suave**: Profundidade discreta, sem agressividade
3. **Ícones Minimalistas**: SVG simples em verde ou dourado
4. **Badges "Exclusivo"**: Pequenos selos em dourado sobre as peças

### Interaction Philosophy
- **Hover Effects**: Elevação sutil, mudança de cor em dourado
- **Botões Responsivos**: Feedback visual imediato (scale, cor)
- **Transições Suaves**: 200-300ms para manter elegância
- **Feedback de Clique**: Confirmação visual sem agressividade

### Animation
- Entrada de elementos: fade-in suave (200ms)
- Hover em cards: scale(1.02) + shadow elevation
- Botões: scale(0.97) ao clicar, volta com ease-out
- Scroll reveal: elementos aparecem conforme o usuário rola (opcional, se performance permitir)

### Typography System
- **Títulos**: Playfair Display (serifada elegante) - pesos 700, 600
- **Subtítulos**: Playfair Display 500 ou Lato 600
- **Corpo**: Lato 400 (legibilidade) e 500 (ênfase)
- **Hierarquia**: H1 > H2 > H3 > Corpo, com espaçamento generoso

### Brand Essence
**Positioning**: Antiguário premium que oferece peças únicas com história, curadas por Mariela Forestti para colecionadores e designers que valorizam autenticidade e exclusividade.

**Personality**: Sofisticada, Confiável, Exclusiva

### Brand Voice
- **Headlines**: Evocam emoção e exclusividade, não genéricas
- **CTAs**: Diretas, elegantes, com senso de urgência discreta
- **Microcopy**: Educativa, não condescendente

**Exemplos**:
- ❌ "Bem-vindo ao nosso site" → ✅ "Histórias autênticas, peças únicas"
- ❌ "Clique aqui" → ✅ "Entrar no grupo VIP"

### Wordmark & Logo
- **Logo**: Iniciais "MF" em Playfair Display 700, com um pequeno ícone de joia/folha ao lado
- **Estilo**: Minimalista, elegante, em verde musgo ou dourado
- **Uso**: Header, favicon, rodapé

### Signature Brand Color
**Verde Musgo (#2A5C3E)** - Cor primária que remete a natureza, antiguidade e sofisticação. Usada em botões, bordas e destaques.

---

## Estrutura da Landing Page

### 1. Hero Section
- Imagem de destaque (antiguidades, decoração)
- Logo "MARIELA FORESTTI"
- Subtítulo: "HISTÓRIA, BELEZA E AUTENTICIDADE EM CADA DETALHE"
- Botão CTA: "ENTRAR NO GRUPO VIP DO WHATSAPP"
- Fundo: Creme suave com overlay suave

### 2. Seção "Por Que Entrar?"
- 3 cards em coluna (mobile) / linha (desktop)
- Ícones SVG simples
- Textos curtos e impactantes
- Fundo: Ligeiramente texturizado

### 3. Seção "Últimas Peças"
- 3 produtos em grid
- Imagens de alta qualidade
- Badges "EXCLUSIVO"
- Botão "Ver no Grupo"

### 4. Prova Social
- Contador: "150+ colecionadores no grupo"
- Depoimento curto
- Fundo: Destaque em verde musgo com texto em off-white

### 5. CTA Final (Sticky)
- Botão fixo no rodapé
- "QUERO ENTRAR NO GRUPO VIP"
- Ícone WhatsApp
- Aparece após scroll de 300px

### 6. Rodapé
- Links: Instagram | Sobre | Contato
- Texto: "Antiguidades com alma. Curadoria de Mariela Forestti."
- Redes sociais

---

## Decisões Técnicas
- HTML/CSS/JS puro (sem frameworks externos)
- Google Fonts: Playfair Display + Lato
- Responsividade: Mobile-first, breakpoints em 768px e 1024px
- Botão Sticky: Aparece ao rolar 300px
- Links: Todos abrem em nova aba
- Performance: Sem bibliotecas externas, apenas SVG inline
