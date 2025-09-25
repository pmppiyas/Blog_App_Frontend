import { Metadata } from "next";
import Hero from '@/components/module/home/Hero';
import Top_Blogs from '@/components/module/home/Top_Blogs';


export const metadata: Metadata
  = {
  title: "Home Page - Prisma Blog",
  description: "Welcome to my blog home page where you can find the latest posts and updates.",
  keywords: ["blog", "home", "posts", "updates"],
  authors: [{ name: "Prince Mahmud Piyas", url: "https://yourwebsite.com" }],
  creator: "Prince Mahmud Piyas",
}
export default function HomePage() {
  return (
    <div className=''>
      <Hero />
      <Top_Blogs />
    </div>
  );
}
