# Reis de Israel — Cronologias Interativas

Visualizações interativas da cronologia bíblica, da era dos juízes a Malaquias.
Reis, profetas e acontecimentos de Israel e Judá em diferentes formatos visuais.

## Mapa Estelar

A página inicial ([index.html](index.html)) é o **Mapa Estelar**: navegação em céu de
constelações, tour guiado por 33 marcos, faixas de impérios, sincronismos Norte↔Sul,
busca e deep-linking por `#id`.

Conteúdo bíblico conforme a **Tradução do Novo Mundo** (citações e termos), com o
nome divino **Jeová**.

## Rodar localmente

É um site estático — basta abrir `index.html` no navegador (já é o Mapa Estelar).

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
