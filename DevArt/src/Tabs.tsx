import type { ItemsTypes } from "./App";
import { useState } from "react";

export default function Tabs({ items }: { items: ItemsTypes }) {
  const [value, SetValue] = useState("css");
  return (
    <div>
      <div className="button-container">
        {items.map(({ id, label }) => (
          <button
            onClick={() => SetValue(id)}
            key={id}
            className={["button", id === value && "button-selected"]
              .filter(Boolean)
              .join(" ")}
          >
            {label}
          </button>
        ))}
      </div>
      <div>
        {items.map(({ id, content }) => (
          <div hidden={id !== value} key={id}>
            {content}
          </div>
        ))}
      </div>
    </div>
  );
}
