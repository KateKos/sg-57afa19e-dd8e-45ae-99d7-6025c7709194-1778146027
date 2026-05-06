import Link from "next/link";

const cols = [
  {
    label: "Practice Areas",
    items: [
      { name: "Corporate", href: "#" },
      { name: "Mergers & Acquisitions", href: "#" },
      { name: "Intellectual Property", href: "#" },
      { name: "Employment", href: "#" },
      { name: "Litigation", href: "#" },
      { name: "Real Estate", href: "#" },
      { name: "Tax", href: "#" },
      { name: "Privacy & Data", href: "#" },
    ],
  },
  {
    label: "The Firm",
    items: [
      { name: "About Counsel & Chambers", href: "#" },
      { name: "Standards of Admission", href: "#" },
      { name: "Press & Recognition", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Pro Bono Practice", href: "#" },
    ],
  },
  {
    label: "Resources",
    items: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Fee Structures", href: "#" },
      { name: "Sample Engagement Letter", href: "#" },
      { name: "Client Memoranda", href: "#" },
      { name: "Bar Jurisdiction Guide", href: "#" },
    ],
  },
  {
    label: "For Attorneys",
    items: [
      { name: "Apply to Join", href: "/for-attorneys" },
      { name: "Practitioner Standards", href: "#" },
      { name: "Conflict Disclosures", href: "#" },
      { name: "Login", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-bone/85">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="text-center">
          <p className="smallcaps text-bone/55">Counsel &amp; Chambers</p>
          <p className="mt-3 font-serif text-3xl text-bone">
            <span className="display-italic text-gold">Per</span> ardua, ad consilium.
          </p>
          <p className="mt-2 text-sm italic text-bone/60">Through difficulty, to counsel.</p>
        </div>

        <div className="my-12 h-px bg-bone/20" />

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.label}>
              <h4 className="smallcaps text-gold">{c.label}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.items.map((it) => (
                  <li key={it.name}>
                    <Link
                      href={it.href}
                      className="text-sm text-bone/75 transition-colors hover:text-bone"
                    >
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-12 h-px bg-bone/20" />

        <div className="grid gap-8 text-sm md:grid-cols-3">
          <div>
            <p className="smallcaps text-gold">New York</p>
            <p className="mt-3 leading-relaxed text-bone/70">
              412 Park Avenue, Suite 1900<br />
              New York, NY 10022
            </p>
          </div>
          <div>
            <p className="smallcaps text-gold">London</p>
            <p className="mt-3 leading-relaxed text-bone/70">
              7 Lincoln&rsquo;s Inn Fields<br />
              London WC2A 3BP
            </p>
          </div>
          <div>
            <p className="smallcaps text-gold">Correspondence</p>
            <p className="mt-3 leading-relaxed text-bone/70">
              counsel@candc.law<br />
              +1 (212) 555 0188
            </p>
          </div>
        </div>

        <div className="my-12 h-px bg-bone/20" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-bone/55 md:flex-row">
          <p>
            &copy; MMXXVI Counsel &amp; Chambers, LLP. All rights reserved.
          </p>
          <p className="smallcaps">
            Privacy &middot; Terms &middot; Conflicts &middot; Disclosures
          </p>
        </div>
        <p className="mt-6 text-center text-[11px] leading-relaxed text-bone/45">
          Counsel &amp; Chambers is a marketplace platform. Engagement of independent counsel through this platform creates an attorney-client relationship between you and the engaged attorney, not Counsel &amp; Chambers, LLP. Prior results do not guarantee a similar outcome. This material may be considered attorney advertising in some jurisdictions.
        </p>
      </div>
    </footer>
  );
}