import Image from "next/image"

const featuredWork = [
  {
    title: "Quiet shoreline",
    category: "Editorial landscape",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    alt: "Wide shoreline landscape beneath a soft evening sky",
    replaceWith: "A wide landscape or travel image with strong atmosphere.",
  },
  {
    title: "Window light portrait",
    category: "Portrait session",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80",
    alt: "Natural light portrait of a woman framed closely",
    replaceWith: "A portrait that shows your approach to natural light.",
  },
  {
    title: "Studio stillness",
    category: "Still life",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    alt: "Camera and creative objects arranged in quiet studio light",
    replaceWith:
      "A detail-led frame from product, interiors, or personal work.",
  },
  {
    title: "Evening gathering",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    alt: "Candid wedding gathering with guests in warm light",
    replaceWith: "A candid event or documentary image with a clear moment.",
  },
]

const packages = [
  {
    name: "Portrait session",
    price: "From €280",
    details:
      "For individuals, artists, and small teams who need thoughtful portraits.",
  },
  {
    name: "Editorial story",
    price: "From €520",
    details:
      "Half-day coverage for spaces, makers, travel notes, or brand narratives.",
  },
  {
    name: "Events",
    price: "From €750",
    details:
      "Documentary coverage for gatherings, launches, and intimate celebrations.",
  },
]

export default function Page() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto grid min-h-svh max-w-7xl gap-12 px-6 py-8 md:grid-cols-[0.86fr_1.14fr] md:px-10 lg:px-16">
        <div className="flex flex-col justify-between gap-14 md:sticky md:top-8 md:h-[calc(100svh-4rem)]">
          <nav className="flex items-center justify-between text-xs tracking-[0.28em] text-muted-foreground uppercase">
            <a href="#top" className="text-foreground">
              Photographer Name
            </a>
            <a
              href="mailto:hello@example.com"
              className="border-b border-foreground/40 pb-1 text-foreground"
            >
              Email
            </a>
          </nav>

          <div id="top" className="space-y-8">
            <p className="text-sm tracking-[0.34em] text-muted-foreground uppercase">
              Photography portfolio
            </p>
            <h1 className="font-heading text-6xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              Quiet images for people, places, and the moments between.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              I am a photographer drawn to natural light, calm compositions, and
              honest gestures. I shoot portraits, editorial stories, intimate
              events, and details that give a place its character.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <a
              href="#work"
              className="border-t border-border pt-3 text-foreground"
            >
              My work
            </a>
            <a
              href="#pricing"
              className="border-t border-border pt-3 text-foreground"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="border-t border-border pt-3 text-foreground"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="space-y-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1600&q=80"
              alt="Quiet interior with a desk and warm natural light"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 57vw"
              className="object-cover object-center grayscale-[15%]"
            />
          </div>

          <section id="work" className="scroll-mt-10 space-y-8">
            <div className="flex flex-col justify-between gap-4 border-t border-border pt-6 sm:flex-row">
              <div>
                <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                  My work
                </p>
                <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                  Selected photographs
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                Replace these placeholders with a balanced edit: one hero image,
                two portraits or people-led frames, one atmosphere-led image,
                and one detail.
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
                      className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
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

          <section id="pricing" className="scroll-mt-10 space-y-8">
            <div className="border-t border-border pt-6">
              <p className="text-sm tracking-[0.32em] text-muted-foreground uppercase">
                Pricing
              </p>
              <h2 className="mt-3 font-heading text-4xl tracking-[-0.03em]">
                Simple starting points
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                Pricing sits after the work so visitors can first understand the
                visual direction, then quickly see the kinds of sessions
                available before getting in touch.
              </p>
            </div>

            <div className="grid gap-4">
              {packages.map((item) => (
                <article
                  key={item.name}
                  className="grid gap-4 rounded-[1.5rem] border border-border p-5 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <h3 className="font-heading text-2xl tracking-[-0.02em]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.details}
                    </p>
                  </div>
                  <p className="text-lg text-foreground">{item.price}</p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-[2rem] bg-foreground p-8 text-background md:p-10"
          >
            <p className="text-sm tracking-[0.32em] text-background/65 uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-heading text-4xl tracking-[-0.03em] md:text-5xl">
              Tell me what you are making, marking, or remembering.
            </h2>
            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground"
            >
              hello@example.com
            </a>
          </section>

          <section className="pb-10 text-xs leading-6 text-muted-foreground">
            <h2 className="mb-3 text-sm tracking-[0.32em] text-foreground uppercase">
              Placeholder replacement list
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              <li>Hero: replace with a signature image that sets the tone.</li>
              {featuredWork.map((item) => (
                <li key={item.title}>
                  {item.title}: {item.replaceWith}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  )
}
