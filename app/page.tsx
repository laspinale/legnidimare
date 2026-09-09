import Image from "next/image"

const contactEmail = "xpaolomarzullo@gmail.com"

const featuredWork = [
  {
    title: "Capone policromo",
    category: "Pesci in legno di mare e resina",
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
    category: "Cromie ispirate all'illustrazione scientifica",
    image: "/images/legnidimare/fish-riccio.jpg",
    alt: "Pesce colorato con puntinature bianche e occhio nero lucido",
  },
]

const collections = [
  {
    name: "Pesci",
    details:
      "Forme anatomiche frammentate e unite da rivetti, così che il legno mosso dal mare mantenga un senso di motilità.",
  },
  {
    name: "Conchiglie e induttori di sogno",
    details:
      "Oggetti più intimi, spesso costruiti con accostamenti di legni, metalli e superfici lucide.",
  },
  {
    name: "Fuori catalogo",
    details:
      "Lampade, galline, coralli, piccola gioielleria, fermacarte e altre variazioni nate dalla stessa ricerca del bello.",
  },
]

const processSteps = [
  "Legni spiaggiati scelti tra tavole segnate dalla permanenza in acqua di mare.",
  "Disegno preparatorio, taglio delle parti, prova cromatica e assemblaggio con rivetti.",
  "Colori acrilici, dettagli a pennello o pennarello, lucidatura e sigillo finale in ceralacca.",
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

          <div id="top" className="space-y-8">
            <p className="text-sm tracking-[0.34em] text-muted-foreground uppercase">
              Paolo Marzullo · Resin creations
            </p>
            <h1 className="font-heading text-6xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Oggetti d&apos;arte nati dal legno portato dal mare.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Legni di Mare è un portfolio di pesci, conchiglie e piccole
              sculture in legno spiaggiato, resina e materiali recuperati: opere
              costruite per gioco e per passione, tra osservazione scientifica e
              fantasia cromatica.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <a
              href="#work"
              className="border-t border-border pt-3 text-foreground"
            >
              Opere
            </a>
            <a
              href="#process"
              className="border-t border-border pt-3 text-foreground"
            >
              Processo
            </a>
            <a
              href="#contact"
              className="border-t border-border pt-3 text-foreground"
            >
              Contatti
            </a>
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
                sono disegnate, separate in parti, verniciate e ricomposte con
                rivetti, conservando il movimento naturale del materiale.
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

          <section className="scroll-mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {collections.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[1.5rem] border border-border p-5"
                >
                  <h3 className="font-heading text-2xl tracking-[-0.02em]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.details}
                  </p>
                </article>
              ))}
            </div>
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
              Immagini e contenuti di partenza: www.legnidimare.it. Portfolio
              adattato dal template Next.js generico.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
