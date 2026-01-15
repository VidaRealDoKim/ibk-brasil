# 📚 Documentação do Projeto IBK Brasil

## 📋 Visão Geral

Este é um site institucional moderno e responsivo para o **Instituto Brasil Koréia** (IBK), desenvolvido com **React**, **Vite** e **Tailwind CSS**. O projeto demonstra boas práticas de desenvolvimento web com código limpo, bem organizado e fácil de entender.

---

## 🏗️ Estrutura do Projeto

```
ibkbrasil.org.br/
├── src/                          # Código-fonte do projeto
│   ├── App.jsx                   # Componente principal (site completo)
│   ├── main.jsx                  # Ponto de entrada da aplicação React
│   └── index.css                 # Estilos globais e Tailwind
├── public_html/                  # Arquivos compilados para produção
│   ├── index.html                # HTML compilado
│   ├── assets/                   # CSS e JS compilados
│   ├── robots.txt                # SEO - Para buscadores
│   ├── sitemap.xml               # SEO - Mapa do site
│   └── llms.txt                  # Info para modelos de IA
├── package.json                  # Dependências e scripts
├── vite.config.js                # Configuração do Vite
├── tailwind.config.js            # Configuração do Tailwind
└── postcss.config.js             # Configuração do PostCSS
```

---

## 🎨 Componentes Principais

### Estrutura do App.jsx

O arquivo `App.jsx` contém o site completo dividido em 8 seções bem documentadas:

#### 1. **Importações**
```javascript
import React, { useState } from 'react';
import { Mail, Phone, Menu, X, Lightbulb, Target, Rocket, Network } from 'lucide-react';
```
- Apenas ícones necessários são importados (removidos: ChevronRight, Award, Users)
- `useState` para gerenciar menu mobile

#### 2. **Dados (Arrays de objetos)**
```javascript
const areas = [...]      // 8 áreas de atuação com ícones
const objectives = [...]  // 7 objetivos/pilares da instituição
```

#### 3. **Seções do Site**

| Seção | ID | Descrição |
|-------|-----|-----------|
| **Navegação** | - | Menu fixa com logo e links |
| **Hero** | `#home` | Apresentação principal com CTAs |
| **Áreas** | `#areas` | Grid 4 colunas com expertise |
| **Institucional** | `#institucional` | 7 objetivos em 3 colunas |
| **Estatísticas** | - | Dados sobre Brasil e tecnologia |
| **Contato** | `#contato` | Formulário e informações |
| **Rodapé** | - | Copyright e créditos |

---

## 🎯 Recursos Principais

### ✅ Responsividade
```css
Breakpoints:
- Mobile:  < 768px  (md:)
- Tablet:  768px    (md:)
- Desktop: 1024px   (lg:)
```

Cada seção usa `grid-cols-1 md:grid-cols-2 lg:grid-cols-N` para adaptar automaticamente.

### 🎨 Design System

**Cores utilizadas:**
- **Primária**: Emerald/Teal (verde-azulado)
- **Secundária**: Blue/Cyan (azul)
- **Terciária**: Orange/Red (laranja/vermelho)
- **Fundo**: Slate-900 (cinza escuro)

**Efeitos:**
- Gradientes lineares e radiais
- Backdrop blur (vidro fosco)
- Hover animations (transições suaves)
- Blobs de fundo (círculos desfocados)

### 🔧 Componentes Reutilizáveis

**Cards de Área:**
```jsx
{areas.map((area, index) => (
  <div key={index} className="group relative p-6 rounded-2xl ...">
    {/* Ícone, Título, Descrição */}
  </div>
))}
```

**Cards de Objetivo:**
```jsx
{objectives.map((obj, index) => (
  <div key={index} className="p-6 rounded-xl ...">
    {/* Título em destaque, Descrição */}
  </div>
))}
```

### 📱 Menu Responsivo
```javascript
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Desktop: sempre visível
// Mobile: botão hamburger + menu expansível
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências:**
```bash
npm install
```

2. **Rodar em desenvolvimento:**
```bash
npm run dev
```
Abre em `http://localhost:5173`

3. **Compilar para produção:**
```bash
npm build
```
Gera arquivos otimizados em `dist/`

4. **Preview da produção:**
```bash
npm run preview
```

---

## 📦 Dependências

### Produção
```json
{
  "react": "^18.3.1",           // Framework UI
  "react-dom": "^18.3.1",       // Renderização no DOM
  "lucide-react": "^0.263.1"    // Ícones modernos
}
```

### Desenvolvimento
```json
{
  "vite": "^5.3.1",                    // Build tool super rápido
  "tailwindcss": "^3.4.4",             // CSS utilitário
  "postcss": "^8.4.38",                // Processador CSS
  "@vitejs/plugin-react": "^4.3.1"     // Plugin React para Vite
}
```

---

## 🎓 O Que Você Pode Aprender

### 1. **React Hooks**
- `useState` para gerenciar estado do menu

### 2. **Tailwind CSS**
- Utility-first CSS
- Responsive design com prefixos (md:, lg:)
- Gradientes, efeitos blur, animações

### 3. **Componentes Funcionais**
- Arrays de dados + `.map()`
- Props implícitas via objetos
- Composição de componentes

### 4. **SEO Básico**
- Meta tags (description, keywords)
- Links internos (#home, #areas, etc)
- Estrutura semântica com `<section>`

### 5. **Performance**
- CSS compilado (sem HTML/JS desnecessário)
- Imagens otimizadas
- Lazy loading de ícones

---

## 🔍 Melhorias Futuras (Sugestões)

1. **Funcionalidade do Formulário**
   - Integrar com serviço de email (EmailJS, SendGrid)
   - Validação de campos
   - Mensagem de sucesso/erro

2. **Dark/Light Mode**
   - Toggle de tema
   - Persistência em localStorage

3. **Animações Avançadas**
   - Framer Motion para entradas
   - Scroll animations (AOS library)

4. **Componentes Extratos**
   - `<Navigation />`
   - `<HeroSection />`
   - `<AreaCard />`
   - `<ObjectiveCard />`

5. **CMS/Backend**
   - Integrar com Strapi ou Sanity
   - Dados dinâmicos do servidor

---

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Lucide React Icons](https://lucide.dev)
- [MDN Web Docs](https://developer.mozilla.org)

---

## 📝 Convenções de Código

### Comentários
```javascript
// Comentário simples para uma linha

/**
 * Comentário de bloco para seções maiores
 * Explica o propósito e contexto
 */
```

### Nomenclatura
- **Componentes**: PascalCase (`App`, `Component`)
- **Funções/Variáveis**: camelCase (`handleClick`, `userData`)
- **Constantes**: UPPER_SNAKE_CASE (`MAX_ITEMS`, `API_URL`)
- **Classes CSS**: kebab-case (gerado pelo Tailwind)

### Estrutura de Componentes
1. Imports
2. Comentário descritivo
3. useState/hooks
4. Dados (arrays, constantes)
5. Funções helpers
6. Return JSX com comentários de seção

---

## ✨ Dicas de Estudo

1. **Comece pela estrutura**: Entenda como as seções estão organizadas
2. **Analise o CSS**: Veja como Tailwind constrói o design
3. **Trace o fluxo de dados**: Como `areas` e `objectives` são renderizados
4. **Experimente modificar**: Altere cores, adicione novas áreas, mude textos
5. **Build para produção**: Veja o resultado final compilado

---

## 🤝 Suporte

Para dúvidas ou problemas:
1. Verifique o console do navegador (F12 > Console)
2. Confira a documentação das dependências
3. Teste em modo desenvolvimento com `npm run dev`

**Bom estudo! 🚀**
