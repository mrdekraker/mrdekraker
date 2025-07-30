import { PortableTextBlock } from "@portabletext/types";

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  body: PortableTextBlock[];
};
