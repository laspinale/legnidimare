import Image from "next/image"

const contactEmail = "xpaolomarzullo@gmail.com"

const navItems = [
  { label: "Home", href: "/", status: "attiva" },
  { label: "My World", href: "/my-world", status: "attiva" },
  { label: "Pesci", href: "/pesci", status: "galleria" },
  { label: "Conchiglie", href: "/conchiglie", status: "galleria" },
  { label: "Fuori Catalogo", href: "/fuori-catalogo", status: "galleria" },
  { label: "Vetrina", href: "/vetrina", status: "in sviluppo" },
]

const featuredWork = [
  {
    title: "Capone policromo",
    category: "Pesci in legno di mare, resina e cromie anatomiche",
    image: "/images/legnidimare/fish-capone.jpg",
    alt: "Scultura di pesce giallo e blu realizzata in legno di mare e resina",
  },
  {
    title: "Cernia",
    category: "Legno spiaggiato, rivetti e pittura acrilica",
    image: "/images/legnidimare/fish-cernia.jpg",
    alt: "Scultura chiara di cernia con dettagli anatomici in legno e resina",
  },
  {
    title: "Resinato",
    category: "Forme marine assemblate a mano",
    image: "/images/legnidimare/fish-resinato.jpg",
    alt: "Pesce rosso in legno di mare con texture a listelli e dettaglio metallico",
  },
  {
    title: "Riccio",
    category: "Il primo arrivato del 2024, nato nel nuovo atelier",
    image: "/images/legnidimare/fish-riccio.jpg",
    alt: "Pesce colorato con puntinature bianche e occhio nero lucido",
  },
]

const gallerySections = [
  {
    id: "pesci",
    title: "Pesci",
    eyebrow: "Galleria principale",
    summary:
      "La sezione originale raccoglie in ordine cronologico più di 120 pesci realizzati dal 2005: legno stagionato e corroso dal mare resta il materiale dominante, affiancato da plexiglass, plastica, semi, fiches e mosaico trencadís per il n. 100.",
    sampleItems: [
      "Cernia",
      "Capone o Lampuga",
      "Abstract",
      "Civetta",
      "Riccio",
      "Trombetta",
      "Nivola",
      "Balenottera Plexi",
      "Scorpione grigio",
      "Pesce San Pietro",
    ],
    href: "/pesci",
  },
  {
    id: "conchiglie",
    title: "Conchiglie e induttori di sogno",
    eyebrow: "Galleria da sviluppare",
    summary:
      "Nate da una conchiglia rotta, le conchiglie sono ammezzate con legno e plexiglass: palissandro, teak, frassino, noce e larice. La stessa pagina ospita gli induttori di sogno, presentati come sonniferi naturali con istruzioni d'uso.",
    sampleItems: [
      "Conchiglia teak a bordo dorato",
      "Bambù RGB",
      "Cuboidi RGB",
      "Capodoglio verde con coda dorata",
      "Conchiglia di Mussolo",
      "Balene coda dorata",
    ],
    href: "/conchiglie",
  },
  {
    id: "fuori-catalogo",
    title: "Fuori Catalogo",
    eyebrow: "Galleria da sviluppare",
    summary:
      "Oggetti diversi nati dall'incontro tra creatività e materiali: galline in resina, azulejos, piccola gioielleria, alberelli di natale, lampade, rami di corallo, fermacarte e portafiori in alluminio nautico.",
    sampleItems: [
      "Poster Legni 2021",
      "Orologio galline",
      "Code di mare",
      "Olmo",
      "Granceola",
      "Lampade e gioielleria",
    ],
    href: "/fuori-catalogo",
  },
]

const processSteps = [
  "Legni spiaggiati scelti tra tavole segnate dalla lunga permanenza in acqua di mare.",
  "Forme ispirate all'illustrazione scientifica, disegnate e frammentate in parti autonome.",
  "Assemblaggio con rivetti per preservare motilità e fluidità del legno già mosso dal mare.",
  "Ricerca cromatica tra immagini del cuore, anatomia del pesce e fantasia svincolata dalla realtà.",
]

