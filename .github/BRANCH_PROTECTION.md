# 🔒 Guia: Branch Protection Rules

Para máxima segurança, configure estas regras no GitHub.

## Como Configurar

1. Vá para **Settings** → **Branches**
2. Clique em **Add rule**
3. Configure conforme abaixo para cada branch

---

## 🔐 Regra para `main` (Produção)

### Aplicar a: `main`

```
Pattern: main
```

### Protections

✅ **Require pull request reviews before merging**
- Número de revisões: **2**
- Dismissar stale PR approvals: **Sim**
- Require review from code owners: **Sim**

✅ **Require status checks to pass**
- Require branches to be up to date: **Sim**
- Require code quality checks: **Sim** (se habilitado)

✅ **Require signed commits**: **Sim**

✅ **Dismiss stale pull request approvals**: **Sim**

✅ **Require conversation resolution**: **Sim**

✅ **Restrict who can push**: **Maintainers only**

✅ **Allow force pushes**: **Não**

✅ **Allow deletions**: **Não**

---

## 🟡 Regra para `develop` (Staging)

### Aplicar a: `develop`

```
Pattern: develop
```

### Protections

✅ **Require pull request reviews before merging**
- Número de revisões: **1**
- Dismissar stale PR approvals: **Sim**

✅ **Require status checks to pass**
- Require branches to be up to date: **Sim**

⚠️ **Require signed commits**: **Recomendado**

✅ **Dismiss stale pull request approvals**: **Sim**

⚠️ **Restrict who can push**: **Opcional**

✅ **Allow force pushes**: **Não**

✅ **Allow deletions**: **Não**

---

## 🟢 Regra para Features (`feature/*`)

### Aplicar a: `feature/*`

```
Pattern: feature/*
```

### Protections

⚠️ **Require pull request reviews**: **Opcional**
- Se sim: 1 revisão

✅ **Require branches to be up to date**: **Sim**

---

## 📋 Checklist de Setup

- [ ] Configurar `main` com 2 revisões
- [ ] Configurar `develop` com 1 revisão
- [ ] Exigir commits assinados em `main`
- [ ] Proibir force pushes e deletions
- [ ] Configurar CODEOWNERS (veja próxima seção)

---

## 👥 Configurar CODEOWNERS

Crie `.github/CODEOWNERS`:

```
# Todos os arquivos precisam de review do time de segurança
* @security-team

# Arquivos sensíveis precisam de 2 reviews
vercel.json @devops-team @security-team
.github/ @devops-team
SECURITY.md @security-team
```

---

## 🔄 Workflow Recomendado

```
1. Criar branch feature/
2. Fazer commits com GPG signing
3. Enviar PR para develop
4. Review + Aprovação (1 pessoa)
5. Merge para develop
6. Quando pronto, PR develop → main
7. Review + Aprovação (2 pessoas)
8. Merge para main = DEPLOY
```

---

## 🛡️ Segurança Adicional

### Habilitar em Settings → Code Security & Analysis

```
✅ Dependabot alerts
✅ Dependabot security updates
✅ Secret scanning
✅ Push protection
```

### Habilitar em Settings → Actions

```
✅ Workflow permissions: Read & Write
⚠️ Script execution: Apenas PRs verificados
```

---

## 📊 Políticas de Merge

Recomendado: **Squash and merge**

```
Benefícios:
- Histórico limpo
- Mais fácil reverter
- Melhor rastreabilidade
```

---

## 🚨 Fazer um Hotfix

Se precisar fazer hotfix urgente em `main`:

```bash
# 1. Criar branch hotfix
git checkout main
git pull origin main
git checkout -b hotfix/critical-security-fix

# 2. Fazer fix
# editar arquivos...

# 3. Commit com mensagem descritiva
git commit -m "fix: [CRITICAL] descrição"

# 4. Enviar PR diretamente para main
git push origin hotfix/critical-security-fix

# 5. Na UI: Criar PR main, fazer review urgente, merge

# 6. Merges para develop depois
git checkout develop
git pull origin main
git push origin develop
```

---

## 📞 Contato

Dúvidas sobre estas configurações?

- Abra uma issue no GitHub
- Email: security@ibkbrasil.org.br
- Leia: CONTRIBUTING.md

---

<div align="center">

**Configuração de Segurança: ESSENCIAL**  
**Atualização**: 15/01/2026

</div>
