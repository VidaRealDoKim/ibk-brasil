# 🧩 Guia de Componentes - IBK Brasil

Este arquivo explica cada componente visual e padrão utilizado no projeto.

---

## 🎯 Seção: Navegação

### Localização
`App.jsx` - linhas 108-150

### Estrutura
```jsx
<nav className="fixed top-0 left-0 right-0 z-50 ...">
  {/* Logo */}
  {/* Menu Desktop (hidden md:flex) */}
  {/* Botão Mobile (md:hidden) */}
  {/* Menu Mobile (condicional) */}
</nav>
```

### Classes Tailwind Importantes
- `fixed` - Fica fixa ao scrollar
- `z-50` - Aparece acima de tudo
- `bg-slate-900/95` - Fundo com transparência 95%
- `backdrop-blur-lg` - Efeito vidro
- `border-white/10` - Borda sutil
- `hidden md:flex` - Esconde em mobile, mostra em desktop

### Estados
- Normal: `text-white`
- Hover: `hover:text-emerald-400` (verde)

---

## 🎨 Seção: Hero (Principal)

### Localização
`App.jsx` - linhas 152-185

### Componentes

#### Título Principal
```jsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 
  bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 
  bg-clip-text text-transparent leading-tight">
  Instituto Brasil Koréia
</h1>
```

**Explicação:**
- `text-5xl ... lg:text-7xl` - Responsivo (aumenta em telas maiores)
- `bg-gradient-to-r` - Gradiente da esquerda para direita
- `bg-clip-text` - Gradiente no texto
- `text-transparent` - Deixa texto transparente para mostrar gradiente

#### Descrição
```jsx
<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
  {/* Texto... */}
</p>
```

- `text-gray-300` - Texto cinza claro
- `max-w-3xl mx-auto` - Largura máxima e centra horizontalmente

#### Botões (CTA - Call To Action)

**Botão Primário (Telefone):**
```jsx
<a href="tel:+5547997060044" className="inline-flex items-center gap-2 
  bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 rounded-full 
  font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all 
  shadow-lg shadow-emerald-500/20">
  <Phone className="w-5 h-5" />
  (+55) 47 9 9706-0044
</a>
```

- `inline-flex gap-2` - Alinha ícone e texto com espaço
- `rounded-full` - Bem arredondado
- `shadow-lg shadow-emerald-500/20` - Sombra colorida
- `hover:from-emerald-600` - Escurece ao hover

**Botão Secundário (Email):**
```jsx
<a className="... bg-white/10 backdrop-blur-lg ... border border-white/20 
  hover:bg-white/20 ...">
  {/* Ícone + Email */}
</a>
```

- `bg-white/10` - 10% opacidade branco
- `border border-white/20` - Borda fina

---

## 📊 Seção: Áreas de Atuação

### Localização
`App.jsx` - linhas 187-235

### Padrão: Card com Hover

```jsx
<div className="group relative p-6 rounded-2xl 
  bg-slate-800/30 backdrop-blur-lg 
  border border-white/10 
  hover:border-emerald-500/30 
  transition-all 
  hover:-translate-y-2 
  cursor-pointer">
  
  {/* Gradiente que aparece ao hover */}
  <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} 
    opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}>
  </div>
  
  {/* Conteúdo */}
  <div className="relative">
    <div className="mb-4 text-emerald-400">{area.icon}</div>
    <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
    <p className="text-gray-400 text-sm">{area.description}</p>
  </div>
</div>
```

### Classes Explicadas
- `group` - Ativa estilos de grupo (para group-hover)
- `relative` - Para posicionamento absoluto do gradiente
- `transition-all` - Anima todas as mudanças
- `hover:-translate-y-2` - Move para cima 8px no hover
- `opacity-0 group-hover:opacity-10` - Gradiente invisível que aparece

### Dados
```javascript
const areas = [
  {
    title: string,           // Nome da área
    description: string,     // Explicação
    icon: JSX,              // Componente de ícone
    gradient: string        // Classes de gradiente Tailwind
  }
]
```

---

## 🎯 Seção: Institucional (Objetivos)

### Localização
`App.jsx` - linhas 237-280

### Padrão: Card Simples

```jsx
<div className="p-6 rounded-xl 
  bg-gradient-to-br from-slate-800/50 to-slate-900/50 
  backdrop-blur-lg 
  border border-emerald-500/20 
  hover:border-emerald-500/50 
  transition-all">
  
  <h3 className="text-2xl font-bold text-emerald-400 mb-3">
    {obj.title}
  </h3>
  <p className="text-gray-400 leading-relaxed">
    {obj.description}
  </p>
</div>
```

### Diferenças vs. Card de Área
- Sem `group` (sem hover animation)
- Título em verde destacado
- Mais simples e direto

### Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```
- Mobile: 1 coluna
- Tablet (md): 2 colunas
- Desktop (lg): 3 colunas

---

## 📈 Seção: Estatísticas

### Localização
`App.jsx` - linhas 282-318

### Padrão: Container Grande

