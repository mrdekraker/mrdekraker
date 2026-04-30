import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { client } from '@cms/lib/client'
import { categoryBySlugQuery, postsByCategoryQuery } from '@cms/queries'
import type { PostPreview } from '@cms/types'
import PostListItem from '@/app/components/PostListItem'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return {}
  try {
    const category = await client!.fetch<{ title: string; description?: string }>(
      categoryBySlugQuery,
      { slug }
    )
    if (!category) return {}
    return {
      title: category.title,
      description: category.description ?? `All writing in "${category.title}".`,
    }
  } catch {
    return {}
  }
}

export default async function CategoryArchivePage({ params }: Props) {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) notFound()

  let category: { title: string; description?: string } | null = null
  let posts: PostPreview[] = []

  try {
    category = await client!.fetch(categoryBySlugQuery, { slug })
    posts = (await client!.fetch<PostPreview[]>(postsByCategoryQuery, { categorySlug: slug })) ?? []
  } catch {
    notFound()
  }

  if (!category) notFound()

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
        Category
      </p>
      <h1
        className="leading-[1.12]"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          color: 'var(--ink)',
          marginBottom: category.description ? '1rem' : '2.5rem',
        }}>
        {category.title}
      </h1>

      {category.description && (
        <p className="mb-14" style={{ fontSize: '1.05rem', color: 'var(--ink-muted)', lineHeight: 1.8 }}>
          {category.description}
        </p>
      )}

      {/* Posts */}
      {posts.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center', padding: '5rem 0' }}>
          No posts in this category yet.
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
