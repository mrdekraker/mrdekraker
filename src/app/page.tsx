import Link from 'next/link'
import { client } from '@/../../sanity/lib/client'
import { recentPostsQuery } from '@/../../sanity/queries'
import type { PostPreview } from '@/../../sanity/types'
import PostListItem from '@/app/components/PostListItem'

const PLACEHOLDER_POSTS: PostPreview[] = [
  {
    _id: '1',
    title: 'Why I find the argument from conscience compelling',
    slug: { current: 'argument-from-conscience' },
    category: 'Faith & Reason',
    publishedAt: '',
    excerpt: "Newman's approach to moral intuition cuts through a lot of the noise in natural law debates — and it starts somewhere every parent already knows.",
  },
  {
    _id: '2',
    title: 'Explaining the Eucharist to a six-year-old',
    slug: { current: 'explaining-eucharist' },
    category: 'Family Formation',
    publishedAt: '',
    excerpt: 'Children are far more comfortable with mystery than adults give them credit for. Mine taught me that.',
  },
  {
    _id: '3',
    title: 'What I miss about Protestant worship',
    slug: { current: 'what-i-miss' },
    category: "The Convert's Journey",
    publishedAt: '',
    excerpt: 'Honest reflection on what the journey cost, what I carried with me, and why I think it was worth it anyway.',
  },
]

async function getPosts(): Promise<PostPreview[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return PLACEHOLDER_POSTS
  try {
    const posts = await client!.fetch<PostPreview[]>(recentPostsQuery)
    return posts?.length ? posts : PLACEHOLDER_POSTS
  } catch {
    return PLACEHOLDER_POSTS
  }
}

export default async function HomePage() {
  const posts = await getPosts()

  return (
    <main>
      {/* Hero */}
      <section
        className="animate-fadein mx-auto px-8 text-center max-sm:px-5"
        style={{ maxWidth: '780px', paddingTop: '5rem', paddingBottom: '4rem' }}
      >
        <span
          className="block mb-8"
          style={{ fontSize: '1.3rem', color: 'var(--navy)', opacity: 0.4, letterSpacing: '0.3em' }}
        >
          ✦ &nbsp; ✦ &nbsp; ✦
        </span>

        <h1
          className="leading-[1.1] mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'var(--ink)' }}
        >
          Welcome Home
          <span
            className="block italic mt-[0.4em]"
            style={{ fontFamily: 'var(--font-display)', fontSize: '0.42em', letterSpacing: '0.05em', color: 'var(--ink-muted)' }}
          >
            Notes from the long way home.
          </span>
        </h1>

        <p
          className="mx-auto mt-8"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--ink-soft)', maxWidth: '56ch' }}
        >
          A former Protestant. A new Catholic. A dad trying to pass something true to his kids.
          This is where I think out loud about the faith — the arguments, the beauty, the hard
          questions, and the daily business of raising a family inside it.
        </p>

        {/* Photo inset */}
        <div
          className="mx-auto mt-10 mb-3 overflow-hidden"
          style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/7', borderRadius: '2px', background: 'linear-gradient(135deg, #3a4a3a, #6a7a5a, #9aaa7a, #c0c896)' }}
        />
        <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
          Somewhere worth thinking about.
        </p>

        {/* CTAs */}
        <div className="flex gap-6 justify-center mt-10 flex-wrap">
          <Link
            href="/blog"
            className="no-underline transition-colors duration-200"
            style={{ background: 'var(--navy)', color: '#f5efe4', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.85rem 2rem' }}
          >
            Start Reading
          </Link>
          <Link
            href="/about"
            className="no-underline transition-colors duration-200"
            style={{ color: 'var(--ink-muted)', fontFamily: 'var(--font-ui)', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.85rem 2rem', border: '1px solid var(--rule)' }}
          >
            My Story
          </Link>
        </div>
      </section>

      {/* Recent posts */}
      <section className="mx-auto px-8 pb-20 max-sm:px-5" style={{ maxWidth: '820px' }}>
        <div className="flex items-center gap-5 mb-10">
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
          <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
            Latest
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--rule)' }} />
        </div>

        <div className="flex flex-col gap-7">
          {posts.map((post, i) => (
            <PostListItem key={post._id} post={post} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
