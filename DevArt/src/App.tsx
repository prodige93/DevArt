import "./App.css";
import Tabs from "./Tabs";

export type ItemsTypes = {id: string, label: string, content: string}[];
export const items: ItemsTypes = [
  {
    id: "html",
    label:  "HTML",
    content: `🔹 Qu’est-ce que le HTML ?

    HTML (HyperText Markup Language) est le langage utilisé pour créer la structure des pages web. 
    
    Il permet d’afficher du texte, des images, des liens, des tableaux, des formulaires, etc. 
    
    HTML fonctionne avec des balises qui indiquent au navigateur comment afficher le contenu.`
  },
  {
  id: "css",
  label: "CSS",
  content: `🔹 Qu’est-ce que le CSS ?
  
  CSS (Cascading Style Sheets) est le langage utilisé pour styliser et mettre en forme les pages web.
  
  Il permet de contrôler l’apparence des éléments : couleurs, polices, marges, espacements, bordures, arrière-plans et mise en page.
  
  CSS fonctionne avec des sélecteurs qui ciblent des éléments HTML ou des classes/id pour appliquer des styles précis.

  Les règles CSS sont composées de propriétés et de valeurs qui déterminent l’aspect visuel du contenu.`
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
  }
];

export default function App() {
  return <Tabs items={items}/>
};