import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Born in the Philippines, raised in Texas by Canadians, now rooted in Texas and home in the Catholic Church. The long way home is not a metaphor.",
};

function SectionHead({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-4"
      style={{ marginTop: "3rem", marginBottom: "1.25rem" }}>
      {/* Small cross ornament */}
      <div
        className="relative flex-shrink-0"
        style={{ width: "12px", height: "16px" }}>
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            transform: "translateX(-50%)",
            width: "1px",
            height: "100%",
            background: "var(--crimson)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "35%",
            width: "100%",
            height: "1px",
            background: "var(--crimson)",
          }}
        />
      </div>
      <h2
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.68rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
          margin: 0,
        }}>
        {label}
      </h2>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <div
        className="mx-auto px-8 max-sm:px-5"
        style={{
          maxWidth: "680px",
          paddingTop: "4.5rem",
          paddingBottom: "1rem",
        }}>
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--crimson)",
            marginBottom: "1.2rem",
          }}>
          About me.
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
            lineHeight: 1.12,
            color: "var(--ink)",
            marginBottom: "1.2rem",
          }}>
          I&apos;ve always been
          <br />
          <em style={{ fontStyle: "italic", color: "var(--crimson)" }}>
            on my way somewhere.
          </em>
        </h1>

        <p
          className="italic pl-5"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.15rem",
            color: "var(--ink-soft)",
            lineHeight: 1.75,
            borderLeft: "2px solid var(--gold)",
          }}>
          Born in the Philippines, raised in Texas by Canadians — a
          Chinese-German mother and a Dutch father — now rooted in Texas with my
          wife and kids, and as of Easter 2026, home in the Catholic Church. The
          long way home is not a metaphor. It&apos;s just my life.
        </p>
      </div>

      {/* Body */}
      <div
        className="mx-auto px-8 max-sm:px-5"
        style={{ maxWidth: "680px", paddingBottom: "5rem" }}>
        {/* Fact strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--rule)",
            border: "1px solid var(--rule)",
            marginTop: "2.5rem",
            marginBottom: "1.5rem",
          }}
          className="max-sm:grid-cols-2">
          {[
            { label: "Background", value: "Filipino-Canadian" },
            { label: "Now living", value: "Texas, USA" },
            { label: "In the faith", value: "Easter 2026" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                background: "var(--warm)",
                padding: "1.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}>
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-faint)",
                }}>
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  color: "var(--ink)",
                }}>
                {value}
              </span>
            </div>
          ))}
        </div>

        <SectionHead label="The road here" />

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.85,
            color: "var(--ink-soft)",
            marginBottom: "1.3rem",
          }}>
          I came to Christianity young. I grew up going to church every sunday
          in a Protestant denomination that followed the Reformed tradition.
          Around fifteen or sixteen, through the Protestant tradition, which
          shaped how I read Scripture, how I pray, and how I think about what
          faith is actually for. That foundation matters to me. I didn&apos;t
          leave it behind when I became Catholic; I brought it with me, and it
          informed so much more.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.85,
            color: "var(--ink-soft)",
            marginBottom: "1.3rem",
          }}>
          The conversion wasn&apos;t a crisis or a dramatic rupture. It was more
          like a long walk that gradually revealed where it had been heading all
          along. The more I read and listened to{" "}
          <strong style={{ fontWeight: 500, color: "var(--ink)" }}>
            Aquinas, Augustine, Matt Fradd, Dr. Scott Hahn,
          </strong>{" "}
          — the more I found a tradition that didn&apos;t just ask me to believe
          things, but gave me reasons. A faith that welcomed the questions
          rather than suspecting them.
        </p>

        {/* Pull quote */}
        <blockquote
          style={{
            margin: "2.5rem 0",
            padding: "1.2rem 1.6rem",
            borderLeft: "2px solid var(--crimson)",
            background: "var(--card)",
          }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.35rem",
              fontStyle: "italic",
              fontWeight: 300,
              lineHeight: 1.5,
              color: "var(--ink)",
              margin: 0,
            }}>
            &ldquo;The saints in heaven, the souls in purgatory, and the
            faithful on earth are united in the one mystical body of Christ, and
            through this union, each member can aid another. &rdquo;
          </p>
          <cite
            style={{
              display: "block",
              marginTop: "0.75rem",
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              fontStyle: "normal",
            }}>
            — St. Thomas Aquinas
          </cite>
        </blockquote>

        <SectionHead label="Why I write" />

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.85,
            color: "var(--ink-soft)",
            marginBottom: "1.3rem",
          }}>
          I&apos;m a father of young children, and that changes what theology is{" "}
          <em>for</em>. It&apos;s no longer an abstract exercise — it&apos;s
          something I have to be able to hand to a six-year-old in language
          that&apos;s honest and doesn&apos;t condescend. That challenge has
          made me a better thinker, not worse.
        </p>

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.85,
            color: "var(--ink-soft)",
            marginBottom: "1.3rem",
          }}>
          This site is where I work through it in public. Not because I have all
          the answers — I very much don&apos;t — but because I think the
          working-through is worth sharing. If you&apos;re a parent trying to
          figure out how to pass the faith on, or a Protestant curious about
          where the Catholic road goes, or someone who just wants to think
          seriously about hard questions: you&apos;re welcome here.
        </p>

        <SectionHead label="Patron saint" />

        {/* Saint card */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "1.25rem",
            alignItems: "start",
            background: "var(--card)",
            border: "1px solid var(--rule)",
            padding: "1.25rem 1.5rem",
            margin: "1.5rem 0 2rem",
          }}
          className="max-sm:grid-cols-1">
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "var(--navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 300,
                color: "var(--cream)",
              }}>
              M
            </span>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "var(--ink)",
                marginBottom: "0.25rem",
              }}>
              St. Mark the Evangelist
            </p>
            <p
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "var(--ink-muted)",
                margin: 0,
              }}>
              Author of the most urgent Gospel — short, immediate, propulsive.
              Mark doesn&apos;t linger. He moves. &ldquo;And
              immediately...&rdquo; appears again and again. A writer who
              understood that the good news was urgent enough to get out of the
              way of.
            </p>
          </div>
        </div>

        <SectionHead label="Outside the writing" />

        <p
          style={{
            fontSize: "1.08rem",
            lineHeight: 1.85,
            color: "var(--ink-soft)",
            marginBottom: "1.3rem",
          }}>
          I&apos;m a musician — which means &ldquo;notes&rdquo; in the tagline
          is doing more than one thing, and I&apos;m fine with that. I grew up
          reading the classics: Homer, Tolkien, the great books that treat human
          beings as if their lives actually mean something. Those instincts
          shape how I read theology too.
        </p>

        {/* Interest tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "1.25rem",
            marginBottom: "0.5rem",
          }}>
          {[
            "Music",
            "J.R.R. Tolkien",
            "The Iliad & Odyssey",
            "Classical literature",
            "Natural law",
            "Catholic intellectual tradition",
            "Family formation",
          ].map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--navy)",
                border: "1px solid var(--rule)",
                padding: "0.25rem 0.75rem",
              }}>
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--rule)",
            textAlign: "center",
          }}>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--ink-muted)",
              marginBottom: "1.25rem",
            }}>
            The best place to start is the writing.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link
              href="/blog"
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "var(--navy)",
                color: "var(--cream)",
                padding: "0.75rem 2rem",
              }}>
              Read the latest
            </Link>
            <Link
              href="/contact"
              className="no-underline transition-colors duration-200"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                border: "1px solid var(--rule)",
                padding: "0.75rem 2rem",
              }}>
              Say hello
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
