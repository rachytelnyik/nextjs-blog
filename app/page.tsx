import Image from "next/image";
import Header from "./(clientSide)/header";
import { Metadata } from "next";
import prisma from "@/prisma/prisma";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kronos Realm",
  description: "About entrepreneurship, web development, money and investing",
};

const getData = async () => {
  const blogPost = await prisma.blogPost.findMany({
    // where: {
    //   published: true,
    // },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  if (!blogPost) {
    throw new Error("Failed to fetch data");
  }

  return blogPost;
};

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Header />
      <div className="m-auto max-w-screen-sm">
        <h1>
          <b className="block">Hi, I&apos;m Kostiantyn Rachytelnyi </b>and
          it&apos;s my small blog about entrepreneurship, web development, money
          and investing
        </h1>
      </div>
      <div className="m-auto max-w-screen-sm mt-8">
        <h2 className="mb-4">Last posts</h2>
        {data.map((post) => (
          <div key={post.id}>
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.content}</p>
            <Link href={`/blog/${post.id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </>
  );
}
