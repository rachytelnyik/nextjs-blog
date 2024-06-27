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

type Props = {};

const getBlogPosts = async () => {
  return await prisma.blogPost.findMany();
};

const BlogAdmin = async (props: Props) => {
  const data = await getBlogPosts();

  if (!data) {
    return <div>No blog posts found</div>;
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
          {}
          <Tr>
            <Td>inches</Td>
            <Td>
              millimetres (mm){" "}
              <Tag
                size={"md"}
                borderRadius="full"
                variant="solid"
                colorScheme="green"
              >
                <TagLabel>Green</TagLabel>
              </Tag>
            </Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BlogAdmin;
