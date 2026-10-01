"use client";

import { useState } from "react";
import { ShoppingCart, Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#003be2] text-[#F5F5F6] container mx-auto p-2">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 text-2xl font-extrabold font-[Clash_Display]">
          <img src="/Vector.png" alt="ByteSpace Logo" className="h-8 w-auto" />
            
          ByteSpace
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink/80 hover:text-brand">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/signin" className="text-sm font-semibold text-ink/80 hover:text-brand">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Join Us
          </Link>
          <button aria-label="Cart" className="rounded-full p-2 text-ink/70 hover:bg-black/5 hover:text-brand">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          className="grid h-11 w-11 place-items-center rounded-lg text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-black/5 px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium text-ink/80 hover:bg-black/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3 px-2">
              <Link href="/signin" className="flex-1 rounded-full border border-black/10 py-2.5 text-center text-sm font-semibold">
                Sign In
              </Link>
              <Link href="/signup" className="flex-1 rounded-full bg-brand py-2.5 text-center text-sm font-semibold text-white">
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}