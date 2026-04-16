"use client";

import { useState } from "react";
import { Snippet } from "../snippets";

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const hasSections = snippet.sections && snippet.sections.length > 0;

  const handleCopy = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClick = () => {
    if (hasSections) {
      setIsExpanded(!isExpanded);
    } else {
      handleCopy(snippet.code, "main");
    }
  };

  return (
    <div
      className={`snippet-card${copiedId === "main" ? " copied" : ""}${isExpanded ? " expanded" : ""}`}
      onClick={handleClick}
      role="button"
      aria-label={`Copy ${snippet.title} code`}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <div className="card-top">
        <h2 className="card-title">
          {copiedId === "main" ? "✓ Copied!" : snippet.title}
        </h2>
        {!hasSections && (
          <div className="copy-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          </div>
        )}
        {hasSections && (
          <div className={`chevron ${isExpanded ? 'active' : ''}`}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        )}
      </div>

      {hasSections && isExpanded && (
        <div className="card-tabs" onClick={(e) => e.stopPropagation()}>
          {snippet.sections!.map((section, idx) => {
            const isCopied = copiedId === `section-${idx}`;
            return (
              <button
                key={idx}
                className={`tab-btn${isCopied ? " copied" : ""}`}
                onClick={() => handleCopy(section.code, `section-${idx}`)}
              >
                {isCopied ? "✓ Copied" : section.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
