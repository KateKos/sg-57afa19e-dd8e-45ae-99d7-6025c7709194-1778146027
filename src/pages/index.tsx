import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const practiceAreas = [
  { roman: "I", name: "Corporate", desc: "Formation, governance, financings, and ongoing counsel for closely-held and venture-backed companies.", count: 412 },
  { roman: "II", name: "Mergers & Acquisitions", desc: "Buy-side and sell-side representation, due diligence, and post-closing integration matters.", count: 188 },
  { roman: "III", name: "Intellectual Property", desc: "Patent prosecution, trademark portfolios, copyright, trade-secret protection, and licensing.", count: 256 },
  { roman: "IV", name: "Employment", desc: "Executive agreements, equity arrangements, workplace policy, and dispute resolution.", count: 301 },
  { roman: "V", name: "Litigation", desc: "Commercial disputes, breach of contract, shareholder actions, and pre-litigation strategy.", count: 224 },
  { roman: "VI", name: "Real Estate", desc: "Commercial leasing, acquisitions, financing, and zoning across major U.S. markets.", count: 147 },
  { roman: "VII", name: "Tax", desc: "Federal, state, and international tax planning; entity structuring and transactional tax counsel.", count: 132 },
  { roman: "VIII", name: "Privacy & Data", desc: "GDPR, CCPA, HIPAA compliance; data-processing agreements; breach response and counsel.", count: 119 },
];

const jurisdictions = ["New York", "California", "Delaware", "Texas", "Massachusetts", "Illinois", "Washington", "Florida", "District of Columbia"];

