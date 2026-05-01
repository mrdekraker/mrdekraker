"use client";

import { useState } from "react";
import Link from "next/link";
import { useThemeContext } from "@/providers/ThemeProvider";

const NAV_LINKS = [
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "My Story" },
  { href: "/contact", label: "Contact" },
];

function DarkModeToggle({ mode, toggleMode }: { mode: string; toggleMode: () => void }) {
  return (
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
  );
}

export default function Navbar() {
  const { mode, toggleMode } = useThemeContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        borderBottom: "1px solid var(--rule)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
      }}>
      {/* ── Main bar ── */}
      <div
        className="flex justify-between items-center"
        style={{ padding: "1.5rem 3.5rem" }}>
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
                  className="no-underline transition-colors duration-200 nav-link"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <DarkModeToggle mode={mode} toggleMode={toggleMode} />
        </nav>

        {/* ── Mobile right-side controls (visible only on mobile) ── */}
        <div className="flex sm:hidden items-center gap-3">
          <DarkModeToggle mode={mode} toggleMode={toggleMode} />

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
                  className="no-underline block transition-colors duration-200 nav-link-mobile"
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.75rem",
                  }}>
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
