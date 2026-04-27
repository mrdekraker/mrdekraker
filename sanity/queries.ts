import { groq } from 'next-sanity'

export const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0..3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": categories[0]->title
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": categories[0]->title
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": categories[0]->title,
    mainImage,
    body
  }
`

export const allSlugQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`
