import Link from "next/link";
import { siteConfig } from "@/config/site";
import NavLink from "./NavLink";

const links = [
  { href: "/articles", label: "Articles" },
  { href: "/tags", label: "Tags" },
  { href: "/search", label: "Search" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 border-b-[0.5px] bg-white/30 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight !text-black">
          {siteConfig.name}
        </Link>

        <nav aria-label="Main">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href} className="text-black">
                <NavLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}