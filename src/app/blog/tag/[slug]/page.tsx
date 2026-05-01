import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@cms/lib/client'
import { tagBySlugQuery, postsByTagQuery } from '@cms/queries'
import { isSanityConfigured } from '@cms/env'
import type { PostPreview } from '@cms/types'
import PostListItem from '@/app/components/PostListItem'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!isSanityConfigured) return {}
  try {
    const tag = await client!.fetch<{ title: string }>(tagBySlugQuery, { slug })
    if (!tag) return {}
    return {
      title: tag.title,
      description: `All writing tagged "${tag.title}".`,
    }
  } catch {
    return {}
  }
}

export default async function TagArchivePage({ params }: Props) {
  const { slug } = await params
  if (!isSanityConfigured) notFound()

  let tag: { title: string; relatedCategory?: { title: string; slug: string } } | null = null
  let posts: PostPreview[] = []

  try {
    tag = await client!.fetch(tagBySlugQuery, { slug })
    posts = (await client!.fetch<PostPreview[]>(postsByTagQuery, { tagSlug: slug })) ?? []
  } catch {
    notFound()
  }

  if (!tag) notFound()

  return (
    <main
      className="mx-auto px-8 max-sm:px-5"
      style={{ maxWidth: '680px', paddingTop: '4.5rem', paddingBottom: '4rem' }}>

      {/* Breadcrumb */}
      <p style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--ink-faint)',
        marginBottom: '1rem',
      }}>
        <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
          All Writing
        </Link>
        {tag.relatedCategory && (
          <>
            {' '}·{' '}
            <Link
              href={`/blog/category/${tag.relatedCategory.slug}`}
              style={{ color: 'inherit', textDecoration: 'none' }}>
              {tag.relatedCategory.title}
            </Link>
          </>
        )}
      </p>

      {/* Heading */}
      <p style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '0.65rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--crimson)',
        marginBottom: '1.2rem',
      }}>
        Tag
      </p>
      <h1
        className="mb-10 leading-[1.12]"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          color: 'var(--ink)',
        }}>
        {tag.title}
      </h1>

      {/* Posts */}
      {posts.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center', padding: '5rem 0' }}>
          No posts with this tag yet.
        </p>
      ) : (
        <div className="flex flex-col gap-7">
          {posts.map((post, i) => (
            <PostListItem key={post._id} post={post} index={i} />
          ))}
        </div>
      )}

      {/* Back */}
      <div className="mt-16 pt-8" style={{ borderTop: '1px solid var(--rule)' }}>
        <Link href="/blog" style={{
          fontFamily: 'var(--font-ui)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--ink-muted)',
          textDecoration: 'none',
        }}>
          ← All Writing
        </Link>
      </div>
    </main>
  )
}
