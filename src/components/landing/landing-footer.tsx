import Link from "next/link";
import { FOOTER, SITE } from "@/lib/constants";

export function LandingFooter() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-bold text-foreground">{SITE.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{SITE.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4">
              {FOOTER.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex gap-4">
              {FOOTER.social.map((s) => (
                <li key={s.icon}>
                  <a
                    href={s.href}
                    className="text-sm text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  );
}
