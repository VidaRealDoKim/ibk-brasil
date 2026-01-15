# 🎓 IBK Brasil - Site Institucional

**Website moderno e responsivo do Instituto Brasil Koréia**, desenvolvido com React, Vite e Tailwind CSS. Um excelente projeto para estudar desenvolvimento web!

---

## ✨ Características

✅ **100% Responsivo** - Funciona em mobile, tablet e desktop  
✅ **Design Moderno** - Glassmorphism, gradientes e animações suaves  
✅ **Código Limpo** - Bem comentado e organizado para aprendizado  
✅ **SEO Otimizado** - Meta tags, sitemap, robots.txt  
✅ **Performance** - Vite + Tailwind CSS compilado  
✅ **Componentes Reutilizáveis** - Padrões com arrays de dados  

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| **React** | ^18.3.1 | Framework principal |
| **Vite** | ^5.3.1 | Build tool rápido |
| **Tailwind CSS** | ^3.4.4 | Estilos utilitários |
| **Lucide React** | ^0.263.1 | Ícones modernos |

---

## 📁 Estrutura do Projeto

```
ibkbrasil.org.br/
├── src/                          # Código-fonte (React)
│   ├── App.jsx                   # ⭐ Componente principal
│   ├── main.jsx                  # Ponto de entrada
│   └── index.css                 # Estilos globais
│
├── public_html/                  # Build compilado (produção)
│   ├── index.html                # HTML final
│   ├── assets/                   # CSS e JS compilados
│   └── robots.txt / sitemap.xml  # SEO
│
├── DOCUMENTACAO.md               # 📚 Guia detalhado (LEIA ISSO!)
├── COMPONENTES.md                # 🧩 Padrões de componentes
├── package.json                  # Dependências
├── vite.config.js                # Config Vite
├── tailwind.config.js            # Config Tailwind
└── postcss.config.js             # Config PostCSS
```

---

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
