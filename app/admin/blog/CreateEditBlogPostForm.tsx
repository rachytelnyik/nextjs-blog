import { BlogPost } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {
  blogPost?: Partial<BlogPost>;
};

const CreateEditBlogPostForm = ({ blogPost }: Props) => {
  const onSubmitHandler = () => {};
  const {} = useForm();   

  return <form onSubmit={onSubmitHandler}></form>;
};

export default CreateEditBlogPostForm;
