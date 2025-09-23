
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import Navbar from '@/components/module/shared/Navbar'
import Footer from '@/components/module/shared/Footer'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const dashboardLinks = <>
    <Link href="/">
      <Button variant={'outline'}>Home</Button></Link>
    <Link href="/dashboard">
      <Button variant={'outline'}>Dashboard</Button></Link>
    <Link href="/profile">
      <Button variant={'outline'}>Profile</Button></Link>
    <Link href="/settings">
      <Button variant={'outline'}>Setting</Button></Link>
  </>

  return (
    <div className="flex flex-col ">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="flex flex-1">
        {/* Sidebar (visible on lg and up) */}
        <aside className="hidden lg:block  border-r bg-card w-max py-12 px-10">
          <nav className="flex flex-col gap-4">
            {dashboardLinks}
          </nav>
        </aside>

        {/* Mobile Sidebar Trigger */}
        <div className="lg:hidden p-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-max py-12 px-10">
              <nav className="flex flex-col gap-4 ">
                {dashboardLinks}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Page Content */}
        <main className="flex-1  overflow-y-auto h-[calc(100vh_-_70px)] border-3 p-6">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div >
  )
}
