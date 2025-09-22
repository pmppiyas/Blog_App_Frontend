import BlogCard from '@/app/module/blog/BlogCard';
import Header from '@/components/ui/header';
import { IBlog } from '@/interfaces';


export default async function BlogPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9", {
    next: {
      revalidate: 30
    }
  })
  const posts: IBlog[] = await res.json();
  console.log(posts)
  return (
    <div className='space-y-4'>
      <Header title='All Blogs' />
      <div className='grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3 gap-8 lg:w-9/10 mx-auto'>
        {
          posts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))
        }
      </div>

    </div>
  )
}
