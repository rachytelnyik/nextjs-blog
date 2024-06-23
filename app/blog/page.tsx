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
      <h1>Blog</h1>
      {data.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
