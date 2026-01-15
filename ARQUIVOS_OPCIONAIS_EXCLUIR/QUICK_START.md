# 🚀 Quick Start - IBK Brasil

## ⚡ Comece em 30 segundos

### 1. Instalar
```bash
npm install
```

### 2. Rodar
```bash
npm run dev
```

### 3. Abrir
Acesse: **http://localhost:5173**

---

## 📖 Leitura (15 minutos)

### Ordem recomendada:

1. **Este arquivo** (estou lendo agora! 📄)
2. [README.md](README.md) - Visão geral (5 min)
3. [RESUMO_ORGANIZACAO.md](RESUMO_ORGANIZACAO.md) - O que foi feito (3 min)
4. [DOCUMENTACAO.md](DOCUMENTACAO.md) - Detalhes (5 min)
5. [COMPONENTES.md](COMPONENTES.md) - Design patterns (10 min)

---

## 🎯 3 Primeiras Coisas para Fazer

### 1️⃣ Mudar o Título (5 min)

Abra `src/App.jsx` e procure por:
```jsx
<h1 className="text-5xl ...">
  Instituto Brasil Koréia
</h1>
```

Mude para seu texto preferido. Salve (Ctrl+S) e veja a mudança no navegador!

### 2️⃣ Mudar uma Cor (5 min)

Procure por `text-emerald-400` em `src/App.jsx` e mude para:
- `text-purple-400` (roxo)
- `text-pink-400` (rosa)
- `text-blue-400` (azul)

Veja a mudança ao vivo!

### 3️⃣ Adicionar Mais uma Área (10 min)

No `src/App.jsx`, procure pelo array `const areas = [...]`

Adicione um novo objeto:
```javascript
{
  title: 'Minha Nova Área',
  description: 'Descrição do que faz',
  icon: <Rocket className="w-8 h-8" />,
  gradient: 'from-purple-500 to-pink-600'
}
```

Pronto! Novo card aparecerá automaticamente!

---

## 🧠 O Que Você Vai Aprender

| Tópico | Arquivo | Linha |
|--------|---------|-------|
| **React Hooks** | src/App.jsx | ~7 |
| **Arrays & Map** | src/App.jsx | ~15-25 |
| **JSX & Props** | src/App.jsx | ~150+ |
| **Tailwind CSS** | src/index.css | ~1-40 |
| **Responsive Design** | src/App.jsx | Vários |
| **Componentes** | src/App.jsx | Todos |

---

## 📚 Documentos Criados

### 1. README.md
Descrição do projeto, tecnologias, como rodar

### 2. DOCUMENTACAO.md ⭐⭐⭐
**LEIA ISTO!** Tudo sobre o projeto em detalhes:
- Estrutura completa
- O que aprender
- Como cada parte funciona

### 3. COMPONENTES.md ⭐⭐⭐
**ESTUDE ISTO!** Como os componentes são feitos:
- Cada seção explicada
- Classes Tailwind usadas
- Design patterns

### 4. RESUMO_ORGANIZACAO.md
O que foi limpo e organizado no projeto

### 5. QUICK_START.md
Este arquivo! Primeiros passos

---

## 🔍 Explorando o Código

### Estrutura de App.jsx

```javascript
// Linhas 1-2: Imports
// Linhas 4-9: Comentário descritivo
// Linhas 11-12: useState para menu
// Linhas 14-25: Dados de áreas
// Linhas 27-33: Dados de objetivos
// Linhas 35+: JSX do site

// Dentro do JSX:
// - Cada seção tem comentário: // ============ NOME ============
// - Componentes tem explicação de propósito
// - Classes Tailwind são auto-explicativas
```

### Encontrando o que procura

Use **Ctrl+F** para buscar:
- `// ====` - Encontra divisores de seções
- `const ` - Encontra dados/variáveis
- `className="` - Encontra estilos
- `.map((` - Encontra componentes dinâmicos

