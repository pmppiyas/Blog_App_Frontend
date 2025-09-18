import { Button } from '@/components/ui/button'
import Header from '@/components/ui/header';
import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <Header title='All Blogs' />

      <Link href={"/blog/12"}>
        <Button size={"sm"}>Details</Button></Link>
    </div>
  )
}
