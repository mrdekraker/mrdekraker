'use client'

import { useState, useMemo, useCallback } from 'react'
import type { PostSearchable } from '@cms/types'
import PostListItem from './PostListItem'

function filterPosts(posts: PostSearchable[], query: string): PostSearchable[] {
  const q = query.trim().toLowerCase()
  if (!q) return posts

  const words = q.split(/\s+/).filter(w => w.length > 1)

  return posts.filter(post => {
    const text = [
      post.title,
      post.snippet,
      post.category,
      ...(post.tags ?? []),
      post.bodyText,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    // Match full phrase, or every individual word
    return text.includes(q) || (words.length > 1 && words.every(w => text.includes(w)))
  })
}

export default function SearchableBlogList({ posts }: { posts: PostSearchable[] }) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => filterPosts(posts, query), [posts, query])
  const isSearching = query.trim().length > 0

  const handleClear = useCallback(() => setQuery(''), [])

  return (
    <>
      {/* Search bar */}
      <div className="mb-10" role="search">
        <label
          htmlFor="post-search"
          style={{
            display: 'block',
            fontFamily: 'var(--font-ui)',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ink-muted)',
            marginBottom: '0.6rem',
          }}
        >
          Search
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="post-search"
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by keyword, topic, or tag…"
            autoComplete="off"
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              borderBottom: '1px solid var(--rule)',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              color: 'var(--ink)',
              padding: '0.5rem 2rem 0.5rem 0',
              lineHeight: 1.6,
              transition: 'border-color 0.2s',
            }}
            onFocus={e => { (e.target as HTMLInputElement).style.borderBottomColor = 'var(--ink-muted)' }}
            onBlur={e => { (e.target as HTMLInputElement).style.borderBottomColor = 'var(--rule)' }}
          />
          {query && (
            <button
              onClick={handleClear}
              aria-label="Clear search"
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--ink-muted)',
                fontSize: '1.1rem',
                padding: '0 0.2rem',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>

        {isSearching && (
          <p
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: '0.68rem',
              letterSpacing: '0.08em',
              color: 'var(--ink-muted)',
              marginTop: '0.6rem',
            }}
          >
            {filtered.length === 0
              ? 'No results found.'
              : `${filtered.length} result${filtered.length === 1 ? '' : 's'}`}
          </p>
        )}
      </div>

      {/* Post list */}
      {filtered.length === 0 && isSearching ? null : (
        <div className="flex flex-col gap-7">
          {filtered.map((post, i) => (
            <PostListItem key={post._id} post={post} index={i} />
          ))}
        </div>
      )}
    </>
  )
}
