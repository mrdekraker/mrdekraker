// src/app/page.tsx
import { sanityClient } from "@/sanity/lib/client";
import { blogPostQuery } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: any;
};

export default async function HomePage() {
  const posts: Post[] = await sanityClient.fetch(blogPostQuery);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">
              Published on {new Date(post.publishedAt).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
