"use client";
import { useState, useEffect } from "react";
import { IBlog } from "@/interfaces";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";

export default function BlogDetail() {
  const [blog, setBlog] = useState<IBlog>()
  const pathName = usePathname();
  const segments = pathName.split("/");
  const id = segments[2];

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${id}`);
      const data = await res.json();
      const blog = data.data;
      setBlog(blog);
    };
    fetchBlog();
  }, [id]);

  console.log("blog", blog);



  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        {blog?.title}
      </h1>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <time dateTime={"2022-10-10"}>
          {"10th Oct 2022"}
        </time>
        {
          <div>
            {
              blog?.tag?.map((tag, idx) => (
                <Badge key={idx} className="ml-2">{tag}</Badge>
              ))
            }
          </div>
        }
      </div>

      <Separator />

      {/* Featured Image */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        className="rounded-md object-cover w-full h-64"
      />

      {/* Body */}
      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
        <p>{blog?.content}</p>
      </div>

      <hr />
      <div className='flex justify-between'>
        <p className='text-sm/relaxed  '><span>Author Id</span> {blog?.authorId}</p>
        <p className='text-sm/relaxed  '><span>Views</span> {blog?.views}</p>
      </div>
    </div>
  );
}