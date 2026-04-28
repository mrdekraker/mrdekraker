"use client";

import { useState } from "react";
import Link from "next/link";
import { useThemeContext } from "@/providers/ThemeProvider";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "My Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { mode, toggleMode } = useThemeContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ borderBottom: "1px solid var(--rule)", position: "relative" }}>
      {/* ── Main bar ── */}
      <div
        className="flex justify-between items-center"
        style={{ padding: "1.5rem 3.5rem" }}
        // Reduce padding on small screens via inline media — Tailwind handles it:
      >
        {/* Wordmark */}
        <Link href="/" className="flex flex-col gap-0.5 no-underline">
          <span className="flex flex-row gap-1">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                color: "var(--ink)",
              }}>
              Mark
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                color: "var(--navy)",
              }}>
              DeKraker
            </span>
          </span>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.82rem",
              fontStyle: "italic",
              color: "var(--ink-muted)",
              letterSpacing: "0.01em",
            }}>
            Notes from the long way home.
          </span>
        </Link>

        {/* ── Desktop nav (hidden on mobile) ── */}
        <nav className="hidden sm:flex items-center gap-7">
          <ul className="flex gap-7 list-none">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="no-underline transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--navy)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--ink-muted)")
                  }>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark mode toggle */}
          <button
            onClick={toggleMode}
            aria-label="Toggle dark mode"
            className="transition-opacity hover:opacity-70"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-muted)",
              fontSize: "1rem",
              padding: "0.2rem",
            }}>
            {mode === "light" ? "☽" : "☀︎"}
          </button>
        </nav>

        {/* ── Mobile right-side controls (visible only on mobile) ── */}
        <div className="flex sm:hidden items-center gap-3">
          {/* Dark mode toggle */}
          <button
            onClick={toggleMode}
            aria-label="Toggle dark mode"
            className="transition-opacity hover:opacity-70"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-muted)",
              fontSize: "1rem",
              padding: "0.2rem",
            }}>
            {mode === "light" ? "☽" : "☀︎"}
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--ink-muted)",
              padding: "0.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "24px",
            }}>
            {/* Three-line icon that morphs to X */}
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "var(--ink)",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "var(--ink)",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "1.5px",
                background: "var(--ink)",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transformOrigin: "center",
                transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <nav
          className="sm:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--bg)",
            borderBottom: "1px solid var(--rule)",
            zIndex: 50,
          }}>
          <ul
            className="list-none"
            style={{ padding: "0.5rem 0", margin: 0 }}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="no-underline block transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-muted)",
                    padding: "0.85rem 1.75rem",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--ink)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--ink-muted)")
                  }>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
