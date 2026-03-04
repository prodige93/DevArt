import "./App.css";
import Tabs from "./Tabs";
import ThemeSwitcher from "./themeSwitcher";

//typage de mes donnée items par ItemsTypes
export type ItemsTypes = {id: string, label: string, content: string}[];

//création donnée items de type ItemsType
export const items: ItemsTypes = [
  {
    id: "html",
    label:  "HTML",
    content: `🔹 Qu’est-ce que le HTML ?

    HTML (HyperText Markup Language) est le langage utilisé pour créer la structure des pages web.

    Il permet d’afficher du texte, des images, des liens, des tableaux, des formulaires, etc.
    
    HTML fonctionne avec des balises qui indiquent au navigateur comment afficher le contenu :
    
    • Les titres (h1, h2, h3…)
    • Les paragraphes (p)
    • Les liens (a)
    • Les images (img)
    • Les listes (ul, ol)
    • Les tableaux (table)
    
    En résumé : HTML = structure, CSS = style et mise en forme.`
  },
  {
    id: "css",
    label: "CSS",
    content: `🔹 Qu’est-ce que le CSS ?

    CSS (Cascading Style Sheets) est le langage utilisé pour styliser et mettre en forme les pages web.

    Il agit sur le HTML pour modifier l’apparence des éléments.

    CSS permet de contrôler :

      • Les couleurs (color, background-color)
      • Les polices (font-family, font-size, font-weight)
      • Les marges et espacements (margin, padding)
      • Les bordures et arrondis (border, border-radius)
      • Les ombres (box-shadow, text-shadow)
      • La mise en page (display, flex, grid)
      • Le positionnement (position, top, left, right, bottom)

    CSS fonctionne avec des sélecteurs qui ciblent les éléments HTML et leur appliquent des règles de style.

    En résumé : HTML = structure, CSS = style et mise en forme.`
  },
  {
    id: "javascript",
    label:  "JavaScript",
    content: `🔹 Qu’est-ce que le JavaScript ? 
    
    JavaScript est un langage de programmation utilisé pour rendre les pages web interactives.
    
    Il permet de manipuler le HTML, le CSS et de gérer la logique côté client.
    
    JavaScript peut servir à :

    • Modifier le contenu et la structure d’une page (DOM)
    • Gérer les événements utilisateur (clics, formulaires, survol)
    • Créer des animations et effets dynamiques
    • Communiquer avec des serveurs via AJAX / API
    • Stocker des données côté client (localStorage, sessionStorage)
    • Implémenter des bibliothèques et frameworks (React, Vue, Angular)

    En résumé : JavaScript = interactivité et logique côté client.`,
  },
  {
    id: "typescript",
    label: "TypeScript",
    content: `🔹 Qu’est-ce que le TypeScript ?

    TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique et des fonctionnalités avancées.
    
    Il permet de détecter les erreurs plus tôt et de rendre le code plus robuste et maintenable.

    TypeScript peut servir à :

    • Définir des types pour les variables, fonctions et objets
    • Vérifier les types à la compilation pour éviter les erreurs runtime
    • Travailler avec des interfaces et des classes pour mieux structurer le code
    • Ajouter l’autocomplétion et l’aide de l’IDE
    • Compiler vers du JavaScript compatible navigateur ou Node.js
    • Utiliser des fonctionnalités modernes tout en restant compatible avec d’anciens environnements

    En résumé : TypeScript = JavaScript + typage et sécurité.`,
  },
  {
    id: "react",
    label: "React",
    content: `🔹 Qu’est-ce que le React ?

    React est une bibliothèque JavaScript utilisée pour construire des interfaces utilisateur interactives.

    Elle permet de créer des composants réutilisables et de gérer l’état de l’application de manière efficace.

    React peut servir à :

    • Créer des composants UI réutilisables
    • Gérer l’état local et global des composants
    • Mettre à jour le DOM de façon efficace grâce au Virtual DOM
    • Construire des applications monopage (SPA)
    • Utiliser des hooks pour la logique fonctionnelle (useState, useEffect, etc.)
    • Travailler avec des bibliothèques complémentaires (React Router, Redux, etc.)

    En résumé : React = création d’interfaces dynamiques et composants réutilisables.`,
  },{
    id: "vite",
    label: "Vite",
    content: `🔹 Qu’est-ce que le Vite ?

    Vite est un outil de build et un serveur de développement ultra-rapide pour les projets web modernes.
    
    Il permet de créer des applications front-end avec un temps de démarrage quasi instantané et un rechargement à chaud efficace.

    Vite peut servir à :

    • Démarrer rapidement un projet web moderne
    • Compiler et transformer le code ES6+ en JavaScript compatible navigateur
    • Gérer les modules via ES Modules natifs
    • Intégrer facilement des frameworks comme React, Vue ou Svelte
    • Activer le Hot Module Replacement (HMR) pour un rechargement instantané
    • Optimiser la build pour la production avec bundling et minification

    En résumé : Vite = développement rapide et build optimisée pour le web moderne.`,
  }
];

export default function App() {
  return (
    <>
      <ThemeSwitcher Props = {ThemeSwitcher} />
      <Tabs items={items} />
    </>
  );
}