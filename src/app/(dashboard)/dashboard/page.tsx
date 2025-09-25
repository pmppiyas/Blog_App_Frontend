import { Metadata } from "next"
import Header from '@/components/ui/header'


export const metadata: Metadata = {
  title: "Dashboard - Prisma Blog"
}


export default function DashboardPage() {
  return (
    <div className='h-full'>
      <Header key={"dashboard"} title='Dashboard' />
    </div>
  )
}
