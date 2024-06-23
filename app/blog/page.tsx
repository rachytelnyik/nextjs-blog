import prisma from "@/prisma/prisma";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog description",
};

const getData = async () => {
  const blogPost = await prisma.blogPost.findMany();

  if (!blogPost) {
    throw new Error("Failed to fetch data");
  }

  return blogPost;
};

const Blog = async (props: Props) => {
  const data = await getData();
  return (
    <div>
      Blog
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
