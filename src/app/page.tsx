import Link from "next/link";
import { client } from "@cms/lib/client";
import { recentPostsQuery } from "@cms/queries";
import type { PostPreview } from "@cms/types";
import Image from "next/image";
import Ornament from "@/app/components/Ornament";
import PostListItem from "@/app/components/PostListItem";

const PLACEHOLDER_POSTS: PostPreview[] = [
  {
    _id: "1",
    title: "Why I find the argument from conscience compelling",
    slug: { current: "argument-from-conscience" },
    category: "Faith & Reason",
    publishedAt: "",
    snippet:
      "Newman's approach to moral intuition cuts through a lot of the noise in natural law debates — and it starts somewhere every parent already knows.",
  },
  {
    _id: "2",
    title: "Explaining the Eucharist to a six-year-old",
    slug: { current: "explaining-eucharist" },
    category: "Family Formation",
    publishedAt: "",
    snippet:
      "Children are far more comfortable with mystery than adults give them credit for. Mine taught me that.",
  },
  {
    _id: "3",
    title: "What I miss about Protestant worship",
    slug: { current: "what-i-miss" },
    category: "The Convert's Journey",
    publishedAt: "",
    snippet:
      "Honest reflection on what the journey cost, what I carried with me, and why I think it was worth it anyway.",
  },
];

async function getPosts(): Promise<PostPreview[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return PLACEHOLDER_POSTS;
  try {
    const posts = await client!.fetch<PostPreview[]>(recentPostsQuery);
    return posts?.length ? posts : PLACEHOLDER_POSTS;
  } catch {
    return PLACEHOLDER_POSTS;
  }
}

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero */}
      <div className="max-w-[720px] mx-auto px-8 pt-[5.5rem] pb-14 text-center animate-rise max-sm:px-5 max-sm:pt-16">
        <Ornament />

        <p
          className="text-[0.68rem] tracking-[0.18em] uppercase text-ink-muted mb-5"
          style={{ fontFamily: "var(--font-ui)" }}>
          Catholic theology · family formation · the convert&apos;s journey
        </p>

        <h1
          className="text-[clamp(2.6rem,5vw,4rem)] font-light leading-[1.12] text-ink mb-6"
          style={{ fontFamily: "var(--font-display)" }}>
          A pilgrim still learning
          <br />
          to read <em className="italic text-crimson">the ancient map.</em>
        </h1>

        <p className="text-[1.12rem] leading-[1.85] text-ink-soft max-w-[52ch] mx-auto mb-9">
          I&apos;m a husband, father, musician, athlete and Catholic convert —
          confirmed Easter 2026, Filipino-born, Canadian by citizenship, and
          rooted in Texas. Working through the intellectual and spiritual
          tradition of the Church one question at a time. Pull up a chair.
        </p>

        {/* Photo inset */}
        <div className="w-full max-w-[580px] mx-auto mb-4 overflow-hidden aspect-[16/7] relative">
          <Image
            src="/images/bora.webp"
            alt="A landscape photograph"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="italic text-[0.85rem] text-ink-faint text-center mb-10">
          Somewhere worth slowing down for. Bora Bora 2017.
        </p>

        <div className="flex gap-5 justify-center flex-wrap">
          <Link
            href="/writing"
            className="bg-navy text-cream font-[var(--font-ui)] text-[0.75rem] tracking-[0.12em] uppercase px-8 py-3 no-underline transition-colors duration-200 hover:bg-ink"
            style={{ fontFamily: "var(--font-ui)" }}>
            Start reading
          </Link>
          <Link
            href="/about"
            className="text-ink-muted text-[0.75rem] tracking-[0.12em] uppercase px-8 py-3 no-underline border border-rule transition-colors duration-200 hover:border-ink-muted hover:text-ink"
            style={{ fontFamily: "var(--font-ui)" }}>
            My story
          </Link>
        </div>
      </div>

      {/* Recent posts */}
      <section
        className="mx-auto px-8 pb-20 max-sm:px-5"
        style={{ maxWidth: "820px" }}>
        <div className="flex items-center gap-5 mb-10">
          <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
          <span
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
            }}>
            Latest
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--rule)" }} />
        </div>

        <div className="flex flex-col gap-7">
          {posts.map((post, i) => (
            <PostListItem key={post._id} post={post} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
