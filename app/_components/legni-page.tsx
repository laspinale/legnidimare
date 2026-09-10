import Image from "next/image"
import Link from "next/link"

import { contactEmail, navItems, type pages } from "../legnidimare-data"

type PageContent = (typeof pages)[keyof typeof pages]

export function LegniPage({ page }: { page: PageContent }) {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto grid min-h-svh max-w-7xl gap-12 px-6 py-8 md:grid-cols-[0.78fr_1.22fr] md:px-10 lg:px-16">
        <aside className="flex flex-col justify-between gap-14 md:sticky md:top-8 md:h-[calc(100svh-4rem)]">
          <nav className="flex items-center justify-between text-xs tracking-[0.28em] text-muted-foreground uppercase">
            <Link href="/" className="text-foreground">
              Legni di Mare
            </Link>
            <a
              href={`mailto:${contactEmail}`}
              className="border-b border-foreground/40 pb-1 text-foreground"
            >
              Email
            </a>
          </nav>

          <div className="space-y-8">
            <p className="text-sm tracking-[0.34em] text-muted-foreground uppercase">
              {page.eyebrow}
            </p>
            <h1 className="font-heading text-6xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              {page.title}
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              {page.intro}
            </p>
          </div>

          <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group border-t border-border pt-3 text-foreground"
              >
                <span>{item.label}</span>
                <span className="mt-1 block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase transition group-hover:text-foreground">
                  {item.status}
                </span>
              </Link>
            ))}
          </div>
        </aside>

        <div className="space-y-10">
          {page.gallery[0] ? (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-muted">
              <Image
                src={page.gallery[0].src}
                alt={page.gallery[0].alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 61vw"
                className="object-contain object-center p-8"
              />
            </div>
          ) : null}

          <article className="rounded-[2rem] border border-border p-6 md:p-10">
            <div className="space-y-5 text-sm leading-7 text-muted-foreground">
              {page.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/"
              className="mt-8 inline-flex rounded-full border border-border px-5 py-3 text-xs tracking-[0.22em] text-foreground uppercase"
            >
              Torna alla home
            </Link>
          </article>

          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {page.gallery.map((image) => (
              <figure key={image.src} className="space-y-3">
                <div className="relative aspect-square overflow-hidden rounded-[1.25rem] bg-muted">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 31vw, 20vw"
                    className="object-contain object-center p-4"
                  />
                </div>
                <figcaption className="text-xs leading-5 text-muted-foreground">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </section>
        </div>
      </section>
    </main>
  )
}
