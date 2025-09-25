import BlogCard from '@/components/module/blog/BlogCard';
import Header from '@/components/ui/header'
import { IBlog } from '@/interfaces';

export default async function BlogPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/post`, {
    cache: "no-store"
  })
  const data = await res.json()
  const blogs = data.data.posts;




  return (
    <div>
      <Header key={"BlogPage"} title='Blogs' />

      <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 lg:w-9/10 mx-auto'>
        {

          blogs.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}
