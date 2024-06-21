import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog description",
};

const getData = async () => {
  const res = await fetch("https://api.example.com/...", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Blog = async (props: Props) => {
  const data = await getData();
  return <div>Blog</div>;
};

export default Blog;
