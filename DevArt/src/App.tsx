import "./App.css";
import Tabs from "./tabs";

export type ItemsTypes = {id: string, label: string, content: string}[];
export const items: ItemsTypes = [
  {
    id: "html",
    label:  "HTML",
    content: "C'est du html",
  },
  {
    id: "css",
    label:  "CSS",
    content: "C'est du css",
  },
  {
    id: "javascript",
    label:  "JavaScript",
    content: "C'est du javascript",
  }
];

export default function App() {
  return <Tabs items={items}/>
};