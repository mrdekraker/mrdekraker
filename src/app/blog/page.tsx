import type { Metadata } from "next";
import { client } from "@cms/lib/client";
import { allPostsForSearchQuery } from "@cms/queries";
import { isSanityConfigured } from "@cms/env";
import type { PostSearchable } from "@cms/types";
import SearchableBlogList from "@/app/components/SearchableBlogList";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "All writing — faith, family, books, and the convert's journey.",
};

async function getPosts(): Promise<PostSearchable[]> {
  if (!isSanityConfigured) return [];
  try {
    return (await client!.fetch<PostSearchable[]>(allPostsForSearchQuery)) ?? [];
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main
      className="mx-auto px-8 max-sm:px-5"
      style={{
        maxWidth: "680px",
        paddingTop: "4.5rem",
        paddingBottom: "4rem",
      }}>
      <p
        style={{
          fontFamily: "var(--font-ui)",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--crimson)",
          marginBottom: "1.2rem",
        }}>
        All Writing
      </p>
      <h1
        className="mb-4 leading-[1.12]"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 300,
          fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
          color: "var(--ink)",
        }}>
        Notes from the long way home.
      </h1>
      <p
        className="mb-14"
        style={{
          fontSize: "1.05rem",
          color: "var(--ink-muted)",
          lineHeight: 1.8,
        }}>
        Essays on Catholic theology, family formation, and the convert&apos;s
        journey — worked through in public, one question at a time.
      </p>

      {posts.length === 0 ? (
        <p
          style={{
            fontStyle: "italic",
            color: "var(--ink-muted)",
            textAlign: "center",
            padding: "5rem 0",
          }}>
          Posts will appear here once Sanity is connected.
        </p>
      ) : (
        <SearchableBlogList posts={posts} />
      )}
    </main>
  );
}
