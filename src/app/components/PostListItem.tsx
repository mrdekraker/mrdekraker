import Link from 'next/link'
import type { PostPreview } from '@cms/types'

export default function PostListItem({ post, index }: { post: PostPreview; index: number }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <Link
      href={`/blog/${post.slug.current}`}
      className="group grid pb-7 no-underline"
      style={{ gridTemplateColumns: 'auto 1fr', gap: '1.5rem', borderBottom: '1px solid var(--rule)' }}
    >
      <span
        className="leading-none pt-1 min-w-[2rem] text-right"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2rem', color: 'var(--rule)' }}
      >
        {num}
      </span>
      <div className="flex flex-col gap-1">
        {post.category && (
          <span
            style={{ fontFamily: 'var(--font-ui)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy)' }}
          >
            {post.category}
          </span>
        )}
        <h3
          className="transition-colors duration-200"
          style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3 }}
        >
          {post.title}
        </h3>
        {post.excerpt && (
          <p style={{ fontSize: '0.95rem', color: 'var(--ink-muted)', lineHeight: 1.6, marginTop: '0.3rem' }}>
            {post.excerpt}
          </p>
        )}
      </div>
    </Link>
  )
}
