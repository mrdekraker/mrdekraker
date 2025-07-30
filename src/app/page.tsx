// app/page.tsx
import { sanity } from "@/sanity/lib/client";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
};

export default async function HomePage() {
  const posts: Post[] = await sanity.fetch(
    `*[_type == "post"]{_id, title, slug}`
  );

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post._id}>
            <a
              href={`/blog/${post.slug.current}`}
              className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
