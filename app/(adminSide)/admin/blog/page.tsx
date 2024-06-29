import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import prisma from "@/prisma/prisma";
import { Metadata } from "next";
import { BlogPost } from "@prisma/client";
import ConvertDate from "@/app/components/convertDate";
import Link from "next/link";

type Props = {};

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog description",
};

const getData = async () => {
  const blogPosts: BlogPost[] = await prisma.blogPost.findMany();

  if (!blogPosts) {
    throw new Error("Failed to fetch data");
  }

  return blogPosts;
};

const BlogAdmin = async (props: Props) => {
  const data = await getData();

  if (!data) {
    return <div>No blog posts found</div>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Link</Th>
            <Th>Created At</Th>
            <Th>Updated At</Th>
            <Th isNumeric>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((post) => (
            <Tr key={post.id}>
              <Td>
                <Link href={`/blog/${post.link}`}>{post.title}</Link>
              </Td>
              <Td>{post.content}</Td>
              <Td>
                <ConvertDate date={post.createdAt} />
              </Td>
              <Td>
                <ConvertDate date={post.updatedAt} />
              </Td>
              <Td isNumeric>
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  className="bg-green-800 mr-2 hover:bg-green-600 cursor-pointer "
                >
                  <TagLabel>Edit</TagLabel>
                </Tag>
                <Tag
                  size={"md"}
                  borderRadius="full"
                  variant="solid"
                  className="bg-red-800 hover:bg-red-600 cursor-pointer"
                >
                  <TagLabel>Delete</TagLabel>
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BlogAdmin;