```jsx
<div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 
  rounded-3xl p-8 md:p-12 
  border border-emerald-500/20">
  
  {/* Título e Descrição */}
  
  {/* Stats Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    {/* Cada stat: número grande + label */}
  </div>
</div>
```

### Stat Item
```jsx
<div className="p-6">
  <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
    62º
  </div>
  <div className="text-gray-400">
    Posição no IGI
  </div>
</div>
```

---

## 💬 Seção: Contato

### Localização
`App.jsx` - linhas 320-405

### Componente 1: Formulário

```jsx
<form className="space-y-6">
  {/* Cada campo tem label + input */}
</form>
```

- `space-y-6` - Espaço de 24px entre filhos

#### Input Text/Email
```jsx
<input type="text|email" 
  className="w-full px-4 py-3 rounded-lg 
    bg-slate-900/50 
    border border-white/10 
    focus:border-emerald-500 
    focus:outline-none 
    transition-colors"
/>
```

- `w-full` - Ocupar 100% da largura
- `focus:border-emerald-500` - Borda fica verde quando focado
- `focus:outline-none` - Remove outline azul padrão

#### Textarea
```jsx
<textarea rows="4" className="... resize-none">
```

- `resize-none` - Não pode ser redimensionada

#### Button Submit
```jsx
<button type="submit" className="w-full 
  bg-gradient-to-r from-emerald-500 to-teal-600 
  px-8 py-4 rounded-full 
  font-semibold 
  hover:from-emerald-600 hover:to-teal-700 
  transition-all 
  shadow-lg shadow-emerald-500/20">
  Enviar Mensagem
</button>
```

### Componente 2: Informações de Contato

```jsx
<div className="flex items-center justify-center gap-2 text-gray-400">
  <Phone className="w-5 h-5" />
  <a href="tel:..." className="hover:text-emerald-400 transition-colors">
    Número
  </a>
</div>
```

---

## 🦶 Footer

### Localização
`App.jsx` - linhas 407-413

### Código
```jsx
<footer className="py-8 px-4 border-t border-white/10">
  <div className="max-w-7xl mx-auto text-center text-gray-400">
    <p>&copy; {new Date().getFullYear()} Instituto Brasil Koréia...</p>
  </div>
</footer>
```

- `border-t` - Borda no topo
- `text-gray-400` - Texto cinza discreto
- `new Date().getFullYear()` - Ano atual dinâmico

---

## 🎨 Design Tokens

### Cores Tailwind Utilizadas

| Cor | Uso |
|-----|-----|
| `emerald-400/500/600` | Primária (botões, hover) |
| `teal-400/600` | Secundária (gradientes) |
| `blue-400/500/600` | Terciária (acentos) |
| `slate-800/900` | Fundo/Cards |
| `gray-300/400` | Texto |
| `white/10/20` | Bordas e sobreposição |

### Tamanhos Comuns

| Tailwind | Pixels |
|----------|--------|
| `w-5 h-5` | 20x20px (ícones) |
| `w-8 h-8` | 32x32px (ícones grandes) |
| `text-xl` | 20px |
| `text-2xl` | 24px |
| `text-4xl` | 36px |
| `text-5xl` | 48px |

### Espaçamento

| Class | Pixels |
|-------|--------|
| `px-4` `py-3` | 16px (horizontal), 12px (vertical) |
| `mb-2` `mb-3` `mb-6` | 8px, 12px, 24px (abaixo) |
| `gap-2` `gap-4` `gap-6` | 8px, 16px, 24px (entre flex) |

---

## 🔄 Padrões Reutilizáveis

### 1. Container com Max-Width
```jsx
<div className="max-w-7xl mx-auto px-4">
```
- Limita largura a 80rem
- Centraliza
- Padding horizontal para mobile

### 2. Seção
```jsx
<section id="nome" className="py-20 px-4 relative">
```
- `py-20` - Padding vertical (80px)
- `px-4` - Padding horizontal
- `relative` - Para efeitos de fundo

### 3. Gradiente de Texto
```jsx
className="bg-gradient-to-r from-emerald-400 to-teal-400 
  bg-clip-text text-transparent"
```

### 4. Card Glassmorphism
```jsx
className="backdrop-blur-lg rounded-2xl border border-white/10"
```

### 5. Hover Animation
```jsx
className="transition-all hover:border-emerald-500/30 hover:-translate-y-2"
```

---

## 💡 Dicas de Customização

### Mudar Cores Primárias
Procure por `emerald-` e `teal-` e substitua por outra cor (ex: `purple-`, `indigo-`)

### Aumentar/Diminuir Espaçamento
- Aumentar: `py-20` → `py-32`
- Diminuir: `px-4` → `px-2`

### Adicionar Novo Card
Copie a estrutura do `.map()` e adapte os dados

### Alterar Responsividade
Mude os breakpoints: `md:` (768px) e `lg:` (1024px)

---

## 🚀 Próximos Passos

1. **Extrair componentes**: Crie `<Card />`, `<Button />` reutilizáveis
2. **Adicionar animações**: Use Framer Motion
3. **Melhorar tipos**: Adicione TypeScript
4. **Testar**: Crie testes com Jest

**Aproveite o estudo! 🎓**
