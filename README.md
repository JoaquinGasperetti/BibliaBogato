# 🌋 BOGATO: Wiki Interactiva & Biblia de Desarrollo (HK Entertainment)

Sitio web estático e interactivo con todo el lore, mapas, evolución de personajes (Fases 1 a 5), sistema de magia cromática, arsenal, guion definitivo por actos y galería histórica de desarrollo (**2018–2026**) del universo **Bogato**.

## 🚀 Cómo desplegar en GitHub Pages en 1 minuto

1. Creá un nuevo repositorio en GitHub (por ejemplo, `bogato-wiki`).
2. Descomprimí el contenido de `Bogato_Wiki_GitHub_Pages.zip` y subí todas las carpetas y archivos a la raíz del repositorio:
   - `index.html`
   - `.nojekyll`
   - `css/styles.css`
   - `js/data.js`
   - `js/app.js`
   - `assets/img/` (contiene las 51 imágenes originales optimizadas de *BogatoLostMedia* y *Bogato posta xd*)
3. En tu repositorio de GitHub, entrá a **Settings → Pages**.
4. En **Build and deployment**, elegí **Deploy from a branch**, seleccioná la rama `main` (o `master`) y la carpeta `/ (root)`, y hacé clic en **Save**.
5. ¡Listo! En unos segundos tu wiki estará online en `https://<tu-usuario>.github.io/<tu-repo>/`.

## 🛠️ Cómo editar o agregar contenido

Todo el contenido de texto, ubicaciones de los mapas, coordenadas de los pines (`x`, `y`), fases de personajes, armas y capítulos del guion se encuentra centralizado en **`js/data.js`** (`window.BOGATO_DATA`), por lo que cualquier miembro de **HK Entertainment** puede actualizar datos o sumar nuevas imágenes en `assets/img/` sin necesidad de tocar la lógica de la interfaz.
