import React, { useState } from "react";

const tabs = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite"];

export default function Navbar() {
    const [searchText, setSearchText] = useState("");

    // Filtrer les onglets qui contiennent le texte recherché
    const filteredTabs = tabs.filter(tab =>
        tab.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div style={{ padding: "10px", borderBottom: "1px solid lightgray" }}>
            
            {/* Input de recherche */}
            <input
                type="text"
                placeholder="Recherche un onglet..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                style={{ padding: "5px 10px", marginBottom: "10px", width: "200px" }}
            />

            {/* Affiche les onglets filtrés */}
            <div style={{ display: "flex", gap: "10px" }}>
                {filteredTabs.length > 0 ? (
                    filteredTabs.map(tab => (
                        <div
                            key={tab}
                            style={{
                                padding: "6px 12px",
                                backgroundColor: "#eee",
                                borderRadius: "4px",
                            }}
                        >
                            {tab}
                        </div>
                    ))
                ) : (
                    <p>Aucun onglet trouvé</p>
                )}
            </div>
        </div>
    );
}