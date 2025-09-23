import { Button } from '@/components/ui/button'
import { IBlog } from '@/interfaces'
import Link from "next/link"

export default function BlogCard({ blog }: { blog: IBlog }) {
  return (
    <div className=''>
      <article className="flex flex-col h-full overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="h-56 w-full object-cover"
        />

        <div className="bg-background p-4 sm:p-6 grow-1">
          <time dateTime="2022-10-10" className="block text-xs text-primary opacity-70"> 10th Oct 2022 </time>

          <a href="#">
            <h3 className="mt-0.5 text-lg text-primary">{blog?.title?.slice(0, 30)}</h3>
          </a>

          <p className="mt-2  text-sm/relaxed text-primary opacity-70">{blog?.content?.slice(0, 100)} <Link href={`/blog/${blog.id}`}>
            <Button className='' variant={"link"}>Read More</Button>
          </Link>
          </p>

          <div className='flex justify-between'>
            <p className='text-sm/relaxed  '><span>Author Id</span> {blog.authorId}</p>
            <p className='text-sm/relaxed  '><span>Views</span> {blog.views}</p>
          </div>
        </div>

      </article >
    </div >
  )
}


