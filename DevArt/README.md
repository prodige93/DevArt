## DevArt – Petit explorateur HTML / CSS / JavaScript

Ce dépôt contient une petite application front construite avec **React**, **TypeScript** et **Vite**.  
Elle affiche une série d’onglets (HTML, CSS, JavaScript) et, pour chaque onglet, un texte explicatif très simple en français.

Je l’utilise comme un **terrain de jeu** pour expérimenter :

- **les bases de React** (état local, composants, props),
- **TypeScript** (typage simple des données passées en props),
- **Vite** pour un environnement de développement rapide.

### Fonctionnalités

- **Navigation par onglets**: un composant `Tabs` reçoit une liste d’éléments typés (`id`, `label`, `content`) et affiche :
  - une barre de boutons pour choisir un onglet,
  - le contenu correspondant à l’onglet sélectionné.
- **Contenu en français**: pour chaque onglet (HTML, CSS, JavaScript), un petit texte décrit brièvement la technologie.

### Stack technique

- **React** + **TypeScript**
- **Vite** (outil de build / dev server)
- **CSS** simple pour le style des boutons et du contenu

---

## Démarrage du projet

### Prérequis

- **Node.js** (version récente recommandée, par exemple ≥ 18)
- **npm** (ou un autre gestionnaire comme pnpm / yarn si tu préfères)

### Installation

Dans le dossier du projet (`DevArt/DevArt`) :

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Puis ouvrir l’URL indiquée dans le terminal (généralement `http://localhost:5173`) dans ton navigateur.

### Build pour la production

```bash
npm run build
```

### Prévisualisation du build

```bash
npm run preview
```

### Lint (si configuré)

```bash
npm run lint
```

---

## Structure simplifiée du code

- `src/App.tsx` : composant principal qui prépare les éléments d’onglets (HTML, CSS, JavaScript) et les passe au composant `Tabs`.
- `src/tabs.tsx` : composant d’onglets réutilisable (`Tabs`) qui gère :
  - l’onglet actuellement sélectionné via un `useState`,
  - l’affichage des boutons,
  - l’affichage conditionnel du contenu associé.
- `src/App.css` : styles de base de l’application.
- `src/main.tsx` : point d’entrée React/Vite qui monte `App` dans le DOM.

---

## Pourquoi ce projet ?

Ce projet me permet de :

- garder un **exemple minimaliste** de mise en place d’un projet React + TypeScript + Vite,
- jouer avec un composant d’onglets simple pour tester des idées d’UI,
- avoir une petite base sur laquelle je peux rajouter d’autres onglets, d’autres contenus ou des styles plus avancés.

Tu peux t’en servir comme base pour :

- expérimenter d’autres composants (modales, formulaires, etc.),
- enrichir le contenu des onglets,
- tester différentes approches de styling (CSS pur, CSS Modules, tailwind, etc.).

