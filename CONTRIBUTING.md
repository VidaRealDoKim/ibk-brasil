# 🤝 Guia de Contribuição

Obrigado por se interessar em contribuir para o **IBK Brasil**! Este documento fornece as diretrizes para contribuir.

## 📋 Antes de Começar

- Leia o [README.md](README.md) para entender o projeto
- Verifique as [Issues abertas](https://github.com/VidaRealDoKim/ibk-brasil/issues)
- Confira o [SEO_GUIDE.md](SEO_GUIDE.md) para otimizações

## 🚀 Como Contribuir

### 1. **Reporte um Bug**

Se encontrou um bug, abra uma [Issue](https://github.com/VidaRealDoKim/ibk-brasil/issues/new) com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)
- Seu ambiente (OS, browser)

### 2. **Sugira uma Feature**

Gostaria de sugerir uma melhoria? Crie uma [Issue](https://github.com/VidaRealDoKim/ibk-brasil/issues/new) com:
- Título descritivo
- Descrição detalhada da feature
- Casos de uso
- Mockups ou exemplos (se possível)

### 3. **Envie um Pull Request**

#### Setup Inicial
```bash
# 1. Fork o repositório
git clone https://github.com/seu-usuario/ibk-brasil.git
cd ibk-brasil

# 2. Crie uma branch
git checkout develop
git checkout -b feature/sua-feature

# 3. Inicie o dev server
python hot-reload-server.py
```

#### Fazendo Mudanças
```bash
# 4. Edite o arquivo ibk-standalone.html
# 5. Teste no navegador em http://localhost:8000

# 6. Verifique a estrutura
# - HTML semântico
# - Responsividade (mobile, tablet, desktop)
# - Acessibilidade (alt text, aria-labels)
# - SEO (meta tags, links)

# 7. Commit com mensagens claras
git add .
git commit -m "feat: adicione descrição clara da mudança"

# 8. Push para sua branch
git push origin feature/sua-feature
```

#### Abrindo o PR
- Vá para https://github.com/VidaRealDoKim/ibk-brasil/pulls
- Clique em "New Pull Request"
- Selecione `base: develop` (importante!)
- Descreva suas mudanças

## 📝 Padrões de Commit

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```
feat: descrição da nova feature
fix: corrige um bug
docs: mudanças na documentação
style: formatação, sem mudança de código
refactor: refatoração de código
test: adiciona/atualiza testes
chore: atualização de dependências
```

Exemplos:
```bash
git commit -m "feat: add language toggle for Spanish"
git commit -m "fix: correct mobile menu animation"
git commit -m "docs: update SEO guide"
```

## ✅ Checklist Antes de Submeter PR

- [ ] Código segue o padrão do projeto
- [ ] Testei em Chrome, Firefox, Safari
- [ ] Testei em mobile (responsividade)
- [ ] Adicionei alt text em imagens
- [ ] Adicionei aria-labels quando necessário
- [ ] Meta tags estão atualizadas se aplicável
- [ ] Não há erros de console
- [ ] Documentação foi atualizada
- [ ] Branch é baseada em `develop`

## 🎨 Padrões de Código

### HTML
```html
<!-- Use semantic HTML5 -->
<section id="home">
  <h1>Título Principal</h1>
  <p>Parágrafo com conteúdo.</p>
</section>

<!-- Adicione alt text em imagens -->
<img src="image.png" alt="Descrição clara da imagem">

<!-- Use aria-labels em links sozinhos -->
<a href="#" aria-label="Facebook">
  <i data-lucide="facebook"></i>
</a>
```

### JavaScript
```javascript
// Use const/let, não var
const myVar = 'value';

// Use arrow functions
const handleClick = () => { /* ... */ };

// Adicione comentários para lógica complexa
// Salva preferência de idioma no localStorage
localStorage.setItem('language', 'pt');
```

### Tailwind CSS
```html
<!-- Use classes Tailwind responsivas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<!-- Use cores corporativas -->
<p class="text-[#003478]">Texto em azul principal</p>
```

## 🌐 Tradução

Se adicionar novos textos:

1. Adicione chaves em `translations` object:
```javascript
const translations = {
  pt: {
    'sua-chave': 'Seu texto em português',
  },
  en: {
    'sua-chave': 'Your text in English',
  }
}
```

2. Use no HTML com `data-` attributes:
```html
<p data-sua-chave>Seu texto em português</p>
```

## 🔄 Processo de Review

1. **Automated Checks**
   - GitHub Actions verifica formatação
   - Verificação de links quebrados

2. **Manual Review**
   - Maintainers revisam código
   - Podem pedir mudanças
   - Aprovalão mínima de 1 maintainer

3. **Merge**
   - PR é merged em `develop`
   - Será incluída no próximo release

## 📚 Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [SEO Guide](SEO_GUIDE.md)

## ❓ Dúvidas?

- 📧 Email: contato@ibkbrasil.org.br
- 💬 Abra uma [Discussion](https://github.com/VidaRealDoKim/ibk-brasil/discussions)
- 🐛 [Issues](https://github.com/VidaRealDoKim/ibk-brasil/issues)

---

**Obrigado por contribuir! 🎉**
