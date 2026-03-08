import { useState, useEffect } from "react";
import type { ItemsTypes } from "../App";

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
  }, [searchText, items]);

  return (
    <div>
      {/* 🔍 Barre de recherche AU-DESSUS */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Recherche..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: "6px 10px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid lightgray",
          }}
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
