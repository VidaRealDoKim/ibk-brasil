# 🚀 Guia de Deploy na Vercel

## Passo 1: Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "+" > "New repository"
3. Nome: `ibk-brasil`
4. Descrição: "Instituto Brasil Koréia - Website Bilíngue"
5. Clique em "Create repository"

## Passo 2: Push para o GitHub

No seu computador, na pasta do projeto:

```bash
cd "d:\David Kim\ibkbrasil.org.br"

# Adicione o repositório remoto (substitua seu-usuario)
git remote add origin https://github.com/seu-usuario/ibk-brasil.git

# Envie o código
git branch -M main
git push -u origin main
```

## Passo 3: Deploy na Vercel

### Opção A: Via GitHub (recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Clique em "Import Git Repository"
4. Busque por `ibk-brasil`
5. Clique em "Import"
6. Deixe as configurações padrão (já temos `vercel.json`)
7. Clique em "Deploy"

### Opção B: Via CLI da Vercel

```bash
npm i -g vercel
vercel
# Siga as instruções no terminal
```

## ✅ Resultado

Seu site estará disponível em:
- `https://ibk-brasil.vercel.app` (ou seu domínio customizado)

## 🔄 Atualizações Futuras

Qualquer push para `main` no GitHub dispara um novo deploy automaticamente na Vercel!

```bash
# Faça suas mudanças
git add .
git commit -m "Descrição da mudança"
git push origin main
# Vercel faz deploy automaticamente ✨
```

## 📋 Checklist

- [ ] Repositório criado no GitHub
- [ ] Código feito push para GitHub
- [ ] Projeto importado na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL da Vercel

## ⚙️ Domínio Customizado (Opcional)

Para usar um domínio personalizado:

1. Na Vercel, vá para projeto > Settings > Domains
2. Adicione seu domínio (ex: ibkbrasil.org.br)
3. Siga as instruções para apontamento DNS
4. Pronto! ✨

---

**Dúvidas?** Consulte a [documentação da Vercel](https://vercel.com/docs)
