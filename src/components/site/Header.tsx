import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Practice Areas", href: "/#practice-areas" },
  { label: "Find Counsel", href: "/find-counsel" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Attorneys", href: "/for-attorneys" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-40 bg-background">
      <div className="border-b border-foreground/15 bg-ink text-bone">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-2">
          <span className="smallcaps text-bone/70">Established MMXVII · New York · London</span>
          <span className="smallcaps hidden text-bone/70 sm:block">+1 (212) 555&nbsp;0188 · counsel@candc.law</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1240px] px-6 pt-8 pb-5">
        <div className="flex items-center justify-center">
          <Link href="/" className="group inline-flex flex-col items-center text-center">
            <span className="smallcaps text-foreground/55">Founded MMXVII</span>
            <span className="font-serif text-3xl tracking-[-0.01em] text-ink sm:text-[2.4rem]">
              Counsel <span className="display-italic text-oxblood">&amp;</span> Chambers
            </span>
            <span className="smallcaps mt-1 text-foreground/55">Attorneys at Law</span>
          </Link>
        </div>
      </div>

      <div className="rule-thin mx-auto max-w-[1240px]" />
      <nav className="mx-auto max-w-[1240px] px-6">
        <div className="flex items-center justify-between py-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ul className="hidden flex-1 items-center justify-center gap-10 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="smallcaps text-foreground/75 transition-colors hover:text-oxblood"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/find-counsel"
            className="smallcaps border border-oxblood bg-oxblood px-4 py-2 text-bone transition-colors hover:bg-oxblood-deep"
          >
            Engage Counsel
          </Link>
        </div>

        {open && (
          <ul className="flex flex-col gap-4 border-t border-foreground/15 py-4 md:hidden">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="smallcaps text-foreground/75">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <div className="rule-thin mx-auto max-w-[1240px]" />
    </header>
  );
}