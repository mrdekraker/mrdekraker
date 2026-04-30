import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export const revalidate = 60;
import Image from "next/image";
import { PortableText } from "next-sanity";
import { client } from "@cms/lib/client";
import { postBySlugQuery, allSlugQuery } from "@cms/queries";
import type { Post } from "@cms/types";
import { urlFor } from "@cms/lib/image";

const portableTextComponents = {
  types: {
    image: ({ value }: { value: { asset: object; alt?: string } }) => (
      <div className="my-8">
        <Image
          src={urlFor(value.asset).width(800).fit("max").auto("format").url()}
          alt={value.alt ?? ""}
          width={800}
          height={0}
          style={{ height: "auto", width: "100%" }}
          className="rounded-sm"
        />
        {value.alt && (
          <p className="text-center text-sm italic mt-2" style={{ color: "var(--ink-faint)" }}>
            {value.alt}
          </p>
        )}
      </div>
    ),
    divider: () => <div className="prose-divider">· · ·</div>,
  },
  block: {
    pullquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="prose-pull-quote">{children}</blockquote>
    ),
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return [];
  try {
    const slugs = await client!.fetch<{ slug: string }[]>(allSlugQuery);
    return (slugs ?? []).map(({ slug }) => ({ slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return {};
  try {
    const post = await client!.fetch<Post>(postBySlugQuery, { slug });
    if (!post) return {};
    return {
      title: post.title,
      description: post.metaDescription || post.snippet,
      openGraph: {
        type: "article",
        url: `https://mrdekraker.com/blog/${slug}`,
        title: post.title,
        description: post.metaDescription || post.snippet,
        images: [],
        publishedTime: post.publishedAt,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) notFound();

  let post: Post | null = null;
  try {
    post = await client!.fetch<Post>(postBySlugQuery, { slug });
  } catch {
    notFound();
  }
  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // Deduplicate related categories from all tags (by slug)
  const relatedCategories = post.tags
    ? Array.from(
        new Map(
          post.tags
            .map((tag) => tag.relatedCategory)
            .filter((rc): rc is { title: string; slug: string } => !!rc?.slug)
            .map((rc) => [rc.slug, rc]),
        ).values(),
      )
    : [];

  return (
    <article
      className="mx-auto px-8 max-sm:px-5"
      style={{
        maxWidth: "680px",
        paddingTop: "4.5rem",
        paddingBottom: "5rem",
      }}>
      <header
        className="mb-12 pb-8"
        style={{ borderBottom: "1px solid var(--rule)" }}>
        {post.category && (
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--navy)",
              marginBottom: "1rem",
            }}>
            {post.category.title}
            {post.issueNumber != null && (
              <> &mdash; Issue No.&nbsp;{post.issueNumber}</>
            )}
          </p>
        )}
        <h1
          className="leading-[1.12] mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--ink)",
          }}>
          {post.title}
        </h1>
        {post.snippet && (
          <p
            className="italic leading-[1.75] pl-5"
            style={{
              fontSize: "1.12rem",
              color: "var(--ink-soft)",
              borderLeft: "2px solid var(--rule)",
            }}>
            {post.snippet}
          </p>
        )}
        {date && (
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
            }}>
            {date}
          </p>
        )}
      </header>

      {post.body && (
        <div className="prose-body">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>
      )}

      {/* Related Topics (from tag→category links) */}
      {relatedCategories.length > 0 && (
        <div
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid var(--rule)" }}>
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "0.75rem",
            }}>
            Related Topics
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {relatedCategories.map((rc) => (
              <Link
                key={rc.slug}
                href={`/blog/category/${rc.slug}`}
                className="transition-colors duration-200 hover:text-ink hover:border-ink-muted"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--navy)",
                  border: "1px solid var(--rule)",
                  padding: "0.25rem 0.75rem",
                  textDecoration: "none",
                }}>
                {rc.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-8">
          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "0.75rem",
            }}>
            Tags
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {post.tags.map((tag) => (
              <Link
                key={tag._id}
                href={`/blog/tag/${tag.slug.current}`}
                className="transition-colors duration-200 hover:text-ink hover:border-ink-muted"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                  border: "1px solid var(--rule)",
                  padding: "0.25rem 0.75rem",
                  textDecoration: "none",
                }}>
                {tag.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div
        className="mt-16 pt-8"
        style={{ borderTop: "1px solid var(--rule)" }}>
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "0.75rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            textDecoration: "none",
          }}>
          ← All Writing
        </Link>
      </div>
    </article>
  );
}
