# Reis de Israel — Cronologias Interativas

Visualizações interativas da cronologia bíblica, da era dos juízes a Malaquias.
Reis, profetas e acontecimentos de Israel e Judá em diferentes formatos visuais.

## Mapas

- **[Mapa Estelar](reis-mapa-estelar.html)** — destaque: navegação em céu de constelações,
  tour guiado por 33 marcos, faixas de impérios, sincronismos Norte↔Sul, busca e deep-linking.
- **[Linha do Tempo Interativa](reis-de-israel.html)**
- **[Cronologia Astral](reis-astral.html)**
- **[Timeline Astral](timeline-reis-israel.html)** / **[v2](reis.v2.html)**

A página inicial ([index.html](index.html)) lista todos.

## Rodar localmente

É um site estático — basta abrir `index.html` no navegador.

Ou servir com Node:

```bash
npm install
npm start
```

## Deploy (Railway)

O projeto está configurado para o [Railway](https://railway.app):

- `package.json` serve os arquivos estáticos com o pacote [`serve`](https://www.npmjs.com/package/serve).
- `railway.json` define o comando de start usando a porta dinâmica `$PORT`.

Basta conectar este repositório a um projeto no Railway — o deploy é automático a cada `push`.

## Dados

A cronologia das figuras vive em [`dados.js`](dados.js), separada do render,
para facilitar curadoria. Cronologia da monarquia baseada em E. Thiele.
