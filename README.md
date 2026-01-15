# 🇧🇷 IBK Brasil - Instituto Brasil Koréia

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

### ♿ Acessibilidade
- ✅ **aria-labels** - Atributos ARIA completos
- ✅ **Alt Text** - Descrição em todas as imagens
- ✅ **Semântica HTML5** - Estrutura adequada

### 🔗 Integração Social
- ✅ **Facebook, Instagram, LinkedIn, Twitter, YouTube**
- ✅ **WhatsApp CTA** - Botão de contato direto
- ✅ **Email direto** - Links para contato

---

## 🚀 Quick Start

### Pré-requisitos
- Python 3.7+ (para hot-reload server)
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/VidaRealDoKim/ibk-brasil.git
cd ibk-brasil

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
├── package.json             # Metadados do projeto
├── tailwind.config.js       # Configuração Tailwind
├── .gitignore               # Git ignore rules
├── .vercelignore            # Vercel ignore rules
├── SEO_GUIDE.md             # Guia completo de SEO
├── CONTRIBUTING.md          # Guia de contribuição
├── LICENSE                  # Licença MIT
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
- Tailwind CSS via CDN
- Lucide Icons via CDN
- Nenhum build necessário

---

## 📱 Seções do Site

### 1. **Navegação**
- Logo com link para home
- Menu responsivo (desktop + mobile hamburger)
- Seletor de idioma (PT/EN)

### 2. **Hero Section**
- Título e descrição
- Imagem ilustrativa
- Botões CTA (WhatsApp, Email)

### 3. **Áreas de Atuação**
- 8 cards com ícones
- Hover effects
- Responsividade total

### 4. **Institucional**
- 7 objetivos principais
- Estatísticas
- Call-to-action

### 5. **Contato**
- Formulário
- Links diretos (WhatsApp, Email)
- Footer com redes sociais

---

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# 1. Push para GitHub
git push origin main

# 2. Conecte em https://vercel.com/new
# 3. Vercel faz deploy automático
```

---

## 📊 SEO

Veja [SEO_GUIDE.md](SEO_GUIDE.md) para:
- Checklist completo de SEO técnico
- Recomendações de imagens
- Palavras-chave principais
- Integração com Google Search Console

---

## 🎯 Branches

- **main** - Produção (Deploy automático via Vercel)
- **develop** - Desenvolvimento (Testes e novas features)

### Workflow

```bash
# Criar feature na develop
git checkout develop
git checkout -b feature/sua-feature
git add .
git commit -m "feat: descrição"
git push origin feature/sua-feature
# → Abrir Pull Request para develop
# → Merge em develop
# → Depois fazer PR develop → main
```

---

## 📝 Multilíngue

Adicione traduções no objeto `translations` em `ibk-standalone.html`:

```javascript
const translations = {
  pt: { 'chave': 'Texto português' },
  en: { 'chave': 'English text' }
}
```

Use no HTML com `data-chave`:
```html
<p data-chave>Texto português</p>
```

---

## 🔐 Segurança

- ✅ HTTPS recomendado em produção
- ✅ rel="noopener noreferrer" em links externos
- ✅ Sem dependências externas perigosas

---

## 📞 Contato

- 📧 **Email**: contato@ibkbrasil.org.br
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

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

## 👨‍💻 Contribuições

Leia [CONTRIBUTING.md](CONTRIBUTING.md) para:
- Como reportar bugs
- Como sugerir features
- Como enviar pull requests
- Padrões de código
- Checklist antes de submeter

---

<div align="center">

**Feito com ❤️ para conectar Brasil e Coreia**

</div>
