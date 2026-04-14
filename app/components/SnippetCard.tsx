"use client";

import { useState } from "react";
import { Snippet } from "../snippets";


export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = snippet.code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={`snippet-card ${expanded ? "expanded" : ""}`}
      onClick={() => {
        if (!expanded) {
          setExpanded(true);
          handleCopy();
        }
      }}
    >
      {/* Header */}
      <div className="card-header">

        <div className="card-actions" onClick={(e) => e.stopPropagation()}>
          {expanded && (
            <button className="collapse-btn" onClick={() => setExpanded(false)}>
              ↑ collapse
            </button>
          )}
          <button
            className={`copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
          >
            {copied ? "✓ copied!" : "copy"}
          </button>
        </div>
      </div>

      {/* Title row */}
      <div className="card-title-row">
        <h2 className="card-title">{snippet.title}</h2>
        {!expanded && <span className="click-hint">click to copy</span>}
      </div>

      <p className="card-desc">{snippet.description}</p>


      {/* Code block */}
      {expanded && (
        <div className="code-block" onClick={(e) => e.stopPropagation()}>
          <pre><code>{snippet.code}</code></pre>
        </div>
      )}
    </div>
  );
}
