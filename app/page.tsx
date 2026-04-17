import { snippets } from "./snippets";
import SnippetCard from "./components/SnippetCard";

export default function Home() {
  return (
    <main className="root">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-mark">{"{ }"}</div>
          <div>
            <h1 className="site-title">pentest lab</h1>
            <p className="site-sub">security snippets for ethical hacking</p>
          </div>
        </div>
        <div className="header-count">{snippets.length} snippets</div>
      </header>

      <section className="grid-area">
        {snippets.map((s) => (
          <SnippetCard key={s.id} snippet={s} />
        ))}
      </section>

      <footer className="site-footer">
        built for speed · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
