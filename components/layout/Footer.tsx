import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-line border-b-[0.5px] border-black/20">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-2 text-sm text-muted">
        <p>©  {siteConfig.name}</p>
        <p>Built With Next JS</p>
      </div>
    </footer>
  );
}