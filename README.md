## DevArt

DevArt est un petit dépôt de jeux d’expérimentation autour du front-end (HTML, CSS, JavaScript, React, TypeScript, etc.).

Le premier projet contenu dans ce dépôt est une mini‑application React/TypeScript/Vite qui affiche des onglets expliquant très simplement HTML, CSS et JavaScript.

---

## Contenu du dépôt

- `DevArt/` : application front construite avec **React**, **TypeScript** et **Vite**.
  - `DevArt/src/App.tsx` : composant principal qui prépare les onglets (HTML, CSS, JavaScript).
  - `DevArt/src/tabs.tsx` : composant `Tabs` réutilisable qui gère la sélection d’onglet et l’affichage du contenu.
  - `DevArt/src/App.css` : styles de base.
  - `DevArt/src/main.tsx` : point d’entrée Vite/React.

Un `README.md` plus détaillé est disponible dans le dossier `DevArt/` pour décrire précisément cette application.

---

## Objectif du projet

Ce dépôt me sert principalement à :

- **expérimenter** des idées simples d’UI,
- **garder des exemples minimalistes** de projets front,
- **tester des outils modernes** comme Vite, TypeScript, ESLint, etc.

Si tu es tombé ici par curiosité, tu peux cloner le dépôt et lancer l’application principale décrite ci‑dessous.

---

## Prise en main rapide

1. **Cloner le dépôt**

```bash
git clone <URL_DU_DEPOT>
cd DevArt
```

2. **Installer les dépendances et lancer l’app React/Vite**

```bash
cd DevArt
npm install
npm run dev
```

Puis ouvrir l’URL indiquée dans le terminal (en général `http://localhost:5173`).

---

## Idées pour aller plus loin

- Ajouter d’autres onglets (par ex. TypeScript, React, Vite, etc.).
- Complexifier le contenu (introduire du code, des liens, des mini‑tutos).
- Expérimenter d’autres styles (CSS Modules, Tailwind, design system perso, etc.).
- Créer d’autres petits projets dans de nouveaux dossiers à côté de `DevArt/`.

