import { useState } from "react";
import { items } from "./App";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");

  const filteredTabs = items.filter((tab) =>
    tab.label.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <div style={{ padding: "10px", marginBottom: "5px", borderBottom: "1px solid lightgray" }}>
      <input
        type="text"
        placeholder="Recherche un onglet..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ padding: "5px 10px", marginBottom: "20px", width: "200px" }}
      />

      <div style={{ display: "flex", gap: "10px" }}>
        {filteredTabs.length > 0 ? (
          filteredTabs.map((tab) => (
            <div
              hidden={tab.id !== tab.id}
              key={tab.id}
              style={{
                padding: "6px 12px",
                backgroundColor: "#eee",
                borderRadius: "4px",
              }}
            >
              {tab.label}
            </div>
          ))
        ) : (
          <p>Aucun onglet trouvé</p>
        )}
      </div>
    </div>
  );
}
