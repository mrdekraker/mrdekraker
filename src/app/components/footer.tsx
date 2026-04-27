export default function Footer() {
  return (
    <footer
      className="text-center py-8 px-4"
      style={{ borderTop: '1px solid var(--rule)', fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}
    >
      Mark DeKraker &nbsp;·&nbsp; Welcome Home &nbsp;·&nbsp;{' '}
      <a href="mailto:mrdekraker@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
        mrdekraker@gmail.com
      </a>
    </footer>
  )
}
