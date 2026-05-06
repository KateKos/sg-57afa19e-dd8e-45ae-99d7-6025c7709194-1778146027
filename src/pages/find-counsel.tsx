import { useMemo, useState } from "react";
import Link from "next/link";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SEO } from "@/components/SEO";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Attorney = {
  id: string;
  initials: string;
  name: string;
  postNominal: string;
  jdYear: number;
  admittedYear: number;
  stateBar: string;
  jurisdiction: string;
  practiceAreas: string[];
  hourlyMin: number;
  hourlyMax: number;
  bio: string;
  languages: string[];
  engagements: number;
};

const PRACTICE_AREAS = [
  "Mergers & Acquisitions",
  "Intellectual Property",
  "Employment",
  "Securities",
  "Litigation",
  "Tax",
  "Real Estate",
  "Privacy & Data",
  "Antitrust",
];

const JURISDICTIONS = [
  "New York",
  "California",
  "Delaware",
  "Massachusetts",
  "Illinois",
  "Texas",
  "Washington",
  "District of Columbia",
];

const LANGUAGES = ["English", "Spanish", "Mandarin", "French", "German", "Japanese"];

const ATTORNEYS: Attorney[] = [
  {
    id: "ehw",
    initials: "EHW",
    name: "Eleanor H. Whitfield",
    postNominal: "Esq.",
    jdYear: 2003,
    admittedYear: 2004,
    stateBar: "N.Y. Bar",
    jurisdiction: "New York",
    practiceAreas: ["Mergers & Acquisitions", "Securities"],
    hourlyMin: 540,
    hourlyMax: 720,
    bio: "Twenty-two years advising emerging-growth and middle-market companies on private placements, share purchase agreements, and cross-border transactions originating in the New York and London markets.",
    languages: ["English", "French"],
    engagements: 184,
  },
  {
    id: "mar",
    initials: "MAR",
    name: "Marcus A. Reyes",
    postNominal: "J.D., LL.M.",
    jdYear: 2010,
    admittedYear: 2011,
    stateBar: "Cal. Bar",
    jurisdiction: "California",
    practiceAreas: ["Intellectual Property", "Privacy & Data"],
    hourlyMin: 420,
    hourlyMax: 580,
    bio: "Patent prosecution, trademark portfolio management, and CCPA/GDPR counsel for venture-backed software firms throughout the Bay Area and Pacific Northwest corridor.",
    languages: ["English", "Spanish"],
    engagements: 142,
  },
  {
    id: "phk",
    initials: "PHK",
    name: "Priya H. Kothari",
    postNominal: "Esq.",
    jdYear: 2008,
    admittedYear: 2009,
    stateBar: "Mass. Bar",
    jurisdiction: "Massachusetts",
    practiceAreas: ["Employment", "Litigation"],
    hourlyMin: 380,
    hourlyMax: 510,
    bio: "Employer-side employment counsel and trial advocate. First-chair experience in wage-and-hour class actions and Title VII matters before the First Circuit.",
    languages: ["English"],
    engagements: 167,
  },
  {
    id: "jcd",
    initials: "JCD",
    name: "Jonathan C. Devereaux",
    postNominal: "Esq.",
    jdYear: 1996,
    admittedYear: 1997,
    stateBar: "Del. Bar",
    jurisdiction: "Delaware",
    practiceAreas: ["Mergers & Acquisitions", "Securities", "Antitrust"],
    hourlyMin: 720,
    hourlyMax: 950,
    bio: "Three decades counseling boards and special committees in Chancery Court matters, take-private transactions, and Hart-Scott-Rodino review across regulated industries.",
    languages: ["English"],
    engagements: 211,
  },
  {
    id: "smv",
    initials: "SMV",
    name: "Sofia M. Vargas",
    postNominal: "J.D.",
    jdYear: 2018,
    admittedYear: 2019,
    stateBar: "Tex. Bar",
    jurisdiction: "Texas",
    practiceAreas: ["Real Estate", "Tax"],
    hourlyMin: 280,
    hourlyMax: 360,
    bio: "Texas Triangle commercial real estate transactions, 1031 exchanges, and ad valorem tax appeals for family-office and institutional landlords.",
    languages: ["English", "Spanish"],
    engagements: 78,
  },
  {
    id: "rta",
    initials: "RTA",
    name: "Robert T. Ashworth",
    postNominal: "Esq.",
    jdYear: 2001,
    admittedYear: 2002,
    stateBar: "Ill. Bar",
    jurisdiction: "Illinois",
    practiceAreas: ["Litigation", "Antitrust"],
    hourlyMin: 480,
    hourlyMax: 640,
    bio: "Commercial litigation and Sherman Act defense work. Lead counsel in two MDL coordinations and a Seventh Circuit appellate panel matter in 2024.",
    languages: ["English"],
    engagements: 156,
  },
  {
    id: "amh",
    initials: "AMH",
    name: "Amelia M. Holloway",
    postNominal: "J.D., M.P.H.",
    jdYear: 2014,
    admittedYear: 2015,
    stateBar: "D.C. Bar",
    jurisdiction: "District of Columbia",
    practiceAreas: ["Privacy & Data", "Employment"],
    hourlyMin: 410,
    hourlyMax: 540,
    bio: "HIPAA, HITECH, and state biometric-privacy compliance for health-tech and digital-therapeutic ventures. Former honors program attorney at HHS-OCR.",
    languages: ["English"],
    engagements: 92,
  },
  {
    id: "khn",
    initials: "KHN",
    name: "Kenji H. Nakamura",
    postNominal: "Esq.",
    jdYear: 2006,
    admittedYear: 2007,
    stateBar: "Wash. Bar",
    jurisdiction: "Washington",
    practiceAreas: ["Intellectual Property", "Mergers & Acquisitions"],
    hourlyMin: 460,
    hourlyMax: 620,
    bio: "Cross-border technology licensing and joint-venture structuring between Pacific Northwest and Japanese parent companies. Registered patent attorney.",
    languages: ["English", "Japanese"],
    engagements: 118,
  },
  {
    id: "lcb",
    initials: "LCB",
    name: "Lillian C. Beauchamp",
    postNominal: "Esq.",
    jdYear: 1989,
    admittedYear: 1990,
    stateBar: "N.Y. Bar",
    jurisdiction: "New York",
    practiceAreas: ["Tax", "Securities"],
    hourlyMin: 680,
    hourlyMax: 880,
    bio: "Federal income tax, partnership taxation, and Subchapter K planning for fund-of-funds and family-office structures organized in New York and the Cayman Islands.",
    languages: ["English", "French"],
    engagements: 203,
  },
  {
    id: "dpo",
    initials: "DPO",
    name: "Daniel P. O'Sullivan",
    postNominal: "J.D.",
    jdYear: 2016,
    admittedYear: 2017,
    stateBar: "Mass. Bar",
    jurisdiction: "Massachusetts",
    practiceAreas: ["Employment", "Litigation"],
    hourlyMin: 320,
    hourlyMax: 440,
    bio: "Plaintiff-side and employer counseling on non-compete reform under the Massachusetts Noncompetition Agreement Act and parallel litigation in the Business Litigation Session.",
    languages: ["English"],
    engagements: 64,
  },
  {
    id: "ywc",
    initials: "YWC",
    name: "Yuhan W. Chen",
    postNominal: "J.D., LL.M.",
    jdYear: 2012,
    admittedYear: 2013,
    stateBar: "Cal. Bar",
    jurisdiction: "California",
    practiceAreas: ["Securities", "Mergers & Acquisitions"],
    hourlyMin: 510,
    hourlyMax: 690,
    bio: "Cross-Pacific capital markets work — Reg S offerings, dual-class structuring, and PCAOB compliance counsel for issuers contemplating U.S. listings.",
    languages: ["English", "Mandarin"],
    engagements: 134,
  },
  {
    id: "gtf",
    initials: "GTF",
    name: "Gregory T. Falkner",
    postNominal: "Esq.",
    jdYear: 1999,
    admittedYear: 2000,
    stateBar: "Del. Bar",
    jurisdiction: "Delaware",
    practiceAreas: ["Mergers & Acquisitions", "Litigation"],
    hourlyMin: 590,
    hourlyMax: 770,
    bio: "Section 220 books-and-records demands, appraisal proceedings, and post-closing indemnification disputes in the Court of Chancery and Delaware Superior Court.",
    languages: ["English", "German"],
    engagements: 175,
  },
  {
    id: "iho",
    initials: "IHO",
    name: "Isabela H. Okonkwo",
    postNominal: "J.D.",
    jdYear: 2020,
    admittedYear: 2021,
    stateBar: "N.Y. Bar",
    jurisdiction: "New York",
    practiceAreas: ["Privacy & Data", "Intellectual Property"],
    hourlyMin: 290,
    hourlyMax: 380,
    bio: "Open-source license review, AI model governance, and EU AI Act readiness assessments for enterprise software and generative-media platforms.",
    languages: ["English", "French"],
    engagements: 41,
  },
  {
    id: "twh",
    initials: "TWH",
    name: "Theodore W. Hartman",
    postNominal: "Esq.",
    jdYear: 2004,
    admittedYear: 2005,
    stateBar: "Tex. Bar",
    jurisdiction: "Texas",
    practiceAreas: ["Real Estate", "Mergers & Acquisitions"],
    hourlyMin: 390,
    hourlyMax: 520,
    bio: "Energy-sector M&A, midstream pipeline acquisitions, and Texas Railroad Commission permitting matters across the Permian and Eagle Ford basins.",
    languages: ["English", "Spanish"],
    engagements: 121,
  },
  {
    id: "rmc",
    initials: "RMC",
    name: "Rosalind M. Caldwell",
    postNominal: "Esq.",
    jdYear: 1993,
    admittedYear: 1994,
    stateBar: "Ill. Bar",
    jurisdiction: "Illinois",
    practiceAreas: ["Tax", "Real Estate"],
    hourlyMin: 530,
    hourlyMax: 700,
    bio: "Property tax certiorari, TIF district counsel, and qualified-opportunity-zone fund formation for Midwestern developers and institutional sponsors.",
    languages: ["English"],
    engagements: 159,
  },
];

