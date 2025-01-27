# Fashion Shop

Site web réalisé par Haythem Frikha dans le cadre d'un projet semestriel.

## Caractéristiques

- L'interface du site est intuitive et très facile à utiliser.
- Panier: on peut ajouter et enlever des produits du panier.
- Produits Diversifiés: les produits sont prélevés d'un API (voir le fichier [ProductContext.js](./src/contexts/ProductContext.js:24)). Les photos, les titres, les prix, et les descriptions n'ont pas été crées par moi.
- Animation: les interactions avec les composantes sont animées gràce à Tailwind CSS.
- Modularité: les composantes du site sont décomposées en "Components" pour la facilité de modification et la réutilisabilité dans les différentes parties du code.

## Les Fichiers & Les Dossiers du projet

- [**public/**](./public/): Dossier crée par React. On peut spécifier des images ici et les servir à travers le site (exemple: `https://localhost:3000/logo192.png`).
- [**.gitignore**](./.gitignore): Fichier pour spécifier les dossiers à ne pas publier dans le repo GitHub.
- [**.prettierrc**](./.prettierrc): Fichier pour spécifier les régles de formattage du code à travers l'outil [Prettier](https://prettier.io/).
- [**README.md**](./README.md): Ce que vous lisez à l'instant.
- [**tailwind.config.js**](./tailwind.config.js) et [**postcss.config.js**](./postcss.config.js): Fichier pour spécifier la configuration de Tailwind CSS.
- [**package.json**](./package.json): Fichier contenant la configuration du Node.js.
- [**build/**](./build/): Dossier contenant le site après obscurcissement et optimisation du code par React (référez-vous à la section suivante)
- [**src/**](./src/): Dossier contenant le code du site. Les fichiers dedans se terminent avec `.jsx` (Javascript XML), car c'est l'extension des fichiers React, et elle nous permet d'écrire Javascript et HTML dans le même fichier sans des balises `<script>`.

## Comment Ouvrir le Site?

1. Installer [Node.js](https://nodejs.org/en) (si vous ne l'avez pas encore).
1. Lancez `npx serve -s build` dans votre terminal.
1. Naviguez à `http://localhost:3000/` (le port pourrait différer)