const counsel = [
  {
    initials: "M.A.",
    name: "Margaret Aldridge, Esq.",
    school: "Yale Law, J.D. 2008",
    bar: "N.Y. · Conn.",
    areas: "Corporate · M&A",
    rate: "$650 – $850 / hr",
    bio: "Former senior associate at Cravath. 14 years counseling growth-stage companies through Series A through D financings and strategic exits.",
  },
  {
    initials: "R.O.",
    name: "Rajan Okonkwo, J.D.",
    school: "Stanford Law, J.D. 2011",
    bar: "Cal. · Wash.",
    areas: "Intellectual Property · Privacy",
    rate: "$575 – $725 / hr",
    bio: "Patent counsel for software and life-sciences enterprises. Lead counsel on 47 prosecuted patents and three landmark trade-secret matters.",
  },
  {
    initials: "E.V.",
    name: "Eleanor Vasquez, Esq.",
    school: "Columbia Law, J.D. 2006",
    bar: "N.Y. · N.J. · D.C.",
    areas: "Litigation · Employment",
    rate: "$700 – $900 / hr",
    bio: "Trial counsel in commercial and shareholder disputes. Sixteen years of first-chair experience in federal and state court litigation.",
  },
  {
    initials: "D.S.",
    name: "Daniel Strauss, J.D.",
    school: "Harvard Law, J.D. 2013",
    bar: "Mass. · N.Y.",
    areas: "Tax · Corporate",
    rate: "$525 – $675 / hr",
    bio: "Transactional tax counsel for private equity, family offices, and cross-border structuring. Former Treasury attorney-advisor.",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Counsel & Chambers — Established Counsel for the Modern Enterprise"
        description="A vetted bar of independent attorneys in corporate, M&A, IP, employment, litigation, tax, and privacy. Engage counsel admitted to practice across nine U.S. jurisdictions."
      />
      <div className="min-h-screen bg-background">
        <Header />

        {/* HERO */}
        <section className="border-b border-foreground/15">
          <div className="mx-auto max-w-[1240px] px-6 py-20 md:py-28">
            <div className="grid items-center gap-14 md:grid-cols-12">
              <div className="md:col-span-7 animate-fade-up">
                <p className="smallcaps mb-6 flex items-center gap-3 text-foreground/55">
                  <span className="inline-block h-px w-8 bg-foreground/40" />
                  Vol. IX · Issue I · MMXXVI
                </p>
                <h1 className="font-serif text-5xl leading-[1.05] tracking-[-0.015em] text-ink md:text-[5.2rem] md:leading-[0.98]">
                  Established <span className="display-italic text-oxblood">Counsel</span> for the Modern Enterprise.
                </h1>
                <div className="rule-gold my-8 w-24" />
                <p className="max-w-xl font-serif text-lg leading-relaxed text-foreground/80 md:text-xl">
                  A vetted bar of independent attorneys, retained by founders, operators, and in-house counsel for matters that demand the rigor of a traditional firm and the immediacy of modern practice.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link
                    href="/find-counsel"
                    className="smallcaps inline-flex items-center gap-2 bg-oxblood px-6 py-3.5 text-bone transition-colors hover:bg-oxblood-deep"
                  >
                    Engage Counsel <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="smallcaps inline-flex items-center gap-2 border border-foreground/30 px-6 py-3.5 text-ink transition-colors hover:border-oxblood hover:text-oxblood"
                  >
                    Read the Procedure
                  </Link>
                </div>

                <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
                  <div>
                    <dt className="smallcaps text-foreground/55">Counsel</dt>
                    <dd className="mt-1 font-serif text-2xl tabular-nums text-ink">1,847</dd>
                  </div>
                  <div>
                    <dt className="smallcaps text-foreground/55">Jurisdictions</dt>
                    <dd className="mt-1 font-serif text-2xl tabular-nums text-ink">52</dd>
                  </div>
                  <div>
                    <dt className="smallcaps text-foreground/55">Avg. Match</dt>
                    <dd className="mt-1 font-serif text-2xl tabular-nums text-ink">36 <span className="text-base text-foreground/60">hrs</span></dd>
                  </div>
                </dl>
              </div>

              <div className="md:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-foreground/15">
                  <Image
                    src="/generated/legal-volumes.png"
                    alt="Leather-bound legal volumes on a mahogany desk"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="smallcaps text-foreground/50">Plate I</p>
                  <p className="text-xs italic text-foreground/55">Law Library, NY Office &mdash; est. MMXVII</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="bg-parchment">
          <div className="mx-auto max-w-[1240px] px-6 py-10">
            <p className="smallcaps mb-4 text-center text-foreground/55">Counsel admitted in</p>
            <p className="text-center font-serif text-base text-foreground/75 md:text-lg">
              {jurisdictions.map((j, i) => (
                <span key={j}>
                  {j}
                  {i < jurisdictions.length - 1 && <span className="mx-3 text-gold">&middot;</span>}
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* PRACTICE AREAS */}
        <section id="practice-areas" className="border-t border-foreground/15 py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-14 grid items-end gap-6 md:grid-cols-12">
              <div className="md:col-span-7">
                <p className="smallcaps text-oxblood">§ I &mdash; Practice Areas</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink md:text-5xl">
                  A complete bar across <span className="display-italic">eight</span> domains of practice.
                </h2>
              </div>
              <div className="md:col-span-5">
                <p className="font-serif text-base leading-relaxed text-foreground/75">
                  Each practice area is staffed by counsel admitted in the relevant jurisdiction, vetted for malpractice insurance, peer references, and a minimum of three years in primary practice.
                </p>
              </div>
            </div>

            <div className="grid gap-px border border-foreground/15 bg-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
              {practiceAreas.map((p) => (
                <Link
                  href="#"
                  key={p.name}
                  className="group flex flex-col bg-background p-7 transition-colors hover:bg-parchment"
                >
                  <div className="mb-6 flex items-baseline justify-between">
                    <span className="font-serif text-2xl text-gold">{p.roman}.</span>
                    <span className="smallcaps text-foreground/45 tabular-nums">{p.count} counsel</span>
                  </div>
                  <h3 className="font-serif text-2xl leading-tight text-ink">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">{p.desc}</p>
                  <span className="smallcaps mt-6 inline-flex items-center gap-1.5 text-oxblood transition-all group-hover:gap-2.5">
                    View Bar <ArrowUpRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-parchment py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="smallcaps text-oxblood">§ II &mdash; The Procedure</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
                Three steps, <span className="display-italic">and counsel is engaged.</span>
              </h2>
            </div>

            <div className="mt-16 grid gap-px bg-foreground/15 md:grid-cols-3">
              {[
                {
                  roman: "I",
                  title: "Submit Brief",
                  body: "A short statement of the matter, jurisdiction, and engagement preferences. Strict confidentiality from the moment of submission.",
                  meta: "5 minutes",
                },
                {
                  roman: "II",
                  title: "Receive Proposals",
                  body: "Within thirty-six hours, three to five qualified attorneys submit proposals with fee structure, prior representations, and approach.",
                  meta: "≤ 36 hours",
                },
                {
                  roman: "III",
                  title: "Engage Counsel",
                  body: "Review credentials, conduct interviews, and execute the engagement letter directly with chosen counsel. C&C remains the platform of record.",
                  meta: "Same day",
                },
              ].map((s) => (
                <div key={s.roman} className="bg-parchment p-10">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-5xl text-gold">{s.roman}.</span>
                    <span className="smallcaps text-foreground/55">{s.meta}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl text-ink">{s.title}</h3>
                  <div className="rule-thin my-5 w-12" />
                  <p className="text-sm leading-relaxed text-foreground/75">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED COUNSEL */}
        <section className="border-t border-foreground/15 py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="mb-14 flex items-end justify-between gap-6">
              <div>
                <p className="smallcaps text-oxblood">§ III &mdash; Featured Counsel</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">
                  Members of <span className="display-italic">the bar.</span>
                </h2>
              </div>
              <Link href="/find-counsel" className="smallcaps hidden items-center gap-1.5 text-oxblood md:inline-flex">
                Browse Full Roster <ArrowUpRight size={12} />
              </Link>
            </div>

            <div className="grid gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2">
              {counsel.map((c) => (
                <article key={c.name} className="bg-background p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex h-16 w-16 flex-none items-center justify-center border border-foreground/25 bg-parchment">
                      <span className="font-serif text-xl text-oxblood">{c.initials}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-xl leading-tight text-ink">{c.name}</h3>
                      <p className="mt-1 text-sm italic text-foreground/65">{c.school}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        <span className="smallcaps text-foreground/55">Bar: {c.bar}</span>
                        <span className="text-foreground/30">·</span>
                        <span className="smallcaps text-foreground/55">{c.areas}</span>
                      </div>
                    </div>
                  </div>
                  <div className="rule-thin my-5" />
                  <p className="text-sm leading-relaxed text-foreground/75">{c.bio}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-wide text-ink">{c.rate}</span>
                    <Link href="#" className="smallcaps inline-flex items-center gap-1.5 text-oxblood">
                      View Brief <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="bg-parchment py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="smallcaps text-foreground/55">Reference &mdash; Series C SaaS, $84M raised</p>
            <div className="rule-gold mx-auto my-6 w-16" />
            <blockquote className="font-serif text-3xl leading-[1.25] text-ink md:text-[2.4rem]">
              <span className="display-italic text-oxblood text-5xl leading-none">&ldquo;</span>
              We retained M&amp;A counsel through Counsel &amp; Chambers in the middle of a contested term-sheet negotiation. The proposals were on our desk by Tuesday. By Thursday we had executed an engagement letter with an attorney we would have struggled to find through traditional channels.
              <span className="display-italic text-oxblood text-5xl leading-none">&rdquo;</span>
            </blockquote>
            <div className="mt-8">
              <p className="font-serif text-base text-ink">Helena Brewer</p>
              <p className="smallcaps mt-1 text-foreground/55">General Counsel · Verge Industries, Inc.</p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-t border-foreground/15 py-20">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="grid gap-12 md:grid-cols-4">
              {[
                { n: "1,847", l: "Counsel Admitted" },
                { n: "9,420", l: "Matters Engaged" },
                { n: "52", l: "Jurisdictions" },
                { n: "MMXVII", l: "Founded" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="font-serif text-5xl tabular-nums text-ink md:text-6xl">{s.n}</div>
                  <div className="rule-gold mx-auto my-3 w-10" />
                  <p className="smallcaps text-foreground/55">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-oxblood text-bone">
          <div className="mx-auto max-w-[1240px] px-6 py-24 text-center">
            <p className="smallcaps text-gold">§ IV &mdash; In Closing</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-bone md:text-[3.4rem]">
              Counsel of the highest standard, <span className="display-italic">on terms of your own.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-bone/80">
              Submit a brief. Receive proposals from vetted, independent attorneys within thirty-six hours.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/find-counsel"
                className="smallcaps inline-flex items-center gap-2 bg-bone px-7 py-3.5 text-oxblood transition-colors hover:bg-parchment"
              >
                Submit a Brief <ArrowRight size={14} />
              </Link>
              <Link
                href="/for-attorneys"
                className="smallcaps inline-flex items-center gap-2 border border-bone/40 px-7 py-3.5 text-bone transition-colors hover:border-bone"
              >
                Apply to the Bar
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}