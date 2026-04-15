"use client";

import { useState } from "react";
import { Snippet } from "../snippets";

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
    } catch {
      const el = document.createElement("textarea");
      el.value = snippet.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`snippet-card${copied ? " copied" : ""}`}
      onClick={handleCopy}
      role="button"
      aria-label={`Copy ${snippet.title} code`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleCopy()}
    >
      <div className="card-top">
        <h2 className="card-title">{copied ? "✓ Copied!" : snippet.title}</h2>
      </div>
    </div>
  );
}
