import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>©  {siteConfig.name}</p>
        <nav aria-label="Footer">
          <ul className="flex gap-4">
            <li><Link href="/articles" className="hover:text-accent">Articles</Link></li>
            <li><Link href="/tags" className="hover:text-accent">Tags</Link></li>
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}