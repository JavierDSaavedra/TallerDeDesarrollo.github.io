# TallerDeDesarrollo.github.io

Proyecto React + Vite desplegado en GitHub Pages.

## Problema tipico de pagina en blanco

En GitHub Pages esta aplicacion se sirve desde:

https://javierdsaavedra.github.io/TallerDeDesarrollo.github.io/

Si no se define la opcion `base` en Vite, los assets se intentan cargar desde `/assets/...` (raiz del dominio) en vez de `/TallerDeDesarrollo.github.io/assets/...`, lo que produce errores 404 y pantalla en blanco.

## Configuracion aplicada

- `vite.config.js` usa `base: '/TallerDeDesarrollo.github.io/'`.
- Workflow de Pages en `.github/workflows/deploy.yml` para publicar `dist` automaticamente.

## Desarrollo local

1. Instalar dependencias:
	npm install
2. Ejecutar en local:
	npm run dev

## Despliegue a GitHub Pages

En este repositorio el despliegue es automatico:

1. Haz push a la rama `main`.
2. GitHub Actions compila el proyecto y publica `dist` en Pages.

## Ajuste en GitHub

En Settings > Pages del repositorio, configurar:

- Source: `GitHub Actions`

Luego de guardar, GitHub Pages publicara la version compilada correcta.
