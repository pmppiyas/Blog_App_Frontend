import { IBlog } from "@/interfaces";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`);
  const data = await res.json();
  const blogs: IBlog[] = data.data.posts;
  return blogs.slice(0, 6).map((blog) => ({
    blogId: blog.id.toString()
  }));
};


export async function generateMetadata({ params }: { params: { blogId: string } }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${params.blogId}`, {
    cache: "no-store"
  });
  const data = await res.json();
  const blog: IBlog = data.data;

  return {
    title: blog?.title,
    description: blog?.content.slice(0, 160)
  }
}




interface Props {
  params: { blogId: string };
}

export default async function BlogDetail({ params }: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post/${params.blogId}`, {
    cache: "no-store"
  });
  const data = await res.json();
  const blog: IBlog = data.data;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{blog?.title}</h1>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <time dateTime={"2022-10-10"}>{"10th Oct 2022"}</time>
        <div>
          {blog?.tag?.map((tag, idx) => (
            <Badge key={idx} className="ml-2">{tag}</Badge>
          ))}
        </div>
      </div>

      <Separator />

      <img
        alt=""
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2070&q=80"
        className="rounded-md object-cover w-full h-64"
      />

      <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
        <p>{blog?.content}</p>
      </div>

      <hr />
      <div className="flex justify-between">
        <p className="text-sm/relaxed"><span>Author Id</span> {blog?.authorId}</p>
        <p className="text-sm/relaxed"><span>Views</span> {blog?.views}</p>
      </div>
    </div>
  );
}