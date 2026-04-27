'use client'

import Link from 'next/link'
import { useThemeContext } from '@/providers/ThemeProvider'

export default function Navbar() {
  const { mode, toggleMode } = useThemeContext()

  return (
    <header className="px-12 py-6 flex justify-between items-center max-sm:px-5 max-sm:py-4">
      <Link href="/" className="no-underline">
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--ink)' }}>
          Welcome{' '}
        </span>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.05rem', letterSpacing: '0.05em', color: 'var(--navy)' }}>
          Home
        </span>
      </Link>

      <nav className="flex items-center gap-8 max-sm:gap-5">
        <ul className="flex gap-8 list-none max-sm:gap-5">
          {[
            { href: '/blog', label: 'Essays' },
            { href: '/blog?cat=family-formation', label: 'For Parents' },
            { href: '/about', label: 'My Story' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="no-underline transition-colors duration-200"
                style={{ fontFamily: 'var(--font-ui)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--navy)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleMode}
          aria-label="Toggle dark mode"
          className="transition-opacity hover:opacity-70"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink-muted)', fontSize: '1rem', padding: '0.2rem' }}
        >
          {mode === 'light' ? '☽' : '☀︎'}
        </button>
      </nav>
    </header>
  )
}