const PER_PAGE = 6;

function toRoman(n: number): string {
  const map: [number, string][] = [
    [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
  ];
  let res = "";
  for (const [v, s] of map) {
    while (n >= v) { res += s; n -= v; }
  }
  return res;
}

export default function FindCounselPage() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [selectedJurisdictions, setSelectedJurisdictions] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [rate, setRate] = useState<[number, number]>([200, 1000]);
  const [minYears, setMinYears] = useState<number>(0);
  const [sort, setSort] = useState<string>("engaged");
  const [page, setPage] = useState<number>(1);

  const toggle = (list: string[], item: string, setter: (v: string[]) => void) => {
    setter(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
    setPage(1);
  };

  const filtered = useMemo(() => {
    const currentYear = 2026;
    let list = ATTORNEYS.filter((a) => {
      if (selectedAreas.length && !a.practiceAreas.some((p) => selectedAreas.includes(p))) return false;
      if (selectedJurisdictions.length && !selectedJurisdictions.includes(a.jurisdiction)) return false;
      if (selectedLanguages.length && !a.languages.some((l) => selectedLanguages.includes(l))) return false;
      if (a.hourlyMin > rate[1] || a.hourlyMax < rate[0]) return false;
      if (currentYear - a.admittedYear < minYears) return false;
      return true;
    });
    if (sort === "engaged") list = [...list].sort((a, b) => b.engagements - a.engagements);
    if (sort === "newly") list = [...list].sort((a, b) => b.admittedYear - a.admittedYear);
    if (sort === "rate-low") list = [...list].sort((a, b) => a.hourlyMin - b.hourlyMin);
    return list;
  }, [selectedAreas, selectedJurisdictions, selectedLanguages, rate, minYears, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const clearAll = () => {
    setSelectedAreas([]);
    setSelectedJurisdictions([]);
    setSelectedLanguages([]);
    setRate([200, 1000]);
    setMinYears(0);
    setPage(1);
  };

  return (
    <>
      <SEO
        title="Find Counsel — Counsel & Chambers"
        description="Browse vetted attorneys by practice area, jurisdiction, and rate. A considered registry of counsel admitted to practice across the United States."
      />
      <div className="min-h-screen bg-background text-foreground font-serif">
        <Header />

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-16 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
              Vol. III &nbsp;·&nbsp; Registry of Counsel
            </p>
            <h1 className="mt-5 font-display text-5xl md:text-6xl tracking-tight text-foreground">
              Find <span className="italic">Counsel</span>
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-accent" />
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
              A curated registry of attorneys admitted to bar associations across the United States,
              indexed by practice and jurisdiction.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-10">
                <div className="flex items-baseline justify-between border-b border-foreground/20 pb-3">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/80">
                    Refine Registry
                  </h2>
                  <button
                    onClick={clearAll}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors"
                  >
                    Reset
                  </button>
                </div>

                <FilterGroup label="I. Practice Area">
                  <div className="space-y-3">
                    {PRACTICE_AREAS.map((p) => (
                      <label key={p} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedAreas.includes(p)}
                          onCheckedChange={() => toggle(selectedAreas, p, setSelectedAreas)}
                          className="rounded-none border-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground">
                          {p}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterGroup>

                <FilterGroup label="II. Jurisdiction">
                  <div className="space-y-3">
                    {JURISDICTIONS.map((j) => (
                      <label key={j} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedJurisdictions.includes(j)}
                          onCheckedChange={() =>
                            toggle(selectedJurisdictions, j, setSelectedJurisdictions)
                          }
                          className="rounded-none border-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground">
                          {j}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterGroup>

                <FilterGroup label="III. Hourly Rate">
                  <div className="px-1">
                    <Slider
                      value={rate}
                      onValueChange={(v) => { setRate([v[0], v[1]] as [number, number]); setPage(1); }}
                      min={200}
                      max={1000}
                      step={10}
                      className="mb-4"
                    />
                    <div className="flex justify-between font-mono text-[11px] tracking-wider text-foreground/70">
                      <span>${rate[0]}</span>
                      <span>${rate[1]}{rate[1] === 1000 ? "+" : ""}</span>
                    </div>
                  </div>
                </FilterGroup>

                <FilterGroup label="IV. Years Admitted">
                  <div className="grid grid-cols-4 gap-1">
                    {[0, 5, 10, 20].map((y) => (
                      <button
                        key={y}
                        onClick={() => { setMinYears(y); setPage(1); }}
                        className={`border px-2 py-2 font-mono text-[11px] tracking-wider transition-colors ${
                          minYears === y
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-foreground/20 text-foreground/70 hover:border-foreground/60"
                        }`}
                      >
                        {y === 0 ? "Any" : `${y}+`}
                      </button>
                    ))}
                  </div>
                </FilterGroup>

                <FilterGroup label="V. Language">
                  <div className="space-y-3">
                    {LANGUAGES.map((l) => (
                      <label key={l} className="flex items-center gap-3 cursor-pointer group">
                        <Checkbox
                          checked={selectedLanguages.includes(l)}
                          onCheckedChange={() => toggle(selectedLanguages, l, setSelectedLanguages)}
                          className="rounded-none border-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground">
                          {l}
                        </span>
                      </label>
                    ))}
                  </div>
                </FilterGroup>
              </div>
            </aside>

            {/* Results */}
            <main className="col-span-12 lg:col-span-9">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b-2 border-foreground/80 pb-5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
                    Available Counsel
                  </p>
                  <p className="mt-2 font-display text-3xl tracking-tight">
                    {filtered.length}{" "}
                    <span className="text-foreground/60 italic font-normal text-2xl">
                      {filtered.length === 1 ? "attorney" : "attorneys"} indexed
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/60 hidden sm:inline">
                    Sort By
                  </span>
                  <Select value={sort} onValueChange={(v) => { setSort(v); setPage(1); }}>
                    <SelectTrigger className="w-[240px] rounded-none border-foreground/30 bg-transparent font-serif">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-foreground/30">
                      <SelectItem value="engaged">Most Engaged</SelectItem>
                      <SelectItem value="newly">Newly Admitted</SelectItem>
                      <SelectItem value="rate-low">Hourly: Low to High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {visible.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-display text-3xl italic text-foreground/60">
                    No counsel match the present criteria.
                  </p>
                  <button
                    onClick={clearAll}
                    className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent"
                  >
                    Reset Registry
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-foreground/15">
                  {visible.map((a, idx) => (
                    <li key={a.id} className="grid grid-cols-12 gap-6 py-10 group">
                      <div className="col-span-12 md:col-span-2">
                        <div className="flex md:flex-col items-center md:items-start gap-4">
                          <div className="flex h-20 w-20 items-center justify-center border border-foreground/40 bg-background">
                            <span className="font-display text-xl tracking-wider text-primary">
                              {a.initials}
                            </span>
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                            № {String((currentPage - 1) * PER_PAGE + idx + 1).padStart(3, "0")}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-12 md:col-span-7">
                        <h3 className="font-display text-2xl tracking-tight">
                          {a.name}
                          <span className="text-foreground/50 italic font-normal text-lg">
                            , {a.postNominal}
                          </span>
                        </h3>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                          J.D. {a.jdYear} &nbsp;·&nbsp; Admitted {a.admittedYear} &nbsp;·&nbsp; {a.stateBar}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                          {a.practiceAreas.map((p) => (
                            <span
                              key={p}
                              className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent border-b border-accent/40 pb-0.5"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-foreground/75">
                          {a.bio}
                        </p>
                      </div>

                      <div className="col-span-12 md:col-span-3 flex md:flex-col md:items-end justify-between md:justify-start gap-4 md:text-right">
                        <div>
                          <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/50">
                            Hourly Rate
                          </p>
                          <p className="mt-1 font-mono text-base tracking-wider text-foreground">
                            ${a.hourlyMin}–${a.hourlyMax}
                          </p>
                          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                            {a.engagements} engagements
                          </p>
                        </div>
                        <Link
                          href={`/counsel/${a.id}`}
                          className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors self-end md:self-auto"
                        >
                          View Brief →
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex flex-col items-center gap-4 border-t border-foreground/20 pt-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/50">
                    Folio
                  </p>
                  <nav className="flex items-center gap-1">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      ← Prev
                    </button>
                    <div className="mx-3 flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                        <button
                          key={n}
                          onClick={() => setPage(n)}
                          className={`flex h-10 w-10 items-center justify-center font-display text-base transition-colors ${
                            n === currentPage
                              ? "bg-primary text-primary-foreground"
                              : "border border-foreground/20 text-foreground/70 hover:border-primary hover:text-primary"
                          }`}
                        >
                          {toRoman(n)}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/60 hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next →
                    </button>
                  </nav>
                </div>
              )}
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-foreground/70 mb-4 pb-2 border-b border-foreground/15">
        {label}
      </h3>
      {children}
    </div>
  );
}