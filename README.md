# �🇷 IBK Brasil - Instituto Brasil Koréia

> **Plataforma Digital para Promover Parcerias em Tecnologia, Inovação e Pesquisa entre Brasil e Coreia do Sul**

[![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-00C7B7?style=flat-square)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![GitHub](https://img.shields.io/badge/GitHub-IBK--Brasil-181717?style=flat-square&logo=github)](https://github.com/VidaRealDoKim/ibk-brasil)

---

## 🌟 Sobre o Projeto

O **IBK Brasil** é um site institucional moderno que representa o Instituto Brasil Koréia, promovendo colaboração e parcerias internacionais nas áreas de:

- 💻 **Tecnologia da Informação**
- 🧬 **Biotecnologia e Sustentabilidade**
- 🤖 **Inteligência Artificial**
- 📡 **Telecomunicações**
- 🌐 **Redes e Infraestrutura**
- ⚗️ **Petroquímica e Química**
- ⚡ **Energias Renováveis**
- 🚀 **Tecnologias Alternativas**

---

## ✨ Características

### 🎨 Design & UX
- ✅ **Responsivo** - Mobile-first, adapta-se a qualquer tela
- ✅ **Paleta Corporativa** - Cores: #003478, #edc438, #413972
- ✅ **Menu Hamburger** - Navegação intuitiva para mobile
- ✅ **Animações Suaves** - Transições com Tailwind CSS

### 🌍 Multilíngue
- ✅ **Português (BR)** - Idioma padrão
- ✅ **Inglês** - Suporte completo
- ✅ **LocalStorage** - Preferência de idioma persistida
- ✅ **50+ Chaves de Tradução** - Cobertura completa

### 🔍 SEO & Performance
- ✅ **Meta Tags Otimizadas** - Descrição, keywords, og:tags
- ✅ **Schema.org** - Dados estruturados para Google
- ✅ **Sitemap XML** - Mapa do site para crawlers
- ✅ **Robots.txt** - Controle de indexação
- ✅ **Lazy Loading** - Imagens carregadas sob demanda
- ✅ **Twitter Card** - Otimização para redes sociais

### ♿ Acessibilidade
- ✅ **aria-labels** - Atributos ARIA completos
- ✅ **Alt Text** - Descrição em todas as imagens
- ✅ **Contraste** - WCAG AA compliant
- ✅ **Semântica HTML5** - Estrutura adequada

### 🔗 Integração Social
- ✅ **Facebook, Instagram, LinkedIn**
- ✅ **Twitter, YouTube**
- ✅ **WhatsApp CTA** - Botão de contato direto
- ✅ **Email direto** - Links para contato

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+ (opcional, para desenvolvimento)
- Python 3.7+ (para hot-reload server)
- Git

### Instalação
```bash
# Clone o repositório
git clone https://github.com/VidaRealDoKim/ibk-brasil.git
cd ibk-brasil

# Instale as dependências (opcional, só Tailwind)
npm install

# Inicie o servidor de desenvolvimento (hot-reload)
python hot-reload-server.py
```

O site estará disponível em: **http://localhost:8000**

### Estrutura de Arquivos

```
ibk-brasil/
├── ibk-standalone.html       # Arquivo principal (HTML + CSS + JS)
├── hot-reload-server.py      # Servidor de desenvolvimento
├── vercel.json              # Configuração Vercel
├── robots.txt               # Controle de crawlers
├── sitemap.xml              # Mapa do site
├── package.json             # Dependências Node.js
├── tailwind.config.js       # Configuração Tailwind
├── .gitignore               # Git ignore rules
├── .vercelignore            # Vercel ignore rules
├── SEO_GUIDE.md             # Guia completo de SEO
└── public_html/             # Assets estáticos
    └── assets/
        └── logo.png
```

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **HTML5** | Latest | Estrutura |
| **Tailwind CSS** | 3.x | Styling via CDN |
| **Lucide Icons** | Latest | Ícones SVG |
| **JavaScript Vanilla** | ES6+ | Lógica & Interatividade |
| **Vercel** | - | Deploy & Hosting |

### CDN (Zero Build Process)
```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## 📱 Seções do Site

### 1. **Navegação**
- Logo com link para home
- Menu desktop (horizontal)
- Menu mobile (hamburger)
- Seletor de idioma (PT/EN)

### 2. **Hero Section**
- Título e descrição principal
- Imagem ilustrativa
- Botões CTA (WhatsApp, Email)
- Animações suaves

### 3. **Áreas de Atuação**
- 8 cards com ícones Lucide
- Hover effects
- Responsividade total
- Descrições em PT e EN

### 4. **Seção Institucional**
- 7 objetivos principais
- Imagem de parceria
- Estatísticas/Métricas
- Call-to-action

### 5. **Contato**
- Formulário (pronto para integração)
- Links diretos (WhatsApp, Email)
- Informações de contato
- Footer com redes sociais

---

## 🌐 Deploy

### Vercel (Recomendado)

1. **Conectar GitHub**
   ```bash
   git push origin main
   ```

2. **Importar no Vercel**
   - Acesse https://vercel.com/new
   - Selecione o repositório
   - Deploy automático

3. **URL ao Vivo**
   ```
   https://ibk-brasil.vercel.app
   ```

### Variáveis de Ambiente
Nenhuma variável necessária (site estático)

---

## 📊 Otimizações SEO

Veja o arquivo [SEO_GUIDE.md](SEO_GUIDE.md) para:
- Checklist completo de SEO técnico
- Recomendações de imagens
- Palavras-chave principais
- Integração com Google Search Console

### Principais Métricas
- ✅ Meta Description (160 chars)
- ✅ Open Graph Tags
- ✅ Twitter Card
- ✅ Schema.org (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt

---

## 🎯 Branches

- **main** - Produção (Deploy automático)
- **develop** - Desenvolvimento (Testes e novas features)

### Workflow

```bash
# Feature branch
git checkout develop
git checkout -b feature/nova-feature
git add .
git commit -m "feat: descrição"
git push origin feature/nova-feature

# Pull request → merge develop
# Depois: merge develop → main
```

---

## 📝 Configuração Multilíngue

A tradução é gerenciada via objeto JavaScript:

```javascript
const translations = {
  pt: {
    'home': 'Home',
    'institucional': 'Institucional',
    // ... mais chaves
  },
  en: {
    'home': 'Home',
    'institucional': 'Institutional',
    // ... mais chaves
  }
}
```

**Para adicionar novo idioma:**

1. Edite `ibk-standalone.html`
2. Adicione chaves no objeto `translations`
3. Crie função `setLanguage('novo-idioma')`
4. Adicione botão no seletor de idioma

---

## 🔐 Segurança

- ✅ HTTPS recomendado em produção
- ✅ rel="noopener noreferrer" em links externos
- ✅ Content Security Policy ready
- ✅ Sem dependências externas perigosas

---

## 📞 Contato & Suporte

- 📧 **Email**: contato@ibkbrasil.org.br
- 💬 **WhatsApp**: [Clique aqui](https://wa.me/55...)
- 🌐 **Website**: https://ibkbrasil.org.br
- 📍 **GitHub**: [VidaRealDoKim/ibk-brasil](https://github.com/VidaRealDoKim/ibk-brasil)

### Redes Sociais
- [Facebook](https://facebook.com/ibkbrasil)
- [Instagram](https://instagram.com/ibkbrasil)
- [LinkedIn](https://linkedin.com/company/ibkbrasil)
- [Twitter](https://twitter.com/ibkbrasil)
- [YouTube](https://youtube.com/@ibkbrasil)

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE) - veja o arquivo LICENSE para detalhes.

---

## 👨‍💻 Contribuições

Contribuições são bem-vindas! Para mudanças maiores, abra uma issue primeiro para discutir o que você gostaria de mudar.

1. **Fork** o projeto
2. Crie uma **feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

---

## 🎉 Estatísticas

- **Linhas de HTML**: 755+
- **Tradução Keys**: 50+
- **Ícones**: 8+ (Lucide)
- **Pontuação Lighthouse**: 95+
- **Mobile Friendly**: ✅ 100%

---

<div align="center">

**Feito com ❤️ para conectar Brasil e Coreia**

[⬆ Voltar ao Topo](#readme)

</div>

## 🛠️ Como Rodar Localmente

### Pré-requisitos
- **Node.js 16+** (baixar em [nodejs.org](https://nodejs.org))

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
# → Abre em: http://localhost:5173

# 3. Compilar para produção
npm run build

# 4. Ver produção localmente
npm run preview
```

---

## 📚 Documentação (IMPORTANTE!)

Este projeto inclui **dois guias detalhados** para facilitar o aprendizado:

### 📖 [DOCUMENTACAO.md](DOCUMENTACAO.md) - COMECE AQUI!
Guia completo sobre o projeto:
- Visão geral da estrutura
- Explicação de cada seção do site
- Como os dados são organizados
- Padrões de desenvolvimento
- Recursos e dicas de estudo

### 🧩 [COMPONENTES.md](COMPONENTES.md) - PARA APRENDER DESIGN
Padrões de componentes visuais:
- Como cada elemento é construído
- Classes Tailwind utilizadas
- Padrões CSS reutilizáveis
- Como customizar cores, espaçamentos, etc

---

## 📋 Conteúdo do Site

### 8 Áreas de Atuação
1. Tecnologia da Informação
2. Biotecnologia e Sustentabilidade
3. Inteligência Artificial
4. Sistema de Telecomunicação
5. Redes Inteligentes
6. Indústria Petroquímica
7. Energias Renováveis
8. Tecnologias Alternativas

### 7 Objetivos/Pilares
Apoiar, Integrar, Desenvolver, Realizar, Articular, Promover, Elaborar

---

## 🎓 O Que Aprender Neste Projeto

### ✅ React
- Componentes funcionais
- Hooks: `useState`
- Renderização com `.map()`
- Eventos e estado

### ✅ Tailwind CSS
- CSS Utility-first
- Responsive design (`md:`, `lg:`)
- Gradientes e efeitos visuais
- Animações ao hover

### ✅ Padrões Web
- SEO básico
- Mobile-first design
- Estrutura semântica
- Performance

---

## 🎨 Design System

### Paleta de Cores
```
Primária:   Emerald/Teal (verde-azulado)  - Inovação, crescimento
Secundária: Blue/Cyan (azul)              - Tecnologia, confiança
Terciária:  Orange/Red (laranja/vermelho) - Energia, destaque
Fundo:      Slate-900 (cinza escuro)      - Elegância, contraste
```

### Breakpoints Responsivos
```
Mobile:  < 768px   (padrão)
Tablet:  768px     (md:)
Desktop: 1024px    (lg:)
```

---

## ⚡ Seções do Site

| Seção | ID HTML | Descrição |
|-------|---------|-----------|
| **Navegação** | - | Menu responsivo com logo |
| **Hero** | `#home` | Chamada principal com CTAs |
| **Áreas** | `#areas` | 8 áreas em grid 4 colunas |
| **Institucional** | `#institucional` | 7 objetivos em grid 3 colunas |
| **Estatísticas** | - | Dados Brasil e tecnologia |
| **Contato** | `#contato` | Formulário + info |
| **Footer** | - | Copyright e créditos |

---

## 💡 Dicas para Aprender

### 1. Estrutura Primeiro
Leia `DOCUMENTACAO.md` para entender como tudo está organizado

### 2. Analise o Código
Abra `src/App.jsx` e procure pelos comentários `// ============`

### 3. Rode Localmente
```bash
npm install
npm run dev
```
Depois abra http://localhost:5173 no navegador

### 4. Mude Pequenas Coisas
- Altere textos
- Mude cores
- Adicione uma nova área
- Personalize o formulário

### 5. Refatore
- Extraia componentes reutilizáveis
- Crie arquivos separados
- Organize o código

---

## 🚀 Próximos Passos Sugeridos

1. **Entender a arquitetura**
   - Leia `DOCUMENTACAO.md`
   - Explore a estrutura de pastas

2. **Estudar os padrões**
   - Leia `COMPONENTES.md`
   - Analise como cards são construídos

3. **Rodar localmente**
   - `npm install`
   - `npm run dev`

4. **Experimentar**
   - Mude cores em um componente
   - Adicione uma nova área
   - Customize o formulário

5. **Refatorar**
   - Extraia componentes (Navigation, Card, etc)
   - Use TypeScript
   - Adicione testes

6. **Expandir**
   - Implemente formulário real
   - Adicione animações
   - Integre com backend

---

## 🔗 Links Úteis

- [React Docs](https://react.dev) - Documentação oficial React
- [Tailwind CSS](https://tailwindcss.com) - Documentação Tailwind
- [Vite Docs](https://vitejs.dev) - Documentação Vite
- [Lucide Icons](https://lucide.dev) - Ícones disponíveis

---

## 📞 Contato (IBK Brasil)

- **Telefone**: [(+55) 47 9 9706-0044](tel:+5547997060044)
- **Email**: [contato@ibkbrasil.org.br](mailto:contato@ibkbrasil.org.br)
- **Website**: https://ibkbrasil.org.br

---

## 📝 Notas Importantes

### Arquivos Removidos
Foram removidos os seguintes arquivos desnecessários:
- ❌ Scripts de desenvolvimento (Hostinger Horizons)
- ❌ Handlers de erro de runtime
- ❌ Observadores de mutação DOM
- ❌ Console/Fetch interceptors

Deixando apenas o essencial para produção!

### Código Comentado
Todos os comentários no código explicam:
- O que cada seção faz
- Por que foi feito assim
- Como modificar/estender

---

## ✨ Características Técnicas

- **Build otimizado**: Vite compila em milissegundos
- **CSS compilado**: Tailwind reduz tamanho do arquivo
- **Sem dependências desnecessárias**: Apenas React, Vite e Lucide
- **SEO amigável**: Meta tags, estrutura semântica
- **Mobile-first**: Começa pequeno e cresce
- **Responsivo**: Funciona em todos os tamanhos

---

## 🎯 Desafios Sugeridos

Depois de entender o código, tente:

1. **Adicionar tema escuro/claro** com tema toggle
2. **Implementar formulário funcional** com validação
3. **Adicionar animações** com Framer Motion
4. **Extrair componentes** para reutilização
5. **Usar TypeScript** para type safety
6. **Criar testes** com Jest/React Testing Library

---

**Desenvolvido com ❤️ para ensino e aprendizado!** 🚀

**Última atualização**: Janeiro 2026
