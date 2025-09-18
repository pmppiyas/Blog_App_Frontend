"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const router = useRouter();
  const goBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen flex flex-col space-y-6 items-center justify-center bg-foreground ">
      <h2 className='text-background text-3xl font-mono'>Sorry, page not found !!!</h2>
      <div className='flex gap-4'>
        <Link href="/"><Button size="sm"> Home</Button></Link>
        <Button onClick={goBack} size="sm">Go Back</Button>
      </div>
    </div >
  )
}