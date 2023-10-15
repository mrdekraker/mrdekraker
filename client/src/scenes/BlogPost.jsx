import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import BlockContent from "@sanity/block-content-to-react";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

// const serializers = {
//   types: {
//     youtube: ({ node }) => {
//       const { url } = node;
//       const id = url.split("=")[1];
//     }
//   }

export default function BlogPost() {
  const [blogPost, setBlogPost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            "name": author->name,
            "authorImage": author->image
          }`
      )
      .then((data) => setBlogPost(data))
      .catch(console.error);
  }, [slug]);

  if (!blogPost) return <div>Loading...</div>;

  return (
    <Box
      border="1px solid red"
    >
      <Typography variant="h1">{blogPost.title}</Typography>
    </Box>
  );
}