const vetrinaItems = [
  "Resinando ad arte, UNUCI Pisa 6 novembre 2025",
  "Le \"Rose\" dei venti, beneficenza lampo 2025",
  "Orecchini di Legni di Mare, Pasqua 2024",
  "Premio Rotonda a Livorno e personale di Bolgheri 2023",
]

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto grid min-h-svh max-w-7xl gap-12 px-6 py-8 md:grid-cols-[0.86fr_1.14fr] md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-14 md:sticky md:top-8 md:h-[calc(100svh-4rem)]">
          <nav className="flex items-center justify-between text-xs tracking-[0.28em] text-muted-foreground uppercase">
            <a href="#top" className="text-foreground">
              Legni di Mare
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="border-b border-foreground/40 pb-1 text-foreground"
            >
              Email
            </a>
          </nav>

          <div id="top" className="space-y-8 scroll-mt-10">
            <p className="text-sm tracking-[0.34em] text-muted-foreground uppercase">
              Paolo Marzullo · Per gioco e per passione
            </p>
            <h1 className="font-heading text-6xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Oggetti d&apos;arte nati dal legno portato dal mare.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Legni di Mare identifica un volume di oggetti d&apos;arte basato
              principalmente su legno spiaggiato. I pesci esaltano forme vicine
              all&apos;illustrazione scientifica, ma colori, resine e materiali
              recuperati li portano nel dominio della fantasia.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group border-t border-border pt-3 text-foreground"
              >
                <span>{item.label}</span>
                <span className="mt-1 block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition group-hover:text-foreground">
                  {item.status}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <Image
              src="/images/legnidimare/hero-pesce-home.jpg"
              alt="Pesce policromo in legno di mare e resina, frammentato in sezioni verticali"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 57vw"
              className="object-contain object-center p-8"
            />
          </div>

          <section id="my-world" className="scroll-mt-10 space-y-8">
            <div className="border-t border-border pt-6">
              <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                My World
              </p>
              <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                «Datemi un legno consumato dal mare»
              </h2>
              <div className="mt-5 grid gap-6 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                <p>
                  Paolo Marzullo, nato a Livorno nel 1953, ha lavorato come
                  medico e ricercatore in ambito cardiovascolare. Il primo pesce
                  nasce nel 2005 assemblando pochi legni di mare con tinta,
                  rivetti e pignoni.
                </p>
                <p>
                  Da quello scherzo iniziale sono arrivati fantasia, ricerca
                  della forma, cromatismo, materiali diversi, mostre e opere che
                  non lasciano indifferenti: pesci, conchiglie, galline,
                  orecchini, lampade e azulejos.
                </p>
              </div>
            </div>
          </section>

          <section id="work" className="scroll-mt-10 space-y-8">
            <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row">
              <div>
                <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                  Opere selezionate
                </p>
                <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                  Pesci, conchiglie e oggetti unici
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Le immagini e i testi sono tratti dal sito originale Legni di
                Mare e adattati in una struttura più essenziale per il
                portfolio.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWork.map((item, index) => (
                <article
                  key={item.title}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <div
                    className={`overflow-hidden rounded-[1.5rem] bg-muted ${
                      index === 0 ? "aspect-[16/10]" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={index === 0 ? 1400 : 900}
                      height={index === 0 ? 875 : 1125}
                      sizes={
                        index === 0
                          ? "(max-width: 640px) 100vw, 57vw"
                          : "(max-width: 640px) 100vw, 28vw"
                      }
                      className="h-full w-full object-contain object-center p-6 transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-2xl tracking-[-0.02em]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="process" className="scroll-mt-10 space-y-8">
            <div className="border-t border-border pt-6">
              <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                Processo
              </p>
              <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                Dalla deriva alla forma
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                Il lavoro parte da tavole e frammenti provati dal mare. Le forme
                sono separate in parti, verniciate e ricomposte con rivetti,
                conservando il movimento naturale del materiale.
              </p>
            </div>

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <article
                  key={step}
                  className="grid gap-4 rounded-[1.5rem] border border-border p-5 sm:grid-cols-[auto_1fr] sm:items-center"
                >
                  <p className="font-heading text-4xl text-muted-foreground">
                    0{index + 1}
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="scroll-mt-10 space-y-12">
            {gallerySections.map((section) => (
              <article
                id={section.id}
                key={section.id}
                className="scroll-mt-10 rounded-[1.5rem] border border-border p-5 md:p-7"
              >
                <div className="flex flex-col justify-between gap-6 sm:flex-row">
                  <div>
                    <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                      {section.title}
                    </h2>
                  </div>
                  <a
                    href={section.href}
                    className="h-fit rounded-full border border-border px-4 py-2 text-xs tracking-[0.22em] text-foreground uppercase"
                  >
                    Apri pagina
                  </a>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-6 text-muted-foreground">
                  {section.summary}
                </p>
                <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {section.sampleItems.map((item) => (
                    <li key={item} className="border-t border-border pt-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="grid gap-6 sm:grid-cols-3">
              <Image
                src="/images/legnidimare/shell-teak.jpg"
                alt="Conchiglia in legno e resina montata su una base blu"
                width={900}
                height={1089}
                className="aspect-square rounded-[1.5rem] bg-muted object-cover"
              />
              <Image
                src="/images/legnidimare/outside-granceola.jpg"
                alt="Granceola decorativa su base cilindrica in resina"
                width={760}
                height={692}
                className="aspect-square rounded-[1.5rem] bg-muted object-cover"
              />
              <Image
                src="/images/legnidimare/vetrina-earrings.jpg"
                alt="Piccoli gioielli colorati disposti intorno a una cornice"
                width={900}
                height={837}
                className="aspect-square rounded-[1.5rem] bg-muted object-cover"
              />
            </div>
          </section>

          <section
            id="vetrina"
            className="scroll-mt-10 rounded-[2rem] bg-muted p-8 md:p-10"
          >
            <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
              Vetrina
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em] md:text-5xl">
              Mostre, beneficenza e nuove opere
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-muted-foreground">
              La pagina originale funziona come diario aggiornato: segnala
              appuntamenti, lavori in corso, orecchini in beneficenza,
              inaugurazioni e ritorno alle platee con Bolgheri e Premio Rotonda.
              Qui è rappresentata come sezione ponte, pronta per diventare una
              pagina autonoma.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              {vetrinaItems.map((item) => (
                <li key={item} className="border-t border-border pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="contact"
            className="rounded-[2rem] bg-foreground p-8 text-background md:p-10"
          >
            <p className="text-sm tracking-[0.32em] text-background/65 uppercase">
              Contatti
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em] md:text-5xl">
              Per informazioni sulle opere e sui progetti Legni di Mare.
            </h2>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
            >
              {contactEmail}
            </a>
          </section>

          <section className="pb-10 text-xs leading-6 text-muted-foreground">
            <p>
              Immagini e contenuti riprendono il sito Legni di Mare originale e
              sono ora organizzati in pagine interne: Home, My World, Pesci,
              Conchiglie, Fuori Catalogo e Vetrina.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
