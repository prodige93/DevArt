import { useState, useEffect } from "react";
import type { ItemsTypes } from "../../../App";
import "./Tab.css";

export default function Tabs({ items }: { items: ItemsTypes }) {
  const [value, setValue] = useState("css");
  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  // Si l’onglet sélectionné disparaît après recherche
  useEffect(() => {
    if (!filteredItems.find((item) => item.id === value)) {
      setValue(filteredItems[0]?.id || "");
    }
  }, [filteredItems, value]);

  return (
    <div>
      {/* 🔍 Barre de recherche AU-DESSUS */}
      <div className="header-input" style={{ marginBottom: "15px" }}>
        <input
          className="header-input-left"
          type="text"
          placeholder="Recherche..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <input 
          className="header-input-right"
          id="prompt" 
          placeholder="Ecris ton prompt..."
        />
      </div>

      {/* 🔘 Boutons */}
      <div className="button-container">
        {filteredItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setValue(id)}
            className={["button", id === value && "button-selected"]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 📄 Contenu */}
      <div style={{ marginTop: "20px" }}>
        {filteredItems.map(({ id, content }) => (
          <div
            hidden={id !== value}
            key={id}
            style={{ whiteSpace: "pre-line" }}
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
