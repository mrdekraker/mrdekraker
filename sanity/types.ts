import type { PortableTextBlock } from "next-sanity";
import type { Image } from "sanity";

export interface Author {
  name: string;
  image?: Image;
  bio?: string;
}

export interface Tag {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  relatedCategory?: {
    title: string;
    slug: string; // slug.current — projected as a plain string
  };
}

export interface Category {
  title: string;
  slug?: {
    current: string;
  };
}

/** Lightweight shape used in post lists */
export interface PostPreview {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  snippet?: string;
  /** Projected as a plain string (primaryCategory->title) for list display */
  category?: string;
  featured?: boolean;
}

/** Full shape used on the individual post page */
export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  snippet?: string;
  metaDescription?: string;
  /** Projected as {title, slug} object from postBySlugQuery */
  category?: Category;
  tags?: Tag[];
  mainImage?: Image & { alt?: string };
  body?: PortableTextBlock[];
  author?: Author;
  status?: "draft" | "published" | "archived";
  featured?: boolean;
  issueNumber?: number;
}
