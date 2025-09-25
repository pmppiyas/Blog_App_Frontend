
import BlogCard from '@/components/module/blog/BlogCard';
import Header from '@/components/ui/header';
import { IBlog } from '@/interfaces';

export default async function Top_Blogs() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post?isFeatured=true`, {
    next: {
      revalidate: 10
    }
  })
  const data = await res.json();
  const blogs = data.data.posts

  return (
    <div className='space-y-8'>
      <Header key={"top_blog"} title='Most Seened Blogs' />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
        {blogs.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  )
}
