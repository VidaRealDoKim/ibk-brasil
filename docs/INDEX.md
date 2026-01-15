# 📚 Documentação IBK Brasil

Bem-vindo à documentação centralizada do projeto IBK Brasil. Todos os guias, políticas e referências estão organizados abaixo.

---

## 🚀 Quick Links

| Tipo | Documento | Descrição |
|------|-----------|-----------|
| 📖 | [README.md](../README.md) | Overview do projeto |
| 🤝 | [CONTRIBUTING.md](guides/CONTRIBUTING.md) | Como contribuir |
| 📋 | [LICENSE](../LICENSE) | Licença MIT |

---

## 🔍 Guias de Desenvolvimento

Localizado em: [`docs/guides/`](guides/)

```
docs/guides/
├─ CONTRIBUTING.md      → Guia para contribuidores
└─ SEO_GUIDE.md        → Otimizações de SEO
```

### 📖 [CONTRIBUTING.md](guides/CONTRIBUTING.md)
- Como reportar bugs
- Como sugerir features
- Workflow de Pull Request
- Padrões de código
- Checklist pré-submissão

**Para quem**: Desenvolvedores, contribuidores abertos

### 🔍 [SEO_GUIDE.md](guides/SEO_GUIDE.md)
- Checklist de SEO técnico
- Recomendações de imagens
- Palavras-chave principais
- Integração com Google Search Console
- Core Web Vitals

**Para quem**: Marketing, DevOps, Performance

---

## 🔐 Políticas de Segurança

Localizado em: [`docs/security/`](security/)

```
docs/security/
├─ SECURITY.md              → Política de divulgação
├─ SECURITY_AUDIT.md        → Relatório técnico
├─ SECURITY_SUMMARY.md      → Resumo executivo
└─ SECURITY_CHECKLIST.md    → Checklist pré-deploy
```

### 🛡️ [SECURITY.md](security/SECURITY.md)
- Como reportar vulnerabilidades
- Procedimento de resposta a incidentes
- Checklist de segurança
- Conformidade legal (GDPR, LGPD)

**Para quem**: Pesquisadores de segurança, compliance

### 📋 [SECURITY_AUDIT.md](security/SECURITY_AUDIT.md)
- Auditoria técnica completa
- Vulnerabilidades encontradas
- Remediation steps
- Recomendações por prioridade
- Análise de dependências

**Para quem**: DevOps, Security engineers, Auditors

### 📊 [SECURITY_SUMMARY.md](security/SECURITY_SUMMARY.md)
- Resumo executivo da auditoria
- Score e métricas
- Stack de segurança implementado
- Roadmap de melhorias
- KPIs de segurança

**Para quem**: Gestão, C-suite, Stakeholders

### ✅ [SECURITY_CHECKLIST.md](security/SECURITY_CHECKLIST.md)
- Checklist pré-produção
- Responsabilidades por role
- Scorecard final
- Próximas ações recomendadas

**Para quem**: DevOps, Deployment teams

---

## 📂 Estrutura Completa

```
ibk-brasil/
├── 📖 README.md                 ← Comece aqui!
├── 📋 LICENSE                   ← Licença MIT
├── 🤝 package.json              ← Metadados
│
├── 🔧 ibk-standalone.html       ← Site principal
├── 🔄 hot-reload-server.py      ← Dev server
│
├── 🌐 robots.txt                ← SEO
├── 🗺️ sitemap.xml               ← SEO
│
├── ⚙️ vercel.json                ← Deploy config
├── 🎨 tailwind.config.js        ← Tailwind config
│
├── .gitignore                   ← Git rules
├── .vercelignore                ← Vercel rules
│
├── 📚 docs/
│   ├── guides/
│   │   ├── CONTRIBUTING.md      ← Dev guide
│   │   └── SEO_GUIDE.md        ← SEO guide
│   │
│   ├── security/
│   │   ├── SECURITY.md         ← Vulnerability policy
│   │   ├── SECURITY_AUDIT.md   ← Tech audit
│   │   ├── SECURITY_SUMMARY.md ← Executive summary
│   │   └── SECURITY_CHECKLIST.md ← Pre-deploy checks
│   │
│   └── INDEX.md                ← Este arquivo
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   │
│   └── BRANCH_PROTECTION.md    ← GitHub setup guide
│
└── public_html/
    └── assets/
        └── logo.png
```

---

## 🎯 Encontre o que Precisa

### 🚀 Queremos fazer Deploy
```
1. Leia: docs/security/SECURITY_CHECKLIST.md
2. Execute checklist
3. Merge develop → main
4. Vercel faz deploy automático
```

### 🐛 Encontramos uma Vulnerabilidade
```
1. Leia: docs/security/SECURITY.md
2. Email: security@ibkbrasil.org.br
3. Aguarde 48h de resposta
```

### 🤝 Queremos Contribuir
```
1. Leia: docs/guides/CONTRIBUTING.md
2. Fork repositório
3. Crie feature branch
4. Faça PR para develop
5. Aguarde review
```

### 🔍 Otimizar para SEO
```
1. Leia: docs/guides/SEO_GUIDE.md
2. Execute checklist
3. Test com Google Lighthouse
```

### 📊 Auditoria de Segurança
```
1. Leia: docs/security/SECURITY_AUDIT.md
2. Revise: docs/security/SECURITY_SUMMARY.md
3. Acione: docs/security/SECURITY_CHECKLIST.md
```

---

## 🔄 Navegação

- **Volta ao README**: [../README.md](../README.md)
- **Guides**: [./guides/](guides/)
- **Security**: [./security/](security/)
- **GitHub Repo**: [github.com/VidaRealDoKim/ibk-brasil](https://github.com/VidaRealDoKim/ibk-brasil)

---

## 📞 Suporte

**Dúvidas sobre documentação?**
- 💬 Abra uma [discussion](https://github.com/VidaRealDoKim/ibk-brasil/discussions)
- 📧 Email: contato@ibkbrasil.org.br
- 🐛 Reporte bug: [bug_report.md](../.github/ISSUE_TEMPLATE/bug_report.md)

**Vulnerabilidade de segurança?**
- 🔒 Email: security@ibkbrasil.org.br
- 📖 Leia: [docs/security/SECURITY.md](security/SECURITY.md)

---

## 📝 Últimas Atualizações

```
15/01/2026 - Reorganização completa de documentação
           - Criação de docs/guides e docs/security
           - Centralização de políticas
           - Update de toda referência cruzada
```

---

<div align="center">

**Documentação Centralizada & Organizada**

Versão 2.0 | Atualizada: 15/01/2026

</div>
