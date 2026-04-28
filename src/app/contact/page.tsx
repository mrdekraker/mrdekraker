import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mark DeKraker — theology, family formation, books, or just to say hello.",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid var(--rule)",
  background: "var(--warm)",
  color: "var(--ink)",
  fontSize: "1rem",
  lineHeight: "1.5",
  fontFamily: "var(--font-serif)",
  outline: "none",
  transition: "border-color 0.15s ease",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <div
        className="mx-auto px-8 max-sm:px-4"
        style={{
          maxWidth: "900px",
          paddingTop: "4.5rem",
          paddingBottom: "1.5rem",
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
          Get in touch
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
          Say hello.
        </h1>
        <p
          className="italic pl-5"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            color: "var(--ink-soft)",
            lineHeight: 1.75,
            borderLeft: "2px solid var(--gold)",
            maxWidth: "560px",
          }}>
          Whether you have a question, want to push back on something I wrote,
          or simply want to say hello — I read every message.
        </p>

        {/* Photo */}
        <div style={{ marginTop: "2rem", maxWidth: "420px" }}>
          <Image
            src="/images/mDek.webp"
            alt="Mark DeKraker"
            width={840}
            height={1050}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>
      </div>

      {/* Two-column body */}
      <div
        className="mx-auto px-8 max-sm:px-4"
        style={{ maxWidth: "900px", paddingBottom: "5rem" }}>
        <div
          className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] items-start"
          style={{ gap: "3.5rem", marginTop: "2.5rem" }}>
          {/* Left — context */}
          <div
            className="max-sm:hidden"
            style={{ borderTop: "1px solid var(--rule)", paddingTop: "2rem" }}>
            <p
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1.5rem",
              }}>
              What I enjoy hearing about
            </p>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}>
              {[
                {
                  label: "Theology & conversion",
                  note: "Questions, pushback, resonance",
                },
                {
                  label: "Family & parenting",
                  note: "Passing faith to young children",
                },
                {
                  label: "Books & reading",
                  note: "Recommendations always welcome",
                },
                {
                  label: "Catholic intellectual life",
                  note: "Newman, Aquinas, the whole tradition",
                },
              ].map(({ label, note }) => (
                <li key={label}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      color: "var(--ink)",
                      marginBottom: "0.15rem",
                    }}>
                    {label}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-ui)",
                      fontSize: "0.76rem",
                      color: "var(--ink-muted)",
                    }}>
                    {note}
                  </span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--rule)",
              }}>
              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                  color: "var(--ink-muted)",
                }}>
                I aim to reply within a few days. I&apos;m a father with young
                children, so patience is appreciated — and practiced.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{ borderTop: "1px solid var(--rule)", paddingTop: "2rem" }}>
            <form
              target="_blank"
              action="https://formsubmit.co/52edcdc9df4224d998079bae78fb4893"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}>
              {/* Spam guard */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />

              {/* Name */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}>
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}>
                <label
                  htmlFor="email"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="your@email.com"
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}>
                <label
                  htmlFor="message"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What's on your mind?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  alignSelf: "flex-start",
                  background: "var(--navy)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.75rem 2rem",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}>
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* Mobile-only note */}
        <div
          className="max-sm:block hidden"
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--rule)",
          }}>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.78rem",
              lineHeight: 1.7,
              color: "var(--ink-muted)",
            }}>
            I aim to reply within a few days. I&apos;m a father with young
            children, so patience is appreciated — and practiced.
          </p>
        </div>
      </div>
    </main>
  );
}
