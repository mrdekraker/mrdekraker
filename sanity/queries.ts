import { groq } from 'next-sanity'

// Published filter — backward-compatible: shows posts with status "published"
// OR posts that pre-date the status field (no status set)
const published = `(status == "published" || !defined(status))`

export const recentPostsQuery = groq`
  *[_type == "post" && ${published}] | order(publishedAt desc) [0..3] {
    _id,
    title,
    slug,
    publishedAt,
    snippet,
    featured,
    "category": primaryCategory->title
  }
`

export const allPostsQuery = groq`
  *[_type == "post" && ${published}] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    snippet,
    featured,
    "category": primaryCategory->title
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    snippet,
    metaDescription,
    status,
    featured,
    issueNumber,
    "category": primaryCategory->{title, slug},
    "tags": tags[]->{
      _id,
      title,
      slug,
      "relatedCategory": {
        "title": relatedCategory->title,
        "slug": relatedCategory->slug.current
      }
    },
    mainImage,
    body,
    "author": author->{name, image}
  }
`

export const allSlugQuery = groq`
  *[_type == "post" && ${published}] { "slug": slug.current }
`

export const postsByTagQuery = groq`
  *[_type == "post" && ${published} && $tagSlug in tags[]->slug.current]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    snippet,
    "category": primaryCategory->title
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && ${published} && primaryCategory->slug.current == $categorySlug]
  | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    snippet,
    "category": primaryCategory->title
  }
`

export const tagBySlugQuery = groq`
  *[_type == "tag" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "relatedCategory": {
      "title": relatedCategory->title,
      "slug": relatedCategory->slug.current
    }
  }
`

export const categoryBySlugQuery = groq`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description
  }
`
