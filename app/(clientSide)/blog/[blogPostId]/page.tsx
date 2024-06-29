import prisma from "@/prisma/prisma";
import React from "react";

const getData = async (blogUrl: string) => {
  const blogPost = await prisma.blogPost.findUnique({
    where: {
      link: blogUrl,
    },
  });

  if (!blogPost) {
    throw new Error("Failed to fetch data");
  }

  return blogPost;
};

const BlogPost = async ({ params }: { params: { blogPostId: string } }) => {
  const data = await getData(params.blogPostId); // This is the blog post URL

  if (!data) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default BlogPost;
