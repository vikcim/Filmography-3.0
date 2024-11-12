# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// COMANDOS e INSTRUCCIONS A GASTAR //
1) Comencem el projecte amb Vite
Gastem el comando: npm create vite@latest
    - posem el nom del projecte: Filmography_1.0_Vicent_Gramage_Doria
    - ens diu el nom del package: filmography-1-0-vicent-gramage-doria
    - seleccionem el framework: React
    - Seleccionem la variant: JavaScript + SWC
i ens dira lo que farem mes avant:
    Done. Now run:
    cd Filmography_2.0_Vicent_Gramage_Doria
    npm install
    npm run dev

2) Aixi que anem a la carpeta: Filmography_1.0_Vicent_Gramage_Doria que ens haura creat amb tot lo basic
    - Ara instalem dependencies de Node (tarda un rato): npm install
    - Fem la prova amb el: npm run dev
Observarem que ens ha creat una pagina amb uns iconos de Vite + React i un count, etc...

// PASSEM ARA A LA ESTRUCTURA DE COMPONENTS I CARPETES
    - Dins de src borrem els arxiu app.css
    - I deixem els App.jsx, index.css i main.jsx
    - Dins de src/assets copiem el arxiu films.js que Juan ens ha proporcionat
    - Dins de src creem la carpeta components i en aquesta creem tots els arxius necessaris
    - Corregim els arxius App.jsx, index.css, main.jsx, index.html, es a dir tots els necessaris

Una volta eu tenim tot ara si executem: npm run dev

// COSES A TINDRER EN CONTER
- Per a comentaris dins del JSX gastarem açò: {/* aci dins el text */}

Subiendolo a github
1) git remote add origin https://github.com/vikcim/Filmography-2.0.git
2) git add .
3) git commit -m "Subir proyecto inicial de Filmography 2.0"
4) git push -u origin master

Cuando realizamos cambios:
1) git add .
2) git commit -m "Descripción de los cambios"
3) git push origin master