---

## 🎨 Customizações Rápidas

### Mudar Cor Primária (Emerald para outra)
```bash
# No VSCode: Ctrl+H (Find and Replace)
Find:    text-emerald-
Replace: text-purple-

Find:    from-emerald-
Replace: from-purple-

Find:    to-emerald-
Replace: to-purple-
```

### Aumentar Espaçamento
```jsx
// Antes:
<section className="py-20 px-4">

// Depois (maior):
<section className="py-32 px-8">
```

### Mudar Fonte e Tamanho
```jsx
// Antes:
<h1 className="text-5xl md:text-6xl lg:text-7xl">

// Depois (menor):
<h1 className="text-4xl md:text-5xl lg:text-6xl">
```

---

## ❓ Dúvidas Frequentes

### P: Onde está o formulário funcional?
**R:** No `src/App.jsx` linhas ~356-373. Atualmente não envia nada. Para funcionar, integre com EmailJS ou backend.

### P: Como adicionar mais ícones?
**R:** Importe em `src/App.jsx`:
```javascript
import { Mail, Phone, Menu, X, SeuNovoIcone } from 'lucide-react';
```

### P: Como mudar responsividade?
**R:** Os breakpoints estão em `tailwind.config.js`. As classes `md:` e `lg:` controlam telas diferentes.

### P: Posso usar isso em um projeto real?
**R:** Sim! Está otimizado para produção. Execute `npm run build` para gerar arquivos compilados.

---

## 🚀 Próximos Desafios

### Fácil ⭐
- [ ] Mudar cores do site
- [ ] Adicionar nova área
- [ ] Mudar textos
- [ ] Modificar formulário

### Médio ⭐⭐
- [ ] Adicionar nova seção
- [ ] Extrair componente (ex: Navigation.jsx)
- [ ] Implementar localStorage (salvar dados)
- [ ] Adicionar animações simples

### Difícil ⭐⭐⭐
- [ ] Implementar formulário real (backend)
- [ ] Adicionar TypeScript
- [ ] Criar testes
- [ ] Melhorar performance
- [ ] Adicionar CMS

---

## 💻 Comandos Úteis

```bash
# Desenvolvimento
npm run dev              # Rodar servidor local

# Produção
npm run build            # Compilar para produção
npm run preview          # Ver build compilado localmente

# Limpeza
npm install              # Reinstalar dependências
npm update               # Atualizar dependências
```

---

## 📞 Contato (IBK)

Se precisar contatar:
- 📱 [(+55) 47 9 9706-0044](tel:+5547997060044)
- 📧 [contato@ibkbrasil.org.br](mailto:contato@ibkbrasil.org.br)

---

## 🎓 Recursos de Aprendizado

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)
- [Lucide Icons](https://lucide.dev)

---

## ✨ Checklist de Estudo

- [ ] Li README.md
- [ ] Li DOCUMENTACAO.md
- [ ] Li COMPONENTES.md
- [ ] Rodei `npm install`
- [ ] Rodei `npm run dev`
- [ ] Abri http://localhost:5173
- [ ] Mudei um texto no código
- [ ] Mudei uma cor
- [ ] Adicionei uma nova área
- [ ] Entendi como `.map()` funciona
- [ ] Explorei as classes Tailwind
- [ ] Entendi a estrutura responsiva

---

## 🎯 Resumo

| O Quê | Onde | Tempo |
|-------|------|-------|
| Entender projeto | README.md | 5 min |
| Aprender detalhes | DOCUMENTACAO.md | 15 min |
| Estudar padrões | COMPONENTES.md | 20 min |
| Explorar código | src/App.jsx | 30 min |
| Fazer mudanças | Seu editor | ∞ |

---

**Pronto para começar? Rode `npm install && npm run dev` agora! 🚀**

Qualquer dúvida, leia a documentação ou explore o código. Está tudo bem comentado!
