"use client"
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { useRouter } from "next/navigation"
export default function LoginPage() {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }

  return (
    <div className='flex flex-col min-h-screen p-12 space-y-4'>
      <h1>LoginPage</h1>

      <Button onClick={handleBack} className='max-w-min'>Go Back</Button>

      <Link href="/auth/register">
        <Button className='max-w-min'>Go Regirter</Button></Link>
    </div>
  )
}
