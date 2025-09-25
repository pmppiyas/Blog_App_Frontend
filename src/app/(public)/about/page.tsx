import { Metadata } from "next";
import Header from '@/components/ui/header';


export const metadata: Metadata = {
  title: "About Us - Prisma blog",
  description: "Learn more about the Prisma blog, our mission, and the team behind it."
}


export default function AboutPage() {
  return (
    <div>
      <Header title='About Us' />
    </div>
  )
}
