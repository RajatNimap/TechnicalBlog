
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors no-underline ${
        active
          ? "bg-accent-soft !text-black"
          : "!text-black"
      } hover:bg-accent-soft hover:!text-black`}
    >
      {label}
    </Link>
  );
}
