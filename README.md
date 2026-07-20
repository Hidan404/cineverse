# 🎬 Cineverse

Descubra filmes, explore categorias e encontre seu próximo filme favorito.

**Live:** https://hidan404.github.io/cineverse/

---

## Funcionalidades

- **Busca de filmes** — pesquise por título via OMDb API
- **Grid de filmes em destaque** — 8 filmes pré-selecionados com pôster, ano, gênero e avaliação
- **Categorias** — Action, Comedy, Horror, Sci-Fi, Romance, Thriller com busca por gênero
- **CEP automático** — formulário de contato preenche endereço via ViaCEP
- **Design responsivo** — Tailwind CSS v4, menu mobile, header com scroll
- **SEO** — Open Graph, Twitter Card, meta description

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| HTML | HTML5 semântico |
| CSS | Tailwind v4 (CDN) + CSS custom properties |
| JS | Vanilla JS, módulos ES6 |
| APIs | OMDb, ViaCEP, Formspree |
| Deploy | GitHub Pages + GitHub Actions |

---

## Setup local

```bash
git clone https://github.com/Hidan404/cineverse.git
cd cineverse
cp js/config.example.js js/config.js
```

Edite `js/config.js` e cole sua chave da OMDb (pegue em https://www.omdbapi.com/apikey).

Abrir o `index.html` direto pode falhar por causa dos módulos ES6. Use um servidor local:

```bash
npx serve .
# ou
python3 -m http.server
```

---

## Deploy automático (GitHub Actions)

O arquivo `.github/workflows/deploy.yml` faz todo o trabalho:

1. Dispara em push para `main` ou `develop`
2. Lê o secret `OMDBAPIKEY` do repositório
3. Gera `js/config.js` com a chave em base64 (ofuscado)
4. Faz deploy para `gh-pages`

**Configuração única no GitHub:**

Settings → Secrets and variables → Actions → New repository secret
- Nome: `OMDBAPIKEY`
- Valor: sua chave da OMDb

Depois é só dar push que o deploy sai automático.

---

## Estrutura

```
cineverse/
├── .github/workflows/deploy.yml   # CI/CD
├── assets/icons/                   # SVGs e PNGs
├── assets/images/                  # Imagens placeholder
├── css/
│   ├── global.css                  # Entry point (imports)
│   ├── variables.css               # Cores e fontes
│   ├── reset.css                   # Reset básico
│   ├── header.css
│   └── footer.css
├── js/
│   ├── config.example.js           # Template da config
│   ├── config.js                   # Config local (gitignored)
│   ├── api.js                      # Chamadas OMDb
│   ├── main.js                     # Entry point
│   ├── movies.js                   # Cards e grid de filmes
│   ├── search.js                   # Busca por título
│   ├── categoriesCards.js          # Cards de categorias
│   ├── viacep.js                   # CEP + formulário
│   ├── header.js                   # Menu mobile + scroll
│   └── Estilotitulos.js            # Estilo global h2
├── index.html
├── .gitignore
└── README.md
```

---

## Observações

- O código está em português (variáveis, comentários, UI)
- `js/config.js` está no `.gitignore` — nunca versionado
- A chave da OMDb é gratuita, mas tem limite de requisições por dia
- O endpoint do Formspree está hardcoded em `viacep.js:11` — troque pelo seu se quiser
- Projeto sem `package.json` ou bundler — puro HTML + CSS + JS
