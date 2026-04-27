export interface PostPreview {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string | null
  excerpt?: string
  category?: string
}

export interface Post extends PostPreview {
  mainImage?: {
    asset: { _ref: string }
    alt?: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any[]
}
