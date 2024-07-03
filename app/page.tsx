import Image from "next/image";
import Header from "./(clientSide)/header";
import { Metadata } from "next";
import prisma from "@/prisma/prisma";
import Link from "next/link";
import Footer from "./(clientSide)/footer";

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
      <div className="m-auto max-w-screen-lg grid grid-cols-12 mt-14">
        <div className="col-span-8">
          <h1 className="font-bold text-2xl">
            Hi, I&apos;m Kostiantyn Rachytelnyi
          </h1>
          <p>
            and it&apos;s my small blog about entrepreneurship, web development,
            money and investing
          </p>
          <div>List with links to social networks</div>
        </div>
        <div className="col-span-4">image</div>
      </div>
      <div className="m-auto max-w-screen-lg mt-20">
        <h2 className="mb-4 text-2xl">Recent Posts</h2>
        {data.map((post) => (
          <div key={post.id}>
            <h3 className="font-semibold text-xl">{post.title}</h3>
            <p>{post.content}</p>
            <Link href={`/blog/${post.link}`} className="underline">
              Read more
            </Link>
          </div>
        ))}
        <div className="mt-8">
          <Link href="/blog" className="">
            All posts
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
