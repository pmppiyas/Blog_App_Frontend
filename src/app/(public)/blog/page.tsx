import { Metadata } from "next";
import BlogCard from '@/components/module/blog/BlogCard';
import Header from '@/components/ui/header';
import { IBlog } from '@/interfaces';

export const metadata: Metadata = {
  title: "All blogs - Prisma blog",
  description: "A blog built with Next.js, Prisma, and Tailwind CSS",
}


export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post?limit=100`, {
    next: { revalidate: 10 }
  })

  const data = await res.json()
  const posts: IBlog[] = data.data?.posts;

  return (
    <div className='space-y-4'>
      <Header title='All Blogs' />
      <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 lg:w-9/10 mx-auto '>
        {
          posts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))
        }
      </div>

    </div>
  )
}
