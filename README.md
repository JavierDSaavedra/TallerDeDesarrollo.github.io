# TallerDeDesarrollo.github.io

Proyecto React + Vite desplegado en GitHub Pages.

## Problema tipico de pagina en blanco

En GitHub Pages esta aplicacion se sirve desde:

https://javierdsaavedra.github.io/TallerDeDesarrollo.github.io/

Si no se define la opcion `base` en Vite, los assets se intentan cargar desde `/assets/...` (raiz del dominio) en vez de `/TallerDeDesarrollo.github.io/assets/...`, lo que produce errores 404 y pantalla en blanco.

## Configuracion aplicada

- `vite.config.js` usa `base: '/TallerDeDesarrollo.github.io/'`.
- `package.json` incluye scripts para desplegar `dist` con `gh-pages`.

## Desarrollo local

1. Instalar dependencias:
	npm install
2. Ejecutar en local:
	npm run dev

## Despliegue a GitHub Pages

1. Instalar dependencias:
	npm install
2. Publicar:
	npm run deploy

Este comando genera `dist` y publica su contenido en la rama `gh-pages`.

## Ajuste en GitHub

En Settings > Pages del repositorio, configurar:

- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`

Luego de guardar, GitHub Pages publicara la version compilada correcta.
